"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode, useCallback } from "react";

type Currency = "GBP" | "USD" | "EUR";

type Rates = Record<Currency, number>;

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    rates: Rates;
    loading: boolean;
    convert: (amountGBP: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
    return ctx;
};

// Fallback rates (approximate) in case the API is unavailable
const FALLBACK_RATES: Rates = { GBP: 1, USD: 1.27, EUR: 1.17 };

const CACHE_KEY = "fx_rates_cache";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCachedRates(): { rates: Rates; ts: number } | null {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.ts < CACHE_TTL) return parsed;
    } catch { /* ignore */ }
    return null;
}

function setCachedRates(rates: Rates) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ rates, ts: Date.now() }));
    } catch { /* ignore */ }
}

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");
    const [rates, setRates] = useState<Rates>(() => {
        const cached = getCachedRates();
        return cached ? cached.rates : FALLBACK_RATES;
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cached = getCachedRates();
        if (cached) {
            setRates(cached.rates);
            return;
        }

        let cancelled = false;
        setLoading(true);

        // Fetch GBP→USD & GBP→EUR rates from frankfurter.app (free, no key required)
        fetch("https://api.frankfurter.app/latest?from=GBP&to=USD,EUR")
            .then((r) => r.json())
            .then((data) => {
                if (cancelled) return;
                if (data?.rates) {
                    const newRates: Rates = {
                        GBP: 1,
                        USD: Number(data.rates.USD) || FALLBACK_RATES.USD,
                        EUR: Number(data.rates.EUR) || FALLBACK_RATES.EUR,
                    };
                    setRates(newRates);
                    setCachedRates(newRates);
                }
            })
            .catch(() => {
                if (!cancelled) setRates(FALLBACK_RATES);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    // Convert from GBP base price to selected currency
    const convert = useCallback(
        (amountGBP: number) => {
            return Number((amountGBP * rates[currency]).toFixed(2));
        },
        [rates, currency]
    );

    const value = useMemo(
        () => ({ currency, setCurrency, rates, loading, convert }),
        [currency, rates, loading, convert]
    );

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};

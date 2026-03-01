"use client";
import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

type Currency = "GBP" | "USD" | "EUR";

type Rates = Record<Currency, number>;

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    rates: Rates;
    loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
    return ctx;
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");

    // TODO: Replace with real fx rates (API or cron) if needed.
    // For now keep 1:1 so currency code is passed correctly and UI stays consistent.
    const rates = useMemo<Rates>(() => ({ GBP: 1, USD: 1, EUR: 1 }), []);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, rates, loading: false }}>
            {children}
        </CurrencyContext.Provider>
    );
};

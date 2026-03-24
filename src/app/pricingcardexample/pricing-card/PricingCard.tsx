"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";
import { MdCheckCircle } from "react-icons/md";
import pciDssLogo from "@/assets/icons/pci-dss-compliant-logo-vector.svg";
import visaLogo from "@/assets/icons/visa-logo.svg";
import mastercardLogo from "@/assets/icons/mastercard-logo.svg";

interface PricingCardProps {
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const currencyConfig = {
    GBP: { symbol: "£" },
    USD: { symbol: "$" },
    EUR: { symbol: "€" },
} as const;

const MIN_CUSTOM_AMOUNT = 10;
const MAX_CUSTOM_AMOUNT = 9999;
const TOKENS_PER_1_GBP = 100;

const labelText: Record<string, string> = {
    basic: "Basic",
    highlight: "Popular",
    premium: "Premium"
};

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "basic",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();

    // currency + real exchange rates
    const { currency, rates, loading, convert } = useCurrency();
    const { symbol } = currencyConfig[currency];

    // Store input as string to avoid input glitches (e.g. 13 turning into 103 while typing)
    const [customAmountInput, setCustomAmountInput] = useState<string>(String(MIN_CUSTOM_AMOUNT));

    // Derived numeric value (clamped) — this is in the SELECTED currency
    const customAmount = useMemo(() => {
        const normalized = customAmountInput.replace(/,/g, ".").trim();
        const n = Number(normalized);
        if (!Number.isFinite(n)) return MIN_CUSTOM_AMOUNT;
        return Math.max(Math.min(n, MAX_CUSTOM_AMOUNT), MIN_CUSTOM_AMOUNT);
    }, [customAmountInput]);

    // Convert custom amount back to GBP base for token calculation
    const customAmountInGBP = useMemo(() => {
        const rate = rates[currency];
        if (!rate || rate === 0) return customAmount;
        return customAmount / rate;
    }, [customAmount, rates, currency]);

    const convertedPrice = convert(Number(price));
    const calcTokens = (amountGBP: number) => Math.floor(amountGBP * TOKENS_PER_1_GBP);

    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in", "info");
            return;
        }

        if (price === "dynamic" && customAmount < MIN_CUSTOM_AMOUNT) {
            showAlert(
                `Minimum amount is ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}`,
                "Please enter a higher amount",
                "warning"
            );
            return;
        }

        // PAY AMOUNT in selected currency
        const payAmount = price === "dynamic"
            ? Number(customAmount.toFixed(2))
            : convertedPrice;

        if (!Number.isFinite(payAmount) || payAmount < MIN_CUSTOM_AMOUNT) {
            showAlert(
                "Error",
                `Minimum amount is ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}`,
                "error"
            );
            return;
        }

        const tokensToBuy = price === "dynamic"
            ? calcTokens(customAmountInGBP)
            : tokens;

        const payload = {
            amount: payAmount,
            currency,
            tokens: tokensToBuy,
            packageName: price === "dynamic" ? "Custom Pack" : title,
            user: {
                id: user._id,
                email: user.email,
            },
        };

        try {
            const res = await fetch("/api/transfermit/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                showAlert("Payment error", data?.error || "Payment init failed", "error");
                return;
            }

            if (!data?.redirectUrl) {
                showAlert("Payment error", "Missing redirectUrl", "error");
                return;
            }

            window.location.href = data.redirectUrl;
        } catch (err) {
            showAlert("Payment error", (err as Error).message, "error");
        }
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.cornerLabel}>{labelText[variant]}</div>
            <h3 className={styles.title}>{title}</h3>

            {/* -------- FIXED PRICE WITH CONVERSION ----- */}
            {price !== "dynamic" ? (
                <p className={styles.price}>
                    {symbol}
                    {convertedPrice.toFixed(2)}{" "}
                    <span className={styles.tokens}>/ {tokens} tokens</span>
                </p>
            ) : (

                <>
                    <Input
                        type="text"
                        inputMode="decimal"
                        value={customAmountInput}
                        onChange={(e) => {
                            const next = e.target.value;
                            // allow digits, dot and comma, and empty (while editing)
                            if (!/^[0-9]*[.,]?[0-9]*$/.test(next)) return;
                            if (next.length > 7) return;
                            setCustomAmountInput(next);
                        }}
                        onBlur={() => {
                            // Snap to a sane formatted number on blur
                            setCustomAmountInput(customAmount.toFixed(2));
                        }}
                        slotProps={{
                            input: {
                                inputMode: "decimal",
                            },
                        }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder={`Enter amount (${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}+)`}
                        variant="outlined"
                        size="lg"
                    />

                    <p className={styles.price}>
                        {symbol}
                        {customAmount.toFixed(2)}{" "}
                        <span className={styles.tokens}>
                            ≈ {calcTokens(customAmountInGBP)} tokens
                        </span>
                    </p>
                </>
            )}

            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                        <MdCheckCircle className={styles.featureIcon} />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            {/* Payment trust badges */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", margin: "0.8rem 0 1rem", opacity: 0.7 }}>
                <Image src={visaLogo} alt="Visa" width={40} height={26} />
                <Image src={mastercardLogo} alt="Mastercard" width={40} height={26} />
                <Image src={pciDssLogo} alt="PCI DSS Compliant" width={50} height={26} />
            </div>

            <ButtonUI
                type="button"
                color="secondary"
                hoverColor="secondary"
                sx={{ width: "100%" }}
                onClick={handleBuy}
            >
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;

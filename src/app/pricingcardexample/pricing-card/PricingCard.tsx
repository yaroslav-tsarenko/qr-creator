"use client";

import React, { useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import { useCurrency } from "@/context/CurrencyContext";
import { MdCheckCircle } from "react-icons/md";

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
    const { currency, rates, loading } = useCurrency();
    const { symbol } = currencyConfig[currency];

    const [customAmount, setCustomAmount] = useState(MIN_CUSTOM_AMOUNT);


    const convertPrice = (base: number) => {
        if (loading) return base;
        return base * rates[currency];
    };
    const convertedPrice = convertPrice(Number(price));
    const calcTokens = (amount: number) => Math.floor(amount * 100);

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

        // 🔑 BASE: ціна завжди рахується від токенів
        const baseAmountGBP =
            price === "dynamic"
                ? customAmount
                : tokens / 100; // 100 tokens = £1

        // 🔑 PAY AMOUNT = base * rate валюти
        const payAmount = Number(
            (baseAmountGBP * rates[currency]).toFixed(2)
        );

        if (!Number.isFinite(payAmount) || payAmount < MIN_CUSTOM_AMOUNT) {
            showAlert(
                "Error",
                `Minimum amount is ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}`,
                "error"
            );
            return;
        }

        const tokensToBuy =
            price === "dynamic"
                ? Math.floor(customAmount * 100)
                : tokens;

        const payload = {
            amount: payAmount,      // ✅ СУМА В ОБРАНІЙ ВАЛЮТІ
            currency,               // ✅ GBP | USD | EUR
            tokens: tokensToBuy,
            user: {
                id: user._id,
                email: user.email,
                // Avoid fields not present in IUser
            },
        };

        console.log("[PricingCard] PAYLOAD:", payload);

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
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value.toString().length > 7) return;

                            setCustomAmount(
                                Math.max(Math.min(value, MAX_CUSTOM_AMOUNT), MIN_CUSTOM_AMOUNT)
                            );
                        }}
                        slotProps={{
                            input: {
                                min: MIN_CUSTOM_AMOUNT,
                                max: MAX_CUSTOM_AMOUNT,
                                step: 0.01,
                            },
                        }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder={`Enter amount (${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}+)`}
                        variant="outlined"
                        size="lg"
                    />

                    <p className={styles.price}>
                        {symbol}
                        {convertPrice(customAmount).toFixed(2)}{" "}
                        <span className={styles.tokens}>
                            ≈ {calcTokens(customAmount)} tokens
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

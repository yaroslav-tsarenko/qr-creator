"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Checkbox from "@mui/joy/Checkbox";
import Link from "next/link";
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

const MIN_PURCHASE_AMOUNT = 10;
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
    const { currency, convert, rates } = useCurrency();

    const { symbol } = currencyConfig[currency];

    // Store input as string to avoid input glitches (e.g. 13 turning into 103 while typing)
    const [customAmountInput, setCustomAmountInput] = useState<string>(String(MIN_PURCHASE_AMOUNT));

    // Derived numeric value (clamped) — this is in the SELECTED currency
    const customAmount = useMemo(() => {
        const normalized = customAmountInput.replace(/,/g, ".").trim();
        const n = Number(normalized);
        if (!Number.isFinite(n)) return MIN_PURCHASE_AMOUNT;
        return Math.max(Math.min(n, MAX_CUSTOM_AMOUNT), MIN_PURCHASE_AMOUNT);
    }, [customAmountInput]);

    // NEW — чекбокс
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Convert custom amount in selected currency back to GBP base, then compute tokens
    const customAmountInGBP = useMemo(() => {
        const rate = rates[currency];
        if (!rate || rate === 0) return customAmount;
        return customAmount / rate;
    }, [customAmount, rates, currency]);

    // Tokens for custom pack: based on GBP equivalent
    const calcCustomTokens = (amountGBP: number) => Math.floor(amountGBP * TOKENS_PER_1_GBP);

    // Convert fixed pack GBP price to display currency
    const displayPrice = useMemo(() => {
        if (price === "dynamic") return 0;
        return convert(Number(price));
    }, [price, convert]);

    const handleBuy = async () => {
        if (!acceptedTerms) return;

        if (!user) {
            showAlert("Please sign up", "You need to be signed in to buy tokens", "info");
            setTimeout(() => {
                window.location.href = "/sign-up";
            }, 2000);
            return;
        }

        if (price === "dynamic" && customAmount < MIN_PURCHASE_AMOUNT) {
            showAlert(
                `Minimum amount is ${symbol}${MIN_PURCHASE_AMOUNT.toFixed(2)}`,
                "Please enter a higher amount",
                "warning"
            );
            return;
        }

        // Amount in selected UI currency — this is what we send to Transfermit
        const payAmount = price === "dynamic"
            ? Number(customAmount.toFixed(2))
            : displayPrice;

        // Tokens: for fixed packs use pre-set tokens; for custom use GBP equivalent
        const tokensToBuy = price === "dynamic"
            ? calcCustomTokens(customAmountInGBP)
            : tokens;

        if (!Number.isFinite(payAmount) || payAmount < MIN_PURCHASE_AMOUNT) {
            showAlert(
                "Error",
                `Minimum amount is ${symbol}${MIN_PURCHASE_AMOUNT.toFixed(2)}`,
                "error"
            );
            return;
        }

        try {
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

            const res = await fetch("/api/transfermit/initiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                const msg = data?.error || "Payment init failed";
                showAlert("Payment error", msg, "error");
                return;
            }

            if (!data?.redirectUrl) {
                showAlert("Payment error", "Missing redirectUrl", "error");
                return;
            }

            window.location.href = data.redirectUrl;
        } catch (err) {
            const error = err as Error;
            showAlert("Payment error", error.message || "Something went wrong", "error");
        }
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.cornerLabel}>{labelText[variant]}</div>
            <h3 className={styles.title}>{title}</h3>

            {price === "dynamic" ? (
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
                        placeholder={`Enter amount (${symbol}${MIN_PURCHASE_AMOUNT.toFixed(2)}+)`}
                        variant="outlined"
                        size="lg"
                    />

                    <p className={styles.price}>
                        {symbol}{customAmount.toFixed(2)}{" "}
                        <span className={styles.tokens}>
                            ≈ {calcCustomTokens(customAmountInGBP)} tokens
                        </span>
                    </p>
                </>
            ) : (
                <p className={styles.price}>
                    {symbol}{displayPrice.toFixed(2)}
                    <span className={styles.tokens}>/{tokens} tokens</span>
                </p>
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


            {/* Terms Checkbox */}
            <Checkbox
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                label={
                    <span>
                        I agree to{" "}
                        <Link href="/terms-and-conditions" style={{ color: "#4A8BFF", textDecoration: "underline" }}>
                            Terms & Conditions
                        </Link>
                    </span>
                }
                sx={{ mb: 2 }}
            />

            {/* Button becomes enabled only if agreed */}
            <ButtonUI
                type="button"
                color="secondary"
                hoverColor="secondary"
                sx={{
                    width: "100%",
                    opacity: acceptedTerms ? 1 : 0.5,
                    cursor: acceptedTerms ? "pointer" : "not-allowed",
                }}
                onClick={acceptedTerms ? handleBuy : undefined}
            >
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;

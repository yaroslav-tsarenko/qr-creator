"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LangCode = "en" | "tr" | "el" | "da" | "hu";

type I18nContextType = {
    lang: LangCode;
    setLang: (l: LangCode) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [lang, setLangState] = useState<LangCode>("en");

    useEffect(() => {
        try {
            const SUPPORTED: LangCode[] = ["en", "tr", "el", "da", "hu"];
            const saved = localStorage.getItem("lang") as LangCode | null;
            if (saved && SUPPORTED.includes(saved)) {
                setLangState(saved);
                return;
            }
            const browser = (navigator.language || "").toLowerCase();
            const detected = SUPPORTED.find((c) => browser.startsWith(c));
            setLangState(detected ?? "en");
        } catch {
            setLangState("en");
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("lang", lang);
        } catch {}
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    const setLang = (l: LangCode) => setLangState(l);

    const value = useMemo(() => ({ lang, setLang }), [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
    return ctx;
};
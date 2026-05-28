import React from "react";
import { Select, Option } from "@mui/joy";
import styles from "./Selectors.module.scss";
import { useI18n, LangCode } from "@/context/i18nContext";
import { useCurrency } from "@/context/CurrencyContext";

const Selectors = () => {
    const { currency, setCurrency } = useCurrency();
    const { lang, setLang } = useI18n();

    return (
        <div className={styles.selectorsWrapper}>
            <div className={styles.selectorBlock}>
                <Select
                    value={lang}
                    onChange={(_, newValue) => newValue && setLang(newValue as LangCode)}
                    size="md"
                    variant="soft"
                    sx={{
                        background: "#f7f7fa",
                        borderRadius: "8px",
                        minWidth: 120,
                        fontWeight: 600,
                    }}
                >
                    <Option value="en">English</Option>
                    <Option value="el">Ελληνικά</Option>
                    <Option value="da">Dansk</Option>
                    <Option value="hu">Magyar</Option>
                </Select>
            </div>
            <div className={styles.selectorBlock}>
                <Select
                    value={currency}
                    onChange={(_, newValue) => newValue && setCurrency(newValue)}
                    size="md"
                    variant="soft"
                    sx={{
                        background: "#f7f7fa",
                        borderRadius: "8px",
                        minWidth: 120,
                        fontWeight: 600,
                    }}
                >
                    <Option value="GBP">£ GBP</Option>
                    <Option value="USD">$ USD</Option>
                    <Option value="EUR">€ EUR</Option>
                    <Option value="DKK">kr DKK</Option>
                    <Option value="HUF">Ft HUF</Option>
                </Select>
            </div>
        </div>
    );
};

export default Selectors;

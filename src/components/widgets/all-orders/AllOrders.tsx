"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import { useI18n } from "@/context/i18nContext";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "./AllOrders.module.scss";

const translations = {
    en: {
        title: "Your Orders",
        empty: "No orders yet.",
        charge: (amount: number) => `-${amount} tokens`,
    },
    tr: {
        title: "Siparişleriniz",
        empty: "Henüz sipariş yok.",
        charge: (amount: number) => `-${amount} jeton`,
    },
};

const TOKEN_AMOUNT = 30;

const OrdersSection: React.FC = () => {
    const { orders } = useAllOrders();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }) + " " + date.toLocaleTimeString(lang === "tr" ? "tr-TR" : "en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatId = (id: string) => id.slice(-6);

    return (
        <Box className={styles.ordersSection}>
            <Typography level="h3" sx={{ mb: 2, fontWeight: 700 }}>
                {t.title}
            </Typography>
            {orders.length === 0 ? (
                <Typography level="body-md" sx={{ color: "#777" }}>
                    {t.empty}
                </Typography>
            ) : (
                <Box sx={{ display: "grid", gap: 2 }}>
                    {orders.map((order) => (
                        <Card
                            key={order._id}
                            variant="outlined"
                            sx={{
                                borderRadius: 12,
                                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                                transition: "box-shadow 0.2s",
                                "&:hover": {
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                                },
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Avatar variant="soft" size="sm">
                                        <CreditCardIcon fontSize="small" />
                                    </Avatar>
                                    <Typography level="title-md" sx={{ fontWeight: 600 }}>
                                        #{formatId(order._id)}
                                    </Typography>
                                </Box>
                                <Chip color="danger" variant="soft" startDecorator={<CreditCardIcon fontSize="small" />}>
                                    {t.charge(TOKEN_AMOUNT)}
                                </Chip>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <EmailIcon fontSize="small" sx={{ color: "#0070f3" }} />
                                <Typography level="body-sm">{order.email}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <CalendarMonthIcon fontSize="small" sx={{ color: "#666" }} />
                                <Typography level="body-xs" sx={{ color: "#666" }}>
                                    {formatDate(order.createdAt)}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default OrdersSection;

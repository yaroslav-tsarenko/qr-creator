"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import PDFExtractor from "@/components/features/pdf-extractor/PDFExtractor";

const OrdersSection: React.FC = () => {
    const { orders, refreshOrders } = useAllOrders();

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }) + " " + date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatId = (id: string) => {
        return id.slice(-6); // тільки останні 6 символів
    };

    return (
        <div className={styles.ordersSection}>
            <h3 className={styles.title}>Your Orders</h3>
            {orders.length === 0 ? (
                <p className={styles.empty}>No orders yet.</p>
            ) : (
                <PDFExtractor orders={orders}>
                    <ul className={styles.orderList}>
                        {orders.map((order) => (
                            <li key={order._id} className={styles.orderCard}>
                                <div className={styles.orderHeader}>
                                    <span className={styles.orderId}>#{formatId(order._id)}</span>
                                    <span className={styles.charge}>-30 tokens</span>
                                </div>
                                <p className={styles.email}>{order.email}</p>
                                <p className={styles.date}>{formatDate(order.createdAt)}</p>
                            </li>
                        ))}
                    </ul>
                </PDFExtractor>
            )}
        </div>
    );
};

export default OrdersSection;

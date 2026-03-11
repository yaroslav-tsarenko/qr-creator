import React from "react";
import { Document, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

type InvoiceInput = {
    invoiceNumber: string;
    issueDate: Date;
    referenceId: string;
    packageName: string;
    tokens: number;
    paymentAmount: number;
    currency: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    customerAddress: {
        street?: string;
        city?: string;
        country?: string;
        postalCode?: string;
    };
};

const styles = StyleSheet.create({
    page: {
        padding: 32,
        fontSize: 11,
        fontFamily: "Helvetica",
        color: "#1f2937",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 24,
    },
    block: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 4,
    },
    subheading: {
        fontSize: 11,
        color: "#4b5563",
        marginBottom: 2,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 8,
        textTransform: "uppercase",
    },
    card: {
        border: "1 solid #dbe3ee",
        borderRadius: 6,
        padding: 14,
        marginBottom: 18,
    },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#eef4fb",
        borderBottom: "1 solid #dbe3ee",
        padding: 8,
        fontWeight: 700,
    },
    tableRow: {
        flexDirection: "row",
        borderBottom: "1 solid #e5e7eb",
        padding: 8,
    },
    colWide: {
        flex: 3,
    },
    col: {
        flex: 1,
        textAlign: "right",
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
    },
    totalBox: {
        width: 220,
        border: "1 solid #dbe3ee",
        borderRadius: 6,
        padding: 10,
    },
    totalText: {
        fontSize: 12,
        fontWeight: 700,
    },
    footer: {
        marginTop: 18,
        fontSize: 10,
        color: "#6b7280",
        lineHeight: 1.5,
    },
});

function formatCurrency(currency: string, amount: number) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}

function compactAddress(address: InvoiceInput["customerAddress"]) {
    return [address.street, address.city, address.postalCode, address.country].filter(Boolean).join(", ");
}

function InvoiceDocument({ data }: { data: InvoiceInput }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={[styles.row, styles.block]}>
                    <View>
                        <Text style={styles.heading}>INVOICE</Text>
                        <Text style={styles.subheading}>Invoice No: {data.invoiceNumber}</Text>
                        <Text style={styles.subheading}>Issue Date: {data.issueDate.toISOString().slice(0, 10)}</Text>
                        <Text style={styles.subheading}>Payment Ref: {data.referenceId}</Text>
                    </View>
                    <View>
                        <Text style={styles.sectionTitle}>Seller</Text>
                        <Text>{COMPANY_LEGAL_NAME}</Text>
                        <Text>Company No: {COMPANY_NUMBER}</Text>
                        <Text>{COMPANY_ADDRESS}</Text>
                        <Text>{COMPANY_EMAIL}</Text>
                        <Text>{COMPANY_PHONE}</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Bill To</Text>
                    <Text>{data.customerName}</Text>
                    <Text>{data.customerEmail}</Text>
                    {data.customerPhone ? <Text>{data.customerPhone}</Text> : null}
                    {compactAddress(data.customerAddress) ? <Text>{compactAddress(data.customerAddress)}</Text> : null}
                </View>

                <View style={styles.block}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.colWide}>Description</Text>
                        <Text style={styles.col}>Tokens</Text>
                        <Text style={styles.col}>Amount</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.colWide}>{data.packageName} token purchase</Text>
                        <Text style={styles.col}>{data.tokens}</Text>
                        <Text style={styles.col}>{formatCurrency(data.currency, data.paymentAmount)}</Text>
                    </View>
                </View>

                <View style={styles.totalRow}>
                    <View style={styles.totalBox}>
                        <Text style={styles.totalText}>Total: {formatCurrency(data.currency, data.paymentAmount)}</Text>
                    </View>
                </View>

                <Text style={styles.footer}>
                    Payment received successfully. This invoice was generated automatically after your completed checkout.
                </Text>
            </Page>
        </Document>
    );
}

export async function generateInvoicePdfBase64(data: InvoiceInput) {
    const instance = pdf(<InvoiceDocument data={data} />);
    const output = await instance.toBuffer();
    const buffer = Buffer.isBuffer(output) ? output : Buffer.from(output);
    return buffer.toString("base64");
}

import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME } from '@/resources/constants';
import { pricingCardsEn } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — QR Code Configurator for Any Need`,
        description: `Create detailed, custom QR codes instantly. Every QR requires 30 tokens. Fast, secure, and flexible for any use case.`,
        keywords: ["QR code", "configurator", "generator", "tokens", "custom", "fast", "secure"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} QR Configurator`,
            description: "Create custom QR codes for any need. Fast, flexible, and secure.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "qr-generator",
        },
        {
            type: "hero",
            bgImage: "image1",
            title: "The Fastest Way to Create QR Codes",
            description:
                "Unlock the power of instant QR code generation. Our configurator is designed for speed, flexibility, and security. Every QR code is ready in seconds and tailored to your needs.",
            buttons: [
                { text: "Try QR Generator", link: "/get-started", color: "primary" }, // 👈 Start Now link
                { text: "See Examples", link: "/services", color: "secondary" }, // 👈 What We Do link
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "2rem 0" },
            items: [
                {
                    key: "feature1",
                    block: {
                        type: "text",
                        description:
                            "Create QR codes for URLs, text, contact info, WiFi, events, and more. Tailor every QR to your exact needs.",
                        bullets: [
                            "Supports multiple data types",
                            "Easy to configure",
                            "Preview before download",
                        ],
                        iconName: "edit",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description:
                            "Choose colors, add logos, and set error correction levels for maximum reliability and branding.",
                        bullets: [
                            "Custom colors and branding",
                            "Logo embedding",
                            "High error correction",
                        ],
                        iconName: "palette",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description:
                            "Get your QR code instantly after payment. Download in PNG, SVG, or PDF formats for print or digital use.",
                        bullets: ["No waiting time", "Multiple formats", "Ready for print"],
                        iconName: "time",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                    },
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description:
                            "Your data is protected. Every QR code is unique and safe for business or personal use.",
                        bullets: [
                            "Secure technology",
                            "Private and unique codes",
                            "Trusted by professionals",
                        ],
                        iconName: "lock",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: true,
                        centerDescription: false,
                    },
                },
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsEn,
        },
        {
            type: "faq",
            items: [
                {
                    question: "What is a QR code configurator?",
                    answer:
                        "It's a tool to create custom QR codes for any purpose, instantly and securely. You can choose the content, style, and format.",
                },
                {
                    question: "How much does each QR code cost?",
                    answer:
                        "Each QR code requires 30 tokens. No subscriptions or hidden fees. Buy tokens and use them as needed.",
                },
                {
                    question: "How fast do I get my QR code?",
                    answer:
                        "Your QR code is generated and delivered instantly after payment. Download it in your preferred format.",
                },
                {
                    question: "Can I use QR codes for business?",
                    answer:
                        "Yes! Our QR codes are perfect for business cards, product tracking, marketing, event tickets, and more.",
                },
                {
                    question: "Is my data safe?",
                    answer:
                        "Absolutely. We use secure technology to protect your information. Your QR codes are unique and private.",
                },
                {
                    question: "What formats are available?",
                    answer:
                        "You can download QR codes as PNG, SVG, or PDF, ready for print or digital use.",
                },
                {
                    question: "Do I need technical skills?",
                    answer:
                        "No technical skills required. Our configurator is designed for everyone.",
                },
                {
                    question: "Can I customize the look of my QR code?",
                    answer:
                        "Yes, you can choose colors, add logos, and set error correction levels for maximum reliability.",
                },
            ],
        },
    ],
};

export default schema;

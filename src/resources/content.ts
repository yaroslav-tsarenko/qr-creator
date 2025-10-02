import { media } from "@/resources/media";
import {COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER} from "@/resources/constants";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const headerContent = {
    logo: {
        src: media.logo.src,
        alt: "Site Logo",
        href: "/"
    },
    links: [
        { label: "Our Story", href: "/about-us" },         // About
        { label: "What We Do", href: "/services" },        // Services
        { label: "Plans & Rates", href: "/pricing" },      // Pricing
        { label: "Help Center", href: "/faq" },            // Faq
        { label: "Start Now", href: "/get-started" },      // Get Started
        { label: "Reach Out", href: "/contact-us" },       // Contact Us
    ]
};

export const footerContent = {
    logo: { src: media.logo.src, alt: "Site Logo", href: "/" },
    columns: [
        {
            title: "Navigation",
            links: [
                { label: "Our Story", href: "/about-us" },         // About
                { label: "What We Do", href: "/services" },        // Services
                { label: "Plans & Rates", href: "/pricing" },      // Pricing
                { label: "Help Center", href: "/faq" },            // Faq
                { label: "Start Now", href: "/get-started" },      // Get Started
                { label: "Reach Out", href: "/contact-us" },       // Contact Us
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Privacy Policy", href: "/cookie-policy" },
            ],
        },
    ],
    contact: {
        email: COMPANY_EMAIL,
    },
    legal: {
        companyName: COMPANY_LEGAL_NAME,
        companyNumber: COMPANY_NUMBER,
        companyEmail: COMPANY_EMAIL,
        addressLines: [
            COMPANY_ADDRESS,
        ],
    },
};
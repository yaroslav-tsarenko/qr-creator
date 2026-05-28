import { media } from "@/resources/media";
import {COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER, COMPANY_PHONE} from "@/resources/constants";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { LangCode } from "@/context/i18nContext";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

const headerTranslations: Record<LangCode, { links: { label: string; href: string }[] }> = {
    en: {
        links: [
            { label: "Our Story", href: "/about-us" },
            { label: "What We Do", href: "/services" },
            { label: "Plans & Rates", href: "/pricing" },
            { label: "Help Center", href: "/faq" },
            { label: "Start Now", href: "/get-started" },
            { label: "Reach Out", href: "/contact-us" },
        ],
    },
    tr: {
        links: [
            { label: "Hakkımızda", href: "/about-us" },
            { label: "Hizmetler", href: "/services" },
            { label: "Fiyatlandırma", href: "/pricing" },
            { label: "SSS", href: "/faq" },
            { label: "Başlayın", href: "/get-started" },
            { label: "İletişim", href: "/contact-us" },
        ],
    },
    el: {
        links: [
            { label: "Η Ιστορία μας", href: "/about-us" },
            { label: "Τι Κάνουμε", href: "/services" },
            { label: "Τιμές", href: "/pricing" },
            { label: "Βοήθεια", href: "/faq" },
            { label: "Ξεκινήστε", href: "/get-started" },
            { label: "Επικοινωνία", href: "/contact-us" },
        ],
    },
    da: {
        links: [
            { label: "Vores Historie", href: "/about-us" },
            { label: "Hvad Vi Gør", href: "/services" },
            { label: "Priser", href: "/pricing" },
            { label: "Hjælp", href: "/faq" },
            { label: "Kom i Gang", href: "/get-started" },
            { label: "Kontakt Os", href: "/contact-us" },
        ],
    },
    hu: {
        links: [
            { label: "Rólunk", href: "/about-us" },
            { label: "Szolgáltatások", href: "/services" },
            { label: "Árak", href: "/pricing" },
            { label: "Súgó", href: "/faq" },
            { label: "Kezdés", href: "/get-started" },
            { label: "Kapcsolat", href: "/contact-us" },
        ],
    },
};

const footerTranslations: Record<LangCode, { navTitle: string; legalTitle: string; navLinks: { label: string; href: string }[]; legalLinks: { label: string; href: string }[] }> = {
    en: {
        navTitle: "Navigation",
        legalTitle: "Legal",
        navLinks: [
            { label: "Our Story", href: "/about-us" },
            { label: "What We Do", href: "/services" },
            { label: "Plans & Rates", href: "/pricing" },
            { label: "Help Center", href: "/faq" },
            { label: "Start Now", href: "/get-started" },
            { label: "Reach Out", href: "/contact-us" },
        ],
        legalLinks: [
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Cookie Policy", href: "/cookie-policy" },
            { label: "Refund Policy", href: "/refund-policy" },
            { label: "Privacy Policy", href: "/privacy-policy" },
        ],
    },
    tr: {
        navTitle: "Navigasyon",
        legalTitle: "Yasal",
        navLinks: [
            { label: "Hakkımızda", href: "/about-us" },
            { label: "Hizmetler", href: "/services" },
            { label: "Fiyatlandırma", href: "/pricing" },
            { label: "SSS", href: "/faq" },
            { label: "Başlayın", href: "/get-started" },
            { label: "İletişim", href: "/contact-us" },
        ],
        legalLinks: [
            { label: "Şartlar ve Koşullar", href: "/terms-and-conditions" },
            { label: "Çerez Politikası", href: "/cookie-policy" },
            { label: "İade Politikası", href: "/refund-policy" },
            { label: "Gizlilik Politikası", href: "/privacy-policy" },
        ],
    },
    el: {
        navTitle: "Πλοήγηση",
        legalTitle: "Νομικά",
        navLinks: [
            { label: "Η Ιστορία μας", href: "/about-us" },
            { label: "Τι Κάνουμε", href: "/services" },
            { label: "Τιμές", href: "/pricing" },
            { label: "Βοήθεια", href: "/faq" },
            { label: "Ξεκινήστε", href: "/get-started" },
            { label: "Επικοινωνία", href: "/contact-us" },
        ],
        legalLinks: [
            { label: "Όροι & Προϋποθέσεις", href: "/terms-and-conditions" },
            { label: "Πολιτική Cookies", href: "/cookie-policy" },
            { label: "Πολιτική Επιστροφών", href: "/refund-policy" },
            { label: "Πολιτική Απορρήτου", href: "/privacy-policy" },
        ],
    },
    da: {
        navTitle: "Navigation",
        legalTitle: "Juridisk",
        navLinks: [
            { label: "Vores Historie", href: "/about-us" },
            { label: "Hvad Vi Gør", href: "/services" },
            { label: "Priser", href: "/pricing" },
            { label: "Hjælp", href: "/faq" },
            { label: "Kom i Gang", href: "/get-started" },
            { label: "Kontakt Os", href: "/contact-us" },
        ],
        legalLinks: [
            { label: "Vilkår & Betingelser", href: "/terms-and-conditions" },
            { label: "Cookiepolitik", href: "/cookie-policy" },
            { label: "Refusionspolitik", href: "/refund-policy" },
            { label: "Privatlivspolitik", href: "/privacy-policy" },
        ],
    },
    hu: {
        navTitle: "Navigáció",
        legalTitle: "Jogi",
        navLinks: [
            { label: "Rólunk", href: "/about-us" },
            { label: "Szolgáltatások", href: "/services" },
            { label: "Árak", href: "/pricing" },
            { label: "Súgó", href: "/faq" },
            { label: "Kezdés", href: "/get-started" },
            { label: "Kapcsolat", href: "/contact-us" },
        ],
        legalLinks: [
            { label: "Általános Feltételek", href: "/terms-and-conditions" },
            { label: "Cookie Szabályzat", href: "/cookie-policy" },
            { label: "Visszatérítési Szabályzat", href: "/refund-policy" },
            { label: "Adatvédelmi Szabályzat", href: "/privacy-policy" },
        ],
    },
};

export function getHeaderContent(lang: LangCode = "en") {
    const t = headerTranslations[lang] || headerTranslations.en;
    return {
        logo: {
            src: media.logo.src,
            alt: "Site Logo",
            href: "/",
        },
        links: t.links,
    };
}

export function getFooterContent(lang: LangCode = "en") {
    const t = footerTranslations[lang] || footerTranslations.en;
    return {
        logo: { src: media.logo.src, alt: "Site Logo", href: "/" },
        columns: [
            { title: t.navTitle, links: t.navLinks },
            { title: t.legalTitle, links: t.legalLinks },
        ],
        contact: {
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
        },
        legal: {
            companyName: COMPANY_LEGAL_NAME,
            companyNumber: COMPANY_NUMBER,
            companyEmail: COMPANY_EMAIL,
            addressLines: [COMPANY_ADDRESS],
        },
        socials: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/avemexqr.uk/",
                icon: FaInstagram,
                brandColor: "#E1306C",
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/avemex-uk",
                icon: FaLinkedin,
                brandColor: "#0A66C2",
            },
        ],
        payments: [
            { label: "Visa", src: media.visa?.src, alt: "Visa" },
            { label: "Mastercard", src: media.mastercard?.src, alt: "Mastercard" },
            { label: "PCI DSS Compliant", src: media.pci_dss?.src, alt: "PCI DSS Compliant" },
        ],
    };
}

export const headerContent = getHeaderContent("en");
export const footerContent = getFooterContent("en");

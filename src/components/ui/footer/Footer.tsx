"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { footerContent } from "@/resources/content";
import { useI18n } from "@/context/i18nContext";

const Footer: React.FC = () => {
    const { logo, columns, contact, socials, legal, payments } = footerContent;
    const { lang } = useI18n();

    const translations = {
        en: {
            company: "Company",
            address: "Address",
            email: "Email",
            phone: "Phone",
            rights: "All rights reserved.",
            followUs: "Follow us",
            payments: "Payments",
        },
        tr: {
            company: "Şirket",
            address: "Adres",
            email: "E-posta",
            phone: "Telefon",
            rights: "Tüm hakları saklıdır.",
            followUs: "Bizi takip edin",
            payments: "Ödemeler",
        },
    };

    const t = translations[lang];

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href={logo.href} className={styles.logo}>
                    <Image src={logo.src} alt={logo.alt} width={120} height={40} />
                </Link>

                {/* Columns */}
                <div className={styles.columns}>
                    {columns.map((col) => (
                        <div key={col.title} className={styles.column}>
                            <h4>{col.title}</h4>
                            {col.links.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Company Info */}
                    {legal && (
                        <div className={styles.column}>
                            <h4>{t.company}</h4>
                            <p>{legal.companyName}</p>
                            {legal.companyNumber && <p>{legal.companyNumber}</p>}
                            {legal.addressLines?.map((line, idx) => (
                                <p key={idx}>{line}</p>
                            ))}
                            {contact.email && (
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            )}
                            {"phone" in contact && contact.phone && (
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            )}

                            {(!!socials?.length || !!payments?.length) && (
                                <div className={styles.companyExtras}>
                                    {!!payments?.length && (
                                        <div className={styles.companyExtrasBlock}>
                                            <div className={styles.companyExtrasTitle}>{t.payments}</div>
                                            <div className={styles.paymentLogos}>
                                                {payments
                                                    .filter((p) => !!p.src)
                                                    .map((p) => (
                                                        <Image
                                                            key={p.label}
                                                            src={p.src!}
                                                            alt={p.alt}
                                                            width={54}
                                                            height={34}
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                    )}

                                    {!!socials?.length && (
                                        <div className={styles.companyExtrasBlock}>
                                            <div className={styles.companyExtrasTitle}>{t.followUs}</div>
                                            <div className={styles.companySocials}>
                                                {socials.map((s) => {
                                                    const Icon = s.icon;
                                                    return (
                                                        <a
                                                            key={s.label}
                                                            href={s.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={s.label}
                                                            style={{ color: s.brandColor }}
                                                        >
                                                            <Icon size={25} />
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom rights */}
            <div className={styles.rights}>
                © {new Date().getFullYear()} {t.rights}
            </div>
        </footer>
    );
};

export default Footer;

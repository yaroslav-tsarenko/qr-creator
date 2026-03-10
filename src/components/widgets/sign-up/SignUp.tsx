"use client";

import { Formik, FormikHelpers } from "formik";
import { Form } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit,
    SignUpValues
} from "@/validationSchemas/sign-up/schema";
import { useI18n } from "@/context/i18nContext";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { allowedCountryOptions } from "@/resources/allowedCountries";
import styles from "./SignUp.module.scss";

const translations = {
    en: {
        eyebrow: "Verified onboarding",
        sideTitle: "Create a complete customer profile",
        sideText: "Registration now collects the data required for compliance and payment workflows. All fields are stored with the user account.",
        checklist: [
            "Identity and contact details in one step",
            "Structured address with country restrictions",
            "Cleaner layout for desktop and mobile"
        ],
        title: "Create account",
        description: "Fill in all required account details to finish registration.",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        password: "Password",
        phone: "Phone number",
        dateOfBirth: "Date of birth",
        street: "Street",
        city: "City",
        country: "Country",
        postalCode: "Postal code",
        submit: "Create account",
    },
    tr: {
        eyebrow: "Doğrulanmış kayıt",
        sideTitle: "Eksiksiz bir müşteri profili oluşturun",
        sideText: "Kayıt artık uyumluluk ve ödeme süreçleri için gerekli bilgileri toplar. Tüm alanlar kullanıcı hesabıyla birlikte saklanır.",
        checklist: [
            "Kimlik ve iletişim bilgileri tek adımda",
            "Ülke kısıtlamalı yapılandırılmış adres",
            "Masaüstü ve mobil için daha temiz düzen"
        ],
        title: "Hesap oluştur",
        description: "Kaydı tamamlamak için gerekli tüm bilgileri doldurun.",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        password: "Şifre",
        phone: "Telefon numarası",
        dateOfBirth: "Doğum tarihi",
        street: "Sokak",
        city: "Şehir",
        country: "Ülke",
        postalCode: "Posta kodu",
        submit: "Hesap oluştur",
    }
};

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    return (
        <Formik<SignUpValues>
            initialValues={signUpInitialValues}
            validate={signUpValidation}
            onSubmit={async (values, { setSubmitting }: FormikHelpers<SignUpValues>) =>
                signUpOnSubmit(values, { setSubmitting }, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <section className={styles.page}>
                    <div className={styles.card}>
                        <aside className={styles.intro}>
                            <div>
                                <span className={styles.badge}>{t.eyebrow}</span>
                                <h1 className={styles.introTitle}>{t.sideTitle}</h1>
                                <p className={styles.introText}>{t.sideText}</p>
                            </div>
                            <div className={styles.checklist}>
                                {t.checklist.map((item: string) => (
                                    <div key={item} className={styles.checkItem}>{item}</div>
                                ))}
                            </div>
                        </aside>
                        <div className={styles.formPanel}>
                            <h2 className={styles.heading}>{t.title}</h2>
                            <p className={styles.description}>{t.description}</p>
                            <Form className={styles.form}>
                                <InputUI formik name="firstName" label={t.firstName} placeholder={t.firstName} fullWidth />
                                <InputUI formik name="lastName" label={t.lastName} placeholder={t.lastName} fullWidth />
                                <InputUI formik name="email" type="email" label={t.email} placeholder={t.email} fullWidth />
                                <InputUI formik name="password" type="password" label={t.password} placeholder={t.password} fullWidth />
                                <InputUI formik name="phone" type="tel" label={t.phone} placeholder={t.phone} fullWidth />
                                <InputUI formik name="dateOfBirth" type="date" label={t.dateOfBirth} fullWidth InputLabelProps={{ shrink: true }} />
                                <InputUI formik name="address.street" label={t.street} placeholder={t.street} fullWidth />
                                <InputUI formik name="address.city" label={t.city} placeholder={t.city} fullWidth />
                                <InputUI formik name="address.country" label={t.country} select fullWidth options={allowedCountryOptions} />
                                <InputUI formik name="address.postalCode" label={t.postalCode} placeholder={t.postalCode} fullWidth />
                                <div className={`${styles.fullWidth} ${styles.submit}`}>
                                    <ButtonUI type="submit" color="secondary" disabled={isSubmitting} loading={isSubmitting} text={t.submit} fullWidth />
                                </div>
                            </Form>
                        </div>
                    </div>
                </section>
            )}
        </Formik>
    );
}

"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Card, CardContent, Typography, Box } from "@mui/material";
import Confetti from "react-confetti";
import styles from "./ContactUsForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { useI18n } from "@/context/i18nContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { COMPANY_ADDRESS } from "@/resources/constants";

const translations = {
    en: {
        formTitle: "Contact Us",
        formDesc: "Fill out the form below and we’ll get back to you as soon as possible.",
        firstName: "First Name",
        secondName: "Second Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message (optional)",
        send: "Send",
        successMsg: "Thanks! Your data sent successfully!",
        successAlertTitle: "Success",
        successAlertMsg: "Your request has been sent!",
        errorAlertTitle: "Error",
        errorAlertMsg: "Failed to send. Please try again.",
        mapTitle: "Find Us Here"
    },
    tr: {
        formTitle: "Bize Ulaşın",
        formDesc: "Aşağıdaki formu doldurun, en kısa sürede size geri döneceğiz.",
        firstName: "Ad",
        secondName: "Soyad",
        email: "E-posta",
        phone: "Telefon Numarası",
        message: "Mesaj (isteğe bağlı)",
        send: "Gönder",
        successMsg: "Teşekkürler! Bilgileriniz başarıyla gönderildi!",
        successAlertTitle: "Başarılı",
        successAlertMsg: "Talebiniz gönderildi!",
        errorAlertTitle: "Hata",
        errorAlertMsg: "Gönderilemedi. Lütfen tekrar deneyin.",
        mapTitle: "Bizi Burada Bulun"
    },
};

const ContactUsForm = () => {
    const { showAlert } = useAlert();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg(t.successMsg);
            setShowConfetti(true);
            showAlert(t.successAlertTitle, t.successAlertMsg, "success");
            setTimeout(() => setShowConfetti(false), 1000000);
        } catch {
            showAlert(t.errorAlertTitle, t.errorAlertMsg, "error");
        }
        setSubmitting(false);
    };

    return (
        <Box
            className={styles.contactUsWrapper}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
        >
            {showConfetti && <Confetti />}

            {/* Contact Form */}
            <Card sx={{ maxWidth: 480, width: "100%", boxShadow: 3, borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight={700} mb={1} color="primary">
                        {t.formTitle}
                    </Typography>
                    <Typography variant="body1" mb={3} color="text.secondary">
                        {t.formDesc}
                    </Typography>
                    {successMsg ? (
                        <Box
                            sx={{
                                color: "#2e7d32",
                                fontWeight: 600,
                                textAlign: "center",
                                fontSize: "1.2rem",
                                minHeight: "180px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {successMsg}
                        </Box>
                    ) : (
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                                        <Field name="name">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.firstName}
                                                    error={touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                        <Field name="secondName">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.secondName}
                                                    error={touched.secondName && !!errors.secondName}
                                                    helperText={touched.secondName && errors.secondName}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="email">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.email}
                                                    type="email"
                                                    error={touched.email && !!errors.email}
                                                    helperText={touched.email && errors.email}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="phone">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.phone}
                                                    type="tel"
                                                    error={touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="message">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.message}
                                                    multiline
                                                    minRows={3}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <ButtonUI type="submit" color="primary" fullWidth disabled={isSubmitting}>
                                        {t.send}
                                    </ButtonUI>
                                </Form>
                            )}
                        </Formik>
                    )}
                </CardContent>
            </Card>

            {/* Google Map */}
            <Box sx={{ width: "100%", maxWidth: "900px", borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
                <Typography variant="h6" textAlign="center" m={2} fontWeight={600} color="primary">
                    {t.mapTitle}
                </Typography>
                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS)}&output=embed`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </Box>
    );
};

export default ContactUsForm;

import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME}`,
        description: `Ofte stillede spørgsmål om ${COMPANY_NAME} QR-kode generator. Lær om tilpasning, downloads, enheder, sikkerhed og erhvervsfunktioner.`,
        keywords: [
            "faq",
            `${COMPANY_NAME} hjælp`,
            "QR-kode FAQ",
            "QR-kode tilpasning",
            "QR-kode downloads",
            "QR-kode erhvervsløsninger"
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Svar på de mest almindelige spørgsmål om QR-koder og tjenester.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `Hvad er ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} er en platform, der lader dig generere, tilpasse og downloade QR-koder øjeblikkeligt til personlig, erhvervsmæssig eller virksomhedsbrug.`
                },
                {
                    question: "Hvordan genererer jeg en QR-kode?",
                    answer: "Indtast blot dine data (URL, tekst, kontaktoplysninger osv.), tilpas designet og klik generer. Din QR-kode er klar øjeblikkeligt."
                },
                {
                    question: "Kan jeg tilpasse mine QR-koder?",
                    answer: "Ja. Du kan ændre farver, former, tilføje logoer eller ikoner, justere størrelser og vælge outputformater (PNG, SVG, PDF)."
                },
                {
                    question: "Hvad kan jeg bruge QR-koder til?",
                    answer: "QR-koder kan bruges til hjemmesider, produktemballage, eventbilletter, markedsføringskampagner, menuer, Wi-Fi-adgang, visitkort og meget mere."
                },
                {
                    question: "Er der en grænse for, hvor mange QR-koder jeg kan oprette?",
                    answer: "Nej. Du kan generere ubegrænsede QR-koder. Nogle avancerede tilpasningsfunktioner kan være en del af premium-planer."
                },
                {
                    question: "Har jeg brug for en konto?",
                    answer: "Ingen konto er påkrævet til grundlæggende QR-generering. Dog giver tilmelding dig mulighed for at gemme, administrere og markere dine QR-koder som favoritter."
                },
                {
                    question: "Kan jeg downloade QR-koder?",
                    answer: "Ja. QR-koder kan downloades øjeblikkeligt i flere formater (PNG, SVG, PDF) og bruges både online og offline."
                },
                {
                    question: "Udløber mine QR-koder?",
                    answer: "Nej. Når de er genereret og downloadet, fungerer dine QR-koder permanent, medmindre det linkede indhold ændres."
                },
                {
                    question: "Kan jeg generere QR-koder gratis?",
                    answer: "Ja. Grundlæggende QR-kode generering er gratis. Premium tilpasningsmuligheder kan være tilgængelige mod et lille gebyr."
                },
                {
                    question: "Er mine data sikre?",
                    answer: `${COMPANY_NAME} følger branchestandarder for sikkerhedspraksis for at sikre, at dine genererede QR-koder og data er sikre.`
                },
                {
                    question: `Kan virksomheder bruge ${COMPANY_NAME}?`,
                    answer: "Absolut. Vi understøtter masse QR-kode generering, tilpasset branding, analyse og virksomhedsintegrationer."
                },
                {
                    question: "Er support tilgængelig?",
                    answer: `Ja. Vores supportteam er klar til at hjælpe med tilpasning, downloads eller erhvervsløsninger. Kontakt os på ${COMPANY_EMAIL}.`
                },
                {
                    question: "Hvilke enheder understøttes?",
                    answer: `${COMPANY_NAME} fungerer på alle moderne enheder: stationær, bærbar, tablet og smartphone. Dine QR-koder er optimeret til enhver skærmstørrelse.`
                },
            ],
        },
    ],
};

export default faqSchema;

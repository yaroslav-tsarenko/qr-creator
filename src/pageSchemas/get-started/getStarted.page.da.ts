import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR-kode Generator — ${COMPANY_NAME}`,
        description: `Generer QR-koder nemt, hurtigt og overkommeligt til ethvert behov. Tilpas dine QR-koder og få adgang til dem øjeblikkeligt på enhver enhed.`,
        keywords: [
            "QR-kode generator",
            "tilpassede QR-koder",
            "overkommelige QR-koder",
            "øjeblikkelig QR-kode oprettelse",
            "multi-enhed QR-koder",
            "nem QR-kode tilpasning"
        ],
        canonical: "/dashboard",
        ogImage: {
            title: `QR-kode Generator`,
            description: "Opret og tilpas QR-koder øjeblikkeligt.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Generer QR-koder øjeblikkeligt",
            description: "Opret, tilpas og download QR-koder til ethvert formål — hurtigt, nemt og overkommeligt.",
            buttons: [
                { text: "Prøv QR Generator", link: "/dashboard", color: "primary" },
                { text: "Læs mere", link: "/faq", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Hvorfor bruge vores QR-kode generator?",
                description: "Vores platform lader dig oprette QR-koder til erhverv, events, markedsføring eller personlig brug. Ingen tekniske færdigheder kræves — indtast blot dine data og få din kode.",
                bullets: [
                    "Øjeblikkelig QR-kode oprettelse",
                    "Nemme tilpasningsmuligheder",
                    "Overkommelige priser",
                    "Fungerer på alle enheder",
                ],
                iconName: "qr",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "Trin 1 — Indtast dine data",
                    description: "Skriv en URL, tekst, kontaktoplysninger eller andre data, du vil indkode.",
                    buttonLink: "/dashboard",
                    buttonText: "Start nu",
                },
                {
                    image: "image2",
                    title: "Trin 2 — Tilpas din QR-kode",
                    description: "Vælg farver, tilføj et logo og indstil størrelsen, så den matcher dit brand eller din stil.",
                    buttonLink: "/dashboard",
                    buttonText: "Tilpas",
                },
                {
                    image: "image3",
                    title: "Trin 3 — Download og del",
                    description: "Download din QR-kode i høj kvalitet og brug den overalt — tryk, web eller mobil.",
                    buttonLink: "/dashboard",
                    buttonText: "Download",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "QR-kode tilpasning forhåndsvisning",
            },
            right: {
                type: "text",
                title: "Tilpas dine QR-koder",
                description: "Skift nemt farver, tilføj dit logo og vælg det format, du har brug for. Få dine QR-koder til at skille sig ud og matche dit brand.",
                bullets: [
                    "Farve- og stilmuligheder",
                    "Logo-upload",
                    "Flere formater: PNG, SVG, PDF",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Overkommeligt og fleksibelt",
                description: "Generer ubegrænsede QR-koder til en lav pris. Ingen abonnementer — betal kun for det, du bruger.",
                bullets: [
                    "Ingen skjulte gebyrer",
                    "Betal-efter-forbrug model",
                    "Massegenerering til virksomheder",
                ],
                iconName: "money",
                iconSize: 40,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Overkommelige QR-kode priser",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Multi-enhed support",
                    description: "Generer og brug QR-koder på stationær, tablet eller smartphone. Vores side tilpasser sig din arbejdsgang.",
                    buttonLink: "/faq",
                    buttonText: "Læs mere",
                },
                {
                    image: "image7",
                    title: "Offline adgang",
                    description: "Download QR-koder til offline brug. Perfekt til trykmaterialer og events.",
                    buttonLink: "/faq",
                    buttonText: "Læs FAQ",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Hvad gør os anderledes?",
                description: "Vi fokuserer på hastighed, enkelhed og overkommelighed. Generer så mange QR-koder, som du har brug for, med fuld tilpasning og øjeblikkelig adgang.",
                bullets: [
                    "Hurtigt og pålideligt",
                    "Nemt at bruge for alle",
                    "Tilpassede branding-muligheder",
                    "Intet abonnement påkrævet",
                ],
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: "Hvordan genererer jeg en QR-kode?",
                    answer: "Indtast blot dine data, tilpas stilen og klik generer. Din QR-kode er klar øjeblikkeligt.",
                },
                {
                    question: "Kan jeg tilpasse QR-koden?",
                    answer: "Ja. Du kan ændre farver, tilføje et logo og vælge det format, du ønsker.",
                },
                {
                    question: "Er der en grænse for, hvor mange QR-koder jeg kan oprette?",
                    answer: "Nej. Du kan generere så mange QR-koder, som du har brug for.",
                },
                {
                    question: "Har jeg brug for en konto?",
                    answer: "Ingen konto påkrævet til grundlæggende generering. Tilmeld dig for avancerede funktioner og historik.",
                },
                {
                    question: "Kan jeg bruge QR-koder til erhverv?",
                    answer: "Absolut. Vores platform understøtter massegenerering og branding til erhvervsbehov.",
                },
                {
                    question: "Er support tilgængelig?",
                    answer: `Ja. Kontakt os på ${COMPANY_EMAIL} for hjælp eller tilpassede forespørgsler.`,
                },
            ],
        },
        {
            type: "qr-generator",
        },
    ],
};

export default schema;

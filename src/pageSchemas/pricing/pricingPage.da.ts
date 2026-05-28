import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";
import { pricingCardsDa } from "@/resources/pricingPlans";

const pricingSchema: PageSchema = {
    meta: {
        title: `Priser — ${COMPANY_NAME}`,
        description:
            `Opdag fleksible, gennemsigtige priser for ${COMPANY_NAME}. Generer og tilpas QR-koder til overkommelige priser — ingen abonnementer, ingen skjulte gebyrer.`,
        keywords: [
            `${COMPANY_NAME} priser`,
            "QR-kode generator priser",
            "QR-kode tilpasning pris",
            "overkommelige QR-koder",
            "QR-kode erhvervsplaner"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Priser`,
            description: "Overkommelige, fleksible priser for QR-kode generering.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Enkle priser til ethvert behov",
            description: `Vælg den perfekte plan til personlig, professionel eller erhvervsmæssig QR-kode generering. Betal kun for det, du bruger — ingen tilbagevendende gebyrer.`,
            buttons: [
                { text: "Kom i gang", link: "/dashboard", color: "primary" },
                { text: "Kontakt salg", link: "/contact-us", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Hvorfor vælge vores priser?",
                description:
                    `Vi holder det enkelt: ingen abonnementer, ingen skjulte gebyrer. Uanset om du har brug for en enkelt QR-kode eller tusindvis til din virksomhed, tilpasser ${COMPANY_NAME} sig dine behov.`,
                bullets: [
                    "Ingen abonnementer eller tilbagevendende betalinger",
                    "Betal-efter-forbrug fleksibilitet",
                    "Overkommeligt for enkeltpersoner og virksomheder",
                    "Masse-QR-generering tilgængelig"
                ],
                iconName: "qr_code",
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
            columns: 4,
            gap: "2rem",
            cards: pricingCardsDa,
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Sådan fungerer priserne",
            },
            right: {
                type: "text",
                title: "Sådan fungerer vores priser",
                description:
                    `Du betaler kun for de QR-koder, du genererer. Højere planer låser op for flere funktioner og tilpasningsmuligheder. Dine QR-koder udløber aldrig, og du kan downloade dem når som helst.`,
                bullets: [
                    "Basis QR-koder inkluderet i alle planer",
                    "Avancerede funktioner tilgængelige i Pro/Business",
                    "Ingen skjulte omkostninger",
                    "Gennemsigtig betal-efter-forbrug model",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Hvad vores kunder siger",
                description:
                    `Tusindvis af brugere stoler på ${COMPANY_NAME} til QR-kode generering. Vores enkle og overkommelige priser fungerer for freelancere, teams og virksomheder.`,
                bullets: [
                    `"Perfekt til mine restaurant-menu QR-koder — overkommeligt og nemt."`,
                    `"Vores marketingteam bruger ${COMPANY_NAME} til kampagner."`,
                    `"Bedste QR-kode generator med reel tilpasning."`,
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
                    question: "Udløber QR-koder?",
                    answer: "Nej. Når de er genereret og downloadet, vil dine QR-koder altid fungere.",
                },
                {
                    question: "Kan jeg opgradere min plan senere?",
                    answer: "Ja. Du kan opgradere når som helst for flere funktioner og ubegrænset QR-generering.",
                },
                {
                    question: "Hvilke formater er tilgængelige?",
                    answer: "QR-koder kan downloades i PNG, JPG, SVG eller PDF afhængigt af din plan.",
                },
                {
                    question: "Tilbyder I refusion?",
                    answer: "Refusion er tilgængelig inden for 14 dage for ubrugte planer i henhold til vores politik.",
                },
                {
                    question: "Er support tilgængelig?",
                    answer: `Ja. Vi tilbyder support til alle planer. Send os en e-mail på ${COMPANY_EMAIL} for hjælp.`,
                },
            ],
        },
    ],
};

export default pricingSchema;

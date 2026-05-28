import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME } from '@/resources/constants';
import { pricingCardsDa } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — QR-kode konfigurator til ethvert behov`,
        description: `Opret detaljerede, tilpassede QR-koder med det samme. Hver QR kræver 30 tokens. Hurtigt, sikkert og fleksibelt til enhver brug.`,
        keywords: ["QR-kode", "konfigurator", "generator", "tokens", "tilpasset", "hurtig", "sikker"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} QR Konfigurator`,
            description: "Opret tilpassede QR-koder til ethvert behov. Hurtigt, fleksibelt og sikkert.",
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
            title: "Den hurtigste måde at oprette QR-koder",
            description:
                "Udnyt kraften i øjeblikkelig QR-kode generering. Vores konfigurator er designet til hastighed, fleksibilitet og sikkerhed. Hver QR-kode er klar på få sekunder og tilpasset dine behov.",
            buttons: [
                { text: "Prøv QR Generator", link: "/get-started", color: "primary" },
                { text: "Se eksempler", link: "/services", color: "secondary" },
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
                            "Opret QR-koder til URL'er, tekst, kontaktoplysninger, WiFi, begivenheder og meget mere. Tilpas hver QR til dine præcise behov.",
                        bullets: [
                            "Understøtter flere datatyper",
                            "Nem at konfigurere",
                            "Forhåndsvisning før download",
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
                            "Vælg farver, tilføj logoer og indstil fejlkorrektionsniveauer for maksimal pålidelighed og branding.",
                        bullets: [
                            "Tilpassede farver og branding",
                            "Logo-indlejring",
                            "Høj fejlkorrektion",
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
                            "Få din QR-kode med det samme efter betaling. Download i PNG-, SVG- eller PDF-format til tryk eller digital brug.",
                        bullets: ["Ingen ventetid", "Flere formater", "Klar til tryk"],
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
                            "Dine data er beskyttet. Hver QR-kode er unik og sikker til erhvervs- eller personlig brug.",
                        bullets: [
                            "Sikker teknologi",
                            "Private og unikke koder",
                            "Betroet af professionelle",
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
            cards: pricingCardsDa,
        },
        {
            type: "faq",
            items: [
                {
                    question: "Hvad er en QR-kode konfigurator?",
                    answer:
                        "Det er et værktøj til at oprette tilpassede QR-koder til ethvert formål, øjeblikkeligt og sikkert. Du kan vælge indhold, stil og format.",
                },
                {
                    question: "Hvor meget koster hver QR-kode?",
                    answer:
                        "Hver QR-kode kræver 30 tokens. Ingen abonnementer eller skjulte gebyrer. Køb tokens og brug dem efter behov.",
                },
                {
                    question: "Hvor hurtigt får jeg min QR-kode?",
                    answer:
                        "Din QR-kode genereres og leveres øjeblikkeligt efter betaling. Download den i dit foretrukne format.",
                },
                {
                    question: "Kan jeg bruge QR-koder til erhverv?",
                    answer:
                        "Ja! Vores QR-koder er perfekte til visitkort, produktsporing, markedsføring, eventbilletter og meget mere.",
                },
                {
                    question: "Er mine data sikre?",
                    answer:
                        "Absolut. Vi bruger sikker teknologi til at beskytte dine oplysninger. Dine QR-koder er unikke og private.",
                },
                {
                    question: "Hvilke formater er tilgængelige?",
                    answer:
                        "Du kan downloade QR-koder som PNG, SVG eller PDF, klar til tryk eller digital brug.",
                },
                {
                    question: "Kræver det tekniske færdigheder?",
                    answer:
                        "Ingen tekniske færdigheder kræves. Vores konfigurator er designet til alle.",
                },
                {
                    question: "Kan jeg tilpasse udseendet af min QR-kode?",
                    answer:
                        "Ja, du kan vælge farver, tilføje logoer og indstille fejlkorrektionsniveauer for maksimal pålidelighed.",
                },
            ],
        },
    ],
};

export default schema;

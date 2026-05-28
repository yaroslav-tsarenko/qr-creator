import { PageSchema } from '@/components/constructor/page-render/types';
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS
} from '@/resources/constants';
import { pricingCardsDa } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `Om os — ${COMPANY_NAME}`,
        description: `Lær om ${COMPANY_NAME}, vores mission, værdier og teamet bag den hurtigste QR-kode konfigurator. Opdag vores tjenester, priser og hvordan vi gør QR-generering nemt for alle.`,
        keywords: ["om", "virksomhed", "team", "mission", "QR-kode", "tjenester", "priser"],
        canonical: "/about-us",
        ogImage: {
            title: `Om ${COMPANY_NAME}`,
            description: "Mød teamet og opdag vores mission for nem QR-kode generering.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Velkommen til ${COMPANY_NAME}`,
            description:
                "Vi giver alle mulighed for at oprette, tilpasse og bruge QR-koder med lethed. Hurtigt, sikkert og overkommeligt til ethvert behov.",
            buttons: [
                { text: "Start nu", link: "/get-started", color: "primary" },
                { text: "Hvad vi gør", link: "/services", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Vores mission",
                description: `Hos ${COMPANY_NAME} er vores mission at gøre QR-kode generering tilgængelig, pålidelig og overkommelig for alle. Uanset om du er en virksomhed, eventarrangør eller enkeltperson, hjælper vi dig med at forbinde verden med en enkelt scanning.`,
                bullets: [
                    "Øjeblikkelig QR-kode oprettelse",
                    "Ingen abonnementer eller skjulte gebyrer",
                    "Tilpasses til enhver brug",
                    "Betroet af tusindvis verden over"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "flag",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Vores mission"
            }
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
                        description: "Ingen tekniske færdigheder kræves. Vores platform er designet til alle.",
                        bullets: ["Intuitiv brugerflade", "Trin-for-trin vejledning", "Øjeblikkelig forhåndsvisning"],
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description: "Vælg farver, tilføj logoer og indstil fejlkorrektion til dit brand.",
                        bullets: ["Branding-muligheder", "Fleksible formater", "Logo-indlejring"],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description: "Betal kun for det, du har brug for. Ingen abonnementer, tokens udløber aldrig.",
                        bullets: ["Gennemsigtige priser", "Tokens til hver QR", "Ingen tilbagevendende gebyrer"],
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description: "Dine data er beskyttet. Hver QR-kode er unik og sikker.",
                        bullets: ["Sikker teknologi", "Private koder", "Betroet af professionelle"],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false
                    }
                }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Vores team"
            },
            right: {
                type: "text",
                title: "Mød vores team",
                description:
                    "Vores passionerede team kombinerer ekspertise inden for teknologi, design og kundesupport for at levere den bedste QR-kode oplevelse. Vi tror på innovation, gennemsigtighed og på at hjælpe dig med at lykkes.",
                bullets: [
                    "Erfarne udviklere",
                    "Kreative designere",
                    "Dedikeret support",
                    "Global vision"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "group",
                iconSize: 48,
                iconColor: "#28a745",
                iconBg: "#e6ffe6"
            }
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Vores værdier",
                description:
                    "Vi er forpligtede til enkelhed, sikkerhed og kundetilfredshed. Hver funktion er bygget med dine behov i tankerne.",
                bullets: [
                    "Enkelhed: Nemt for alle",
                    "Sikkerhed: Dine data er sikre",
                    "Support: Vi er her for dig",
                    "Innovation: Altid i forbedring"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Vores værdier"
            }
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsDa
        },
        {
            type: "faq",
            items: [
                {
                    question: "Hvilke tjenester tilbyder I?",
                    answer:
                        "Vi tilbyder øjeblikkelig QR-kode generering, tilpasning og sikre downloads."
                },
                {
                    question: "Hvordan kommer jeg i gang?",
                    answer: "Besøg vores Start nu-side for at begynde at oprette QR-koder nemt."
                },
                {
                    question: "Hvor kan jeg finde priserne?",
                    answer: "Alle planer og priser er opført med fuld gennemsigtighed."
                },
                {
                    question: "Hvordan kan jeg kontakte support?",
                    answer: `Kontakt os via e-mail: ${COMPANY_EMAIL}`
                },
                {
                    question: "Er mine data sikre?",
                    answer:
                        "Absolut. Vi bruger sikker teknologi til at beskytte dine oplysninger. Dine QR-koder er unikke og private."
                },
                {
                    question: "Har I en refusionspolitik?",
                    answer: "Ja, vi tilbyder en klar refusionspolitik for ubrugte tokens."
                }
            ]
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Hvad vi gør",
                    description: "Udforsk alle vores QR-kode tjenester.",
                    buttonLink: "/services",
                    buttonText: "Se tjenester"
                },
                {
                    image: "image6",
                    title: "Planer og priser",
                    description: "Find den bedste plan til dine behov.",
                    buttonLink: "/pricing",
                    buttonText: "Se priser"
                },
                {
                    image: "image7",
                    title: "Start nu",
                    description: "Begynd at generere QR-koder nu.",
                    buttonLink: "/get-started",
                    buttonText: "Kom i gang"
                }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Kontakt og juridisk",
                description: `Har du spørgsmål eller brug for hjælp? Kontakt os på ${COMPANY_EMAIL}.
${COMPANY_LEGAL_NAME}
Virksomhedsnummer: ${COMPANY_NUMBER}
Adresse: ${COMPANY_ADDRESS}`,
                bullets: [
                    "E-mail support tilgængelig",
                    "Juridiske oplysninger i footeren",
                    "Flere kontaktmuligheder nedenfor"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "email",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Kontakt og juridisk"
            }
        }
    ]
};

export default schema;

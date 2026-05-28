import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR-kode tjenester — ${COMPANY_NAME}`,
        description: `Opdag alt-i-en QR-kode tjenester med ${COMPANY_NAME}. Opret, tilpas og administrer QR-koder med ekspertsupport og erhvervsklare funktioner.`,
        keywords: [
            `${COMPANY_NAME} tjenester`,
            "QR-kode generator",
            "tilpassede QR-koder",
            "masse QR-koder",
            "sikre QR-koder",
            "flersproget QR",
            "erhvervs QR-løsninger"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} QR Tjenester`,
            description: "Generer og tilpas QR-koder med kraftfulde funktioner til enkeltpersoner og virksomheder.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Velkommen til ${COMPANY_NAME}`,
            description: "Din alt-i-en løsning til generering og tilpasning af QR-koder hurtigt og overkommeligt.",
            buttons: [
                { text: "Generer QR-kode", link: "/dashboard", color: "primary" },
                { text: "Se priser", link: "/pricing", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Skybaseret QR-styring",
                description: "Opret og gem QR-koder online. Få adgang til dine koder når som helst, fra enhver enhed.",
                bullets: [
                    "Sikker online lagring",
                    "Download når som helst",
                    "Organiser dine koder"
                ],
                iconName: "cloud",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Skybaseret QR-styring",
            }
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "multiLang",
                    block: {
                        type: "text",
                        title: "Flersproget support",
                        description: "Generer QR-koder med lokaliseret indhold på flere sprog.",
                        bullets: [
                            "Sprogvælger",
                            "Lokaliserede QR-data",
                            "Perfekt til globale teams"
                        ],
                        iconName: "language",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "security",
                    block: {
                        type: "text",
                        title: "Sikkerhed og privatliv",
                        description: "Dine QR-koder og data er beskyttet med sikkerhed i erhvervsklasse.",
                        bullets: [
                            "Sikker adgang",
                            "Datakryptering",
                            "Verificerede konti"
                        ],
                        iconName: "security",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "favorites",
                    block: {
                        type: "text",
                        title: "Favoritter og hurtig adgang",
                        description: "Gem og få adgang til dine mest brugte QR-koder øjeblikkeligt fra dit dashboard.",
                        bullets: [
                            "Markér favoritkoder",
                            "Hurtig dashboard-adgang",
                            "Personligt bibliotek"
                        ],
                        iconName: "favorite",
                        iconSize: 40,
                        iconColor: "#e91e63",
                        iconBg: "#ffe6f0",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Erhvervsløsninger",
                description: "Skaler din QR-kode brug med erhvervsklare funktioner og tilpasset support.",
                bullets: [
                    "Masse QR-kode generering",
                    "Tilpasset branding",
                    "Dedikeret kontoadministrator"
                ],
                iconName: "business",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Erhvervs QR-løsninger",
            }
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            items: [
                {
                    key: "support",
                    block: {
                        type: "text",
                        title: "Ekspertsupport",
                        description: "Vores team hjælper dig med opsætning, tilpasning og erhvervsintegration.",
                        bullets: [
                            "Hurtige svartider",
                            "Teknisk vejledning",
                            "Personlig hjælp"
                        ],
                        iconName: "help",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "settings",
                    block: {
                        type: "text",
                        title: "Nem tilpasning",
                        description: "Juster farver, tilføj logoer og indstil muligheder med en intuitiv brugerflade.",
                        bullets: [
                            "Farve- og stilmuligheder",
                            "Logo-integration",
                            "Fleksible outputformater"
                        ],
                        iconName: "settings",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Kundefeedback",
            },
            right: {
                type: "text",
                title: "Kundesucceshistorier",
                description: `Tusindvis af brugere stoler på ${COMPANY_NAME} til pålidelig QR-kode generering. Se hvordan vores tjenester hjælper virksomheder og enkeltpersoner med at lykkes.`,
                bullets: [
                    `"Jeg oprettede brandede QR-koder til min cafe på få minutter."`,
                    `"Vores marketingteam øgede engagementet med tilpassede QR-kampagner."`,
                    `"Hurtigt, pålideligt og overkommeligt — stærkt anbefalet."`
                ],
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
            }
        },
        {
            type: "faq",
            items: [
                {
                    question: "Hvordan genererer jeg QR-koder?",
                    answer: "Gå blot til QR Generatoren, indtast dine data, tilpas designet og download øjeblikkeligt.",
                },
                {
                    question: "Er QR-koder sikre?",
                    answer: "Ja. Alle genererede koder er private for din konto og kan inkludere sikre URL'er.",
                },
                {
                    question: "Understøtter I virksomheder?",
                    answer: "Absolut! Vi tilbyder massegenerering, tilpasset branding og virksomhedsfunktioner.",
                },
                {
                    question: "Kan jeg oprette flersprogede QR-koder?",
                    answer: "Ja, du kan generere QR-koder, der linker til lokaliseret indhold eller bruger flersproget tekst.",
                },
                {
                    question: "Kan jeg gemme favorit QR-koder?",
                    answer: "Ja, du kan markere dine QR-koder som favoritter for hurtig adgang i dit dashboard.",
                },
            ],
        },
    ],
};

export default schema;

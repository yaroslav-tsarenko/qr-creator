import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR-kód Szolgáltatások — ${COMPANY_NAME}`,
        description: `Fedezze fel a ${COMPANY_NAME} átfogó QR-kód szolgáltatásait. Készítsen, szabjon testre és kezeljen QR-kódokat szakértői támogatással és üzleti felkészültségű funkciókkal.`,
        keywords: [
            `${COMPANY_NAME} szolgáltatások`,
            "QR-kód generátor",
            "egyedi QR-kódok",
            "tömeges QR-kódok",
            "biztonságos QR-kódok",
            "többnyelvű QR",
            "üzleti QR megoldások"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} QR Szolgáltatások`,
            description: "Generáljon és szabjon testre QR-kódokat hatékony funkciókkal magánszemélyek és vállalkozások számára.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Üdvözöljük a ${COMPANY_NAME}-nál`,
            description: "Az Ön átfogó megoldása QR-kódok gyors és megfizethető generálásához és testreszabásához.",
            buttons: [
                { text: "QR-kód Generálása", link: "/dashboard", color: "primary" },
                { text: "Árak Megtekintése", link: "/pricing", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Felhő Alapú QR Kezelés",
                description: "Hozzon létre és mentsen QR-kódokat online. Érje el kódjait bármikor, bármilyen eszközről.",
                bullets: [
                    "Biztonságos online tárolás",
                    "Letöltés bármikor",
                    "Kódjai rendszerezése"
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
                alt: "Felhő QR kezelés",
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
                        title: "Többnyelvű Támogatás",
                        description: "Generáljon QR-kódokat lokalizált tartalommal több nyelven.",
                        bullets: [
                            "Nyelvválasztó",
                            "Lokalizált QR adatok",
                            "Tökéletes globális csapatoknak"
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
                        title: "Biztonság és Adatvédelem",
                        description: "QR-kódjai és adatai vállalati szintű biztonsággal védettek.",
                        bullets: [
                            "Biztonságos hozzáférés",
                            "Adattitkosítás",
                            "Ellenőrzött fiókok"
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
                        title: "Kedvencek és Gyors Hozzáférés",
                        description: "Mentse el és érje el leggyakrabban használt QR-kódjait azonnal a vezérlőpultjáról.",
                        bullets: [
                            "Kedvenc kódok megjelölése",
                            "Gyors vezérlőpult hozzáférés",
                            "Személyre szabott könyvtár"
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
                title: "Üzleti Megoldások",
                description: "Skálázza QR-kód használatát üzleti felkészültségű funkciókkal és egyedi támogatással.",
                bullets: [
                    "Tömeges QR-kód generálás",
                    "Egyedi márkaépítés",
                    "Dedikált fiókkezelő"
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
                alt: "Üzleti QR megoldások",
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
                        title: "Szakértői Támogatás",
                        description: "Csapatunk segít a beállításban, testreszabásban és üzleti integrációban.",
                        bullets: [
                            "Gyors válaszidők",
                            "Technikai útmutatás",
                            "Személyre szabott segítség"
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
                        title: "Egyszerű Testreszabás",
                        description: "Állítson be színeket, adjon hozzá logókat és válasszon opciókat intuitív felülettel.",
                        bullets: [
                            "Szín- és stílusbeállítások",
                            "Logó integráció",
                            "Rugalmas kimeneti formátumok"
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
                alt: "Ügyfél visszajelzések",
            },
            right: {
                type: "text",
                title: "Ügyfél Sikertörténetek",
                description: `Felhasználók ezrei bíznak a ${COMPANY_NAME}-ban a megbízható QR-kód generálás terén. Nézze meg, hogyan segítik szolgáltatásaink a vállalkozásokat és magánszemélyeket a sikerben.`,
                bullets: [
                    `"Percek alatt készítettem márkás QR-kódokat a kávézómhoz."`,
                    `"Marketing csapatunk növelte az elköteleződést egyedi QR kampányokkal."`,
                    `"Gyors, megbízható és megfizethető — melegen ajánlom."`,
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
                    question: "Hogyan generálhatok QR-kódokat?",
                    answer: "Egyszerűen lépjen a QR Generátorba, adja meg adatait, szabja testre a dizájnt, és töltse le azonnal.",
                },
                {
                    question: "Biztonságosak a QR-kódok?",
                    answer: "Igen. Minden generált kód privát a fiókjában és tartalmazhat biztonságos URL-eket.",
                },
                {
                    question: "Támogatják a vállalkozásokat?",
                    answer: "Természetesen! Kínálunk tömeges generálást, egyedi márkaépítést és vállalati funkciókat.",
                },
                {
                    question: "Készíthetek többnyelvű QR-kódokat?",
                    answer: "Igen, generálhat QR-kódokat, amelyek lokalizált tartalomra mutatnak vagy többnyelvű szöveget használnak.",
                },
                {
                    question: "Menthetem a kedvenc QR-kódjaimat?",
                    answer: "Igen, megjelölheti QR-kódjait kedvencként a gyors hozzáférés érdekében a vezérlőpultján.",
                },
            ],
        },
    ],
};

export default schema;

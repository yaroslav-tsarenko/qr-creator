import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";
import { pricingCardsHu } from "@/resources/pricingPlans";

const pricingSchema: PageSchema = {
    meta: {
        title: `Árak — ${COMPANY_NAME}`,
        description:
            `Fedezze fel a ${COMPANY_NAME} rugalmas, átlátható árazását. Generáljon és testreszabjon QR-kódokat megfizethető áron — előfizetés és rejtett díjak nélkül.`,
        keywords: [
            `${COMPANY_NAME} árak`,
            "QR-kód generátor árazás",
            "QR-kód testreszabás költsége",
            "megfizethető QR-kódok",
            "QR-kód üzleti csomagok"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Árak`,
            description: "Megfizethető, rugalmas árazás QR-kód generáláshoz.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Egyszerű Árazás Minden Igényre",
            description: `Válassza ki a tökéletes csomagot személyes, szakmai vagy üzleti QR-kód generáláshoz. Csak azért fizessen, amit használ — nincsenek ismétlődő díjak.`,
            buttons: [
                { text: "Kezdje El", link: "/dashboard", color: "primary" },
                { text: "Értékesítés Elérése", link: "/contact-us", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Miért Válassza Árazásunkat?",
                description:
                    `Egyszerűen tartjuk a dolgokat: nincsenek előfizetések, nincsenek rejtett díjak. Akár egyetlen QR-kódra, akár ezrekre van szüksége vállalkozásához, a ${COMPANY_NAME} alkalmazkodik az Ön igényeihez.`,
                bullets: [
                    "Nincsenek előfizetések vagy ismétlődő fizetések",
                    "Használat alapú rugalmas fizetés",
                    "Megfizethető magánszemélyeknek és vállalatoknak",
                    "Tömeges QR generálás elérhető"
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
            cards: pricingCardsHu,
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
                alt: "Hogyan működik az árazás",
            },
            right: {
                type: "text",
                title: "Hogyan Működik Árazásunk",
                description:
                    `Csak a generált QR-kódokért fizet. A magasabb csomagok több funkciót és testreszabási lehetőséget nyitnak meg. QR-kódjai soha nem járnak le, és bármikor letölthetők.`,
                bullets: [
                    "Alapvető QR-kódok minden csomagban elérhetők",
                    "Haladó funkciók Pro/Üzleti csomagban",
                    "Nincsenek rejtett költségek",
                    "Átlátható használat alapú modell",
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
                title: "Mit Mondanak Ügyfeleink",
                description:
                    `Felhasználók ezrei bíznak a ${COMPANY_NAME}-ban a QR-kód generálás terén. Egyszerű és megfizethető árazásunk szabadúszóknak, csapatoknak és vállalatoknak egyaránt megfelel.`,
                bullets: [
                    `"Tökéletes az éttermi menü QR-kódjaimhoz — megfizethető és egyszerű."`,
                    `"Marketing csapatunk a ${COMPANY_NAME}-ot használja kampányokhoz."`,
                    `"A legjobb QR-kód generátor valódi testreszabási lehetőségekkel."`,
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
                    question: "Lejárnak a QR-kódok?",
                    answer: "Nem. A generált és letöltött QR-kódok örökké működnek.",
                },
                {
                    question: "Frissíthetem később a csomagomat?",
                    answer: "Igen. Bármikor frissíthet több funkcióért és korlátlan QR generálásért.",
                },
                {
                    question: "Milyen formátumok érhetők el?",
                    answer: "A QR-kódok PNG, JPG, SVG vagy PDF formátumban tölthetők le a csomagtól függően.",
                },
                {
                    question: "Kínálnak visszatérítést?",
                    answer: "A visszatérítés a felhasználatlan csomagokra 14 napon belül elérhető az irányelvünk szerint.",
                },
                {
                    question: "Elérhető a támogatás?",
                    answer: `Igen. Minden csomaghoz biztosítunk támogatást. Írjon nekünk a ${COMPANY_EMAIL} címre segítségért.`,
                },
            ],
        },
    ],
};

export default pricingSchema;

import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR-kód Generátor — ${COMPANY_NAME}`,
        description: `Generáljon QR-kódokat egyszerűen, gyorsan és megfizethetően bármilyen igényre. Szabja testre QR-kódjait és érje el őket azonnal bármilyen eszközön.`,
        keywords: [
            "QR-kód generátor",
            "egyedi QR-kódok",
            "megfizethető QR-kódok",
            "azonnali QR-kód készítés",
            "többeszközös QR-kódok",
            "egyszerű QR-kód testreszabás"
        ],
        canonical: "/dashboard",
        ogImage: {
            title: `QR-kód Generátor`,
            description: "Készítsen és szabjon testre QR-kódokat azonnal.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "QR-kódok Azonnali Generálása",
            description: "Készítsen, szabjon testre és töltsön le QR-kódokat bármilyen célra — gyorsan, egyszerűen és megfizethetően.",
            buttons: [
                { text: "QR Generátor Kipróbálása", link: "/dashboard", color: "primary" },
                { text: "Tudjon Meg Többet", link: "/faq", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Miért Használja QR-kód Generátorunkat?",
                description: "Platformunk lehetővé teszi QR-kódok készítését üzleti, rendezvény, marketing vagy személyes célra. Nem szükségesek műszaki ismeretek — csak adja meg adatait és kapja meg kódját.",
                bullets: [
                    "Azonnali QR-kód készítés",
                    "Egyszerű testreszabási lehetőségek",
                    "Megfizethető árazás",
                    "Minden eszközön működik",
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
                    title: "1. Lépés — Adja Meg Adatait",
                    description: "Írjon be egy URL-t, szöveget, elérhetőséget vagy bármilyen kódolni kívánt adatot.",
                    buttonLink: "/dashboard",
                    buttonText: "Kezdje Most",
                },
                {
                    image: "image2",
                    title: "2. Lépés — Szabja Testre QR-kódját",
                    description: "Válasszon színeket, adjon hozzá logót és állítsa be a méretet a márkájához vagy stílusához.",
                    buttonLink: "/dashboard",
                    buttonText: "Testreszabás",
                },
                {
                    image: "image3",
                    title: "3. Lépés — Letöltés és Megosztás",
                    description: "Töltse le QR-kódját kiváló minőségben és használja bárhol — nyomtatásban, weben vagy mobilon.",
                    buttonLink: "/dashboard",
                    buttonText: "Letöltés",
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
                alt: "QR-kód testreszabás előnézet",
            },
            right: {
                type: "text",
                title: "Szabja Testre QR-kódjait",
                description: "Egyszerűen változtassa meg a színeket, adja hozzá logóját és válassza ki a szükséges formátumot. Emelje ki QR-kódjait és illessze a márkájához.",
                bullets: [
                    "Szín- és stílusbeállítások",
                    "Logó feltöltés",
                    "Többféle formátum: PNG, SVG, PDF",
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
                title: "Megfizethető és Rugalmas",
                description: "Generáljon korlátlan QR-kódokat alacsony költséggel. Nincsenek előfizetések — csak azért fizessen, amit használ.",
                bullets: [
                    "Nincsenek rejtett díjak",
                    "Használat alapú modell",
                    "Tömeges generálás vállalkozásoknak",
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
                alt: "Megfizethető QR-kód árazás",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Többeszközös Támogatás",
                    description: "Generáljon és használjon QR-kódokat asztali gépen, tableten vagy okostelefonon. Oldalunk alkalmazkodik az Ön munkafolyamatához.",
                    buttonLink: "/faq",
                    buttonText: "Tudjon Meg Többet",
                },
                {
                    image: "image7",
                    title: "Offline Hozzáférés",
                    description: "Töltse le QR-kódjait offline használatra. Tökéletes nyomtatott anyagokhoz és rendezvényekhez.",
                    buttonLink: "/faq",
                    buttonText: "GYIK Olvasása",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Mi Tesz Minket Különlegessé?",
                description: "A sebességre, az egyszerűségre és a megfizethetőségre összpontosítunk. Generáljon annyi QR-kódot, amennyire szüksége van, teljes testreszabással és azonnali hozzáféréssel.",
                bullets: [
                    "Gyors és megbízható",
                    "Mindenki számára könnyen használható",
                    "Egyedi márkaépítési lehetőségek",
                    "Nem szükséges előfizetés",
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
                    question: "Hogyan generálhatok QR-kódot?",
                    answer: "Csak adja meg adatait, szabja testre a stílust és kattintson a generálásra. QR-kódja azonnal elkészül.",
                },
                {
                    question: "Testreszabhatom a QR-kódot?",
                    answer: "Igen. Változtathat színeket, hozzáadhat logót és kiválaszthatja a kívánt formátumot.",
                },
                {
                    question: "Van korlát, hogy hány QR-kódot hozhatok létre?",
                    answer: "Nem. Annyi QR-kódot generálhat, amennyire szüksége van.",
                },
                {
                    question: "Szükségem van fiókra?",
                    answer: "Az alapvető generáláshoz nem szükséges fiók. Regisztráljon a haladó funkciókért és előzményekért.",
                },
                {
                    question: "Használhatok QR-kódokat üzleti célra?",
                    answer: "Természetesen. Platformunk támogatja a tömeges generálást és a márkaépítést üzleti igényekre.",
                },
                {
                    question: "Elérhető a támogatás?",
                    answer: `Igen. Lépjen velünk kapcsolatba: ${COMPANY_EMAIL} segítségért vagy egyedi kérésekért.`,
                },
            ],
        },
        {
            type: "qr-generator",
        },
    ],
};

export default schema;

import { PageSchema } from '@/components/constructor/page-render/types';
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS
} from '@/resources/constants';
import { pricingCardsHu } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `Rólunk — ${COMPANY_NAME}`,
        description: `Tudjon meg többet a ${COMPANY_NAME}-ról, küldetésünkről, értékeinkről és a leggyorsabb QR-kód konfigurátor mögötti csapatról. Fedezze fel szolgáltatásainkat, árazásunkat és hogyan tesszük egyszerűvé a QR generálást mindenki számára.`,
        keywords: ["rólunk", "cég", "csapat", "küldetés", "QR-kód", "szolgáltatások", "árazás"],
        canonical: "/about-us",
        ogImage: {
            title: `A ${COMPANY_NAME}-ról`,
            description: "Ismerje meg a csapatot és fedezze fel küldetésünket az egyszerű QR-kód generálás terén.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Üdvözöljük a ${COMPANY_NAME}-nál`,
            description:
                "Mindenkit felhatalmazunk QR-kódok egyszerű létrehozására, testreszabására és használatára. Gyors, biztonságos és megfizethető bármilyen igényre.",
            buttons: [
                { text: "Kezdje Most", link: "/get-started", color: "primary" },
                { text: "Tevékenységünk", link: "/services", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Küldetésünk",
                description: `A ${COMPANY_NAME} küldetése, hogy a QR-kód generálást elérhetővé, megbízhatóvá és megfizethetővé tegyük mindenki számára. Legyen Ön vállalkozás, rendezvényszervező vagy magánszemély, segítünk összekötni a világot egyetlen szkenneléssel.`,
                bullets: [
                    "Azonnali QR-kód készítés",
                    "Nincsenek előfizetések vagy rejtett díjak",
                    "Testreszabható bármilyen felhasználásra",
                    "Világszerte ezrek bíznak bennünk"
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
                alt: "Küldetésünk"
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
                        description: "Nem szükségesek műszaki ismeretek. Platformunk mindenki számára lett tervezve.",
                        bullets: ["Intuitív felület", "Lépésről lépésre útmutatás", "Azonnali előnézet"],
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
                        description: "Válasszon színeket, adjon hozzá logókat, és állítsa be a hibajavítást a márkájához.",
                        bullets: ["Márkaépítési lehetőségek", "Rugalmas formátumok", "Logó beágyazás"],
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
                        description: "Csak azért fizessen, amire szüksége van. Nincsenek előfizetések, a tokenek soha nem járnak le.",
                        bullets: ["Átlátható árazás", "Tokenek minden QR-hoz", "Nincsenek ismétlődő díjak"],
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
                        description: "Adatai védve vannak. Minden QR-kód egyedi és biztonságos.",
                        bullets: ["Biztonságos technológia", "Privát kódok", "Szakemberek által megbízható"],
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
                alt: "Csapatunk"
            },
            right: {
                type: "text",
                title: "Ismerje Meg Csapatunkat",
                description:
                    "Szenvedélyes csapatunk technológiai, tervezési és ügyfélszolgálati szakértelmet ötvöz, hogy a legjobb QR-kód élményt nyújtsa. Hiszünk az innovációban, az átláthatóságban és abban, hogy segítsünk Önnek sikeresnek lenni.",
                bullets: [
                    "Tapasztalt fejlesztők",
                    "Kreatív tervezők",
                    "Elkötelezett támogatás",
                    "Globális jövőkép"
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
                title: "Értékeink",
                description:
                    "Elkötelezettek vagyunk az egyszerűség, a biztonság és az ügyfél-elégedettség mellett. Minden funkciót az Ön igényeire szabva építünk.",
                bullets: [
                    "Egyszerűség: Könnyű mindenki számára",
                    "Biztonság: Adatai védve vannak",
                    "Támogatás: Önért vagyunk itt",
                    "Innováció: Folyamatosan fejlődünk"
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
                alt: "Értékeink"
            }
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: pricingCardsHu
        },
        {
            type: "faq",
            items: [
                {
                    question: "Milyen szolgáltatásokat kínálnak?",
                    answer:
                        "Azonnali QR-kód generálást, testreszabást és biztonságos letöltést biztosítunk."
                },
                {
                    question: "Hogyan kezdjek hozzá?",
                    answer: "Látogassa meg a Kezdje Most oldalt a QR-kódok egyszerű létrehozásának megkezdéséhez."
                },
                {
                    question: "Hol találom az árakat?",
                    answer: "Minden csomag és díjszabás teljes átláthatósággal szerepel."
                },
                {
                    question: "Hogyan érhető el a támogatás?",
                    answer: `Írjon nekünk e-mailben: ${COMPANY_EMAIL}`
                },
                {
                    question: "Biztonságban vannak az adataim?",
                    answer:
                        "Természetesen. Biztonságos technológiát használunk az Ön adatainak védelméhez. QR-kódjai egyediek és privátak."
                },
                {
                    question: "Van visszatérítési irányelvük?",
                    answer: "Igen, egyértelmű visszatérítési irányelvet kínálunk a felhasználatlan tokenekre."
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
                    title: "Tevékenységünk",
                    description: "Fedezze fel minden QR-kód szolgáltatásunkat.",
                    buttonLink: "/services",
                    buttonText: "Szolgáltatások"
                },
                {
                    image: "image6",
                    title: "Csomagok és Árak",
                    description: "Találja meg az igényeinek legmegfelelőbb csomagot.",
                    buttonLink: "/pricing",
                    buttonText: "Árak Megtekintése"
                },
                {
                    image: "image7",
                    title: "Kezdje Most",
                    description: "Kezdje el a QR-kódok generálását most.",
                    buttonLink: "/get-started",
                    buttonText: "Kezdés"
                }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Kapcsolat és Jogi Információk",
                description: `Kérdése van vagy segítségre van szüksége? Írjon nekünk: ${COMPANY_EMAIL}.
${COMPANY_LEGAL_NAME}
Cégjegyzékszám: ${COMPANY_NUMBER}
Cím: ${COMPANY_ADDRESS}`,
                bullets: [
                    "E-mail támogatás elérhető",
                    "Jogi információk a láblécben",
                    "További kapcsolatfelvételi lehetőségek alább"
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
                alt: "Kapcsolat és Jogi Információk"
            }
        }
    ]
};

export default schema;

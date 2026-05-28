import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `GYIK — ${COMPANY_NAME}`,
        description: `Gyakran Ismételt Kérdések a ${COMPANY_NAME} QR-kód generátorról. Tudjon meg többet a testreszabásról, letöltésekről, eszközökről, biztonságról és üzleti funkciókról.`,
        keywords: [
            "gyik",
            `${COMPANY_NAME} segítség`,
            "QR-kód GYIK",
            "QR-kód testreszabás",
            "QR-kód letöltések",
            "QR-kód üzleti megoldások"
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} GYIK`,
            description: `Válaszok a QR-kódokkal és szolgáltatásokkal kapcsolatos leggyakoribb kérdésekre.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `Mi az a ${COMPANY_NAME}?`,
                    answer: `A ${COMPANY_NAME} egy platform, amely lehetővé teszi QR-kódok azonnali generálását, testreszabását és letöltését személyes, üzleti vagy vállalati használatra.`
                },
                {
                    question: "Hogyan generálhatok QR-kódot?",
                    answer: "Egyszerűen adja meg adatait (URL, szöveg, elérhetőség stb.), szabja testre a dizájnt és kattintson a generálásra. QR-kódja azonnal elkészül."
                },
                {
                    question: "Testreszabhatom a QR-kódjaimat?",
                    answer: "Igen. Változtathat színeket, formákat, hozzáadhat logókat vagy ikonokat, módosíthatja a méreteket és kiválaszthatja a kimeneti formátumot (PNG, SVG, PDF)."
                },
                {
                    question: "Mire használhatok QR-kódokat?",
                    answer: "QR-kódok használhatók weboldalakhoz, termékcsomagoláshoz, rendezvényjegyekhez, marketing kampányokhoz, étlapokhoz, WiFi hozzáféréshez, névjegykártyákhoz és még sok máshoz."
                },
                {
                    question: "Van korlát, hogy hány QR-kódot hozhatok létre?",
                    answer: "Nem. Korlátlan számú QR-kódot generálhat. Egyes haladó testreszabási funkciók prémium csomagok részét képezhetik."
                },
                {
                    question: "Szükségem van fiókra?",
                    answer: "Az alapvető QR generáláshoz nem szükséges fiók. A regisztráció azonban lehetővé teszi QR-kódjai mentését, kezelését és kedvencként való megjelölését."
                },
                {
                    question: "Letölthetem a QR-kódokat?",
                    answer: "Igen. A QR-kódok azonnal letölthetők többféle formátumban (PNG, SVG, PDF) és online és offline egyaránt használhatók."
                },
                {
                    question: "Lejárnak a QR-kódjaim?",
                    answer: "Nem. A generált és letöltött QR-kódok véglegesen működnek, hacsak a hivatkozott tartalom nem változik."
                },
                {
                    question: "Generálhatok QR-kódokat ingyen?",
                    answer: "Igen. Az alapvető QR-kód generálás ingyenes. Prémium testreszabási lehetőségek kis díj ellenében elérhetők lehetnek."
                },
                {
                    question: "Biztonságban vannak az adataim?",
                    answer: `A ${COMPANY_NAME} iparági szabványú biztonsági gyakorlatokat követ annak biztosítására, hogy generált QR-kódjai és adatai biztonságban legyenek.`
                },
                {
                    question: `Használhatják vállalkozások a ${COMPANY_NAME}-ot?`,
                    answer: "Természetesen. Támogatjuk a tömeges QR-kód generálást, egyedi márkaépítést, elemzéseket és vállalati integrációkat."
                },
                {
                    question: "Elérhető a támogatás?",
                    answer: `Igen. Támogató csapatunk készen áll segíteni a testreszabásban, letöltésekben vagy üzleti megoldásokban. Lépjen velünk kapcsolatba: ${COMPANY_EMAIL}.`
                },
                {
                    question: "Milyen eszközök támogatottak?",
                    answer: `A ${COMPANY_NAME} minden modern eszközön működik: asztali számítógépen, laptopon, tableten és okostelefonon. QR-kódjai bármilyen képernyőméretre optimalizáltak.`
                },
            ],
        },
    ],
};

export default faqSchema;

import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Adatvédelmi Szabályzat – ${COMPANY_NAME}`,
        description: `A ${COMPANY_NAME} Adatvédelmi Szabályzata: milyen személyes adatokat gyűjtünk, hogyan használjuk a QR-kód generáláshoz, mennyi ideig őrizzük meg, és milyen jogai vannak.`,
        keywords: [
            "adatvédelmi szabályzat",
            "adatvédelem",
            "gdpr",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "qr-kódok",
            "személyes adatok",
            "biztonság"
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Adatvédelmi Szabályzat`,
            description: "Átlátható adatvédelmi és biztonsági szabványok.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Bevezetés",
            description: `Tiszteletben tartjuk magánéletét. Ez az Adatvédelmi Szabályzat ismerteti, milyen személyes adatokat gyűjt a ${COMPANY_NAME} a QR-kód generátorunk használata során, miért használjuk, mennyi ideig őrizzük meg, és hogyan gyakorolhatja jogait.`
        },
        {
            type: "text",
            title: "2. Gyűjtött Adatok",
            bullets: [
                "Név, e-mail cím és fiókadatok (regisztráció esetén)",
                "Fizetési tranzakció hivatkozások prémium funkciókhoz (nem teljes kártyaadatok)",
                "QR-kód generálási előzmények és mentett projektek (bejelentkezés esetén)",
                "IP-cím, eszközadatok és hozzáférési naplók",
                "Támogatási kérelmek és levelezés"
            ]
        },
        {
            type: "text",
            title: "3. Miért Dolgozzuk Fel Adatait és Jogalapok",
            bullets: [
                "QR-kód generálás, testreszabás és kapcsolódó funkciók biztosításához (szerződés teljesítése)",
                "Prémium szolgáltatások fizetéseinek feldolgozásához és csalás megelőzéséhez (jogi kötelezettség / jogos érdekek)",
                "Támogatási kérelmek megválaszolásához és visszatérítések kezeléséhez (szerződés teljesítése / jogos érdekek)",
                "Marketing kommunikáció küldéséhez, ha Ön feliratkozik (hozzájárulás)"
            ]
        },
        {
            type: "text",
            title: "4. Megosztás és Adattovábbítás",
            description: "Szükség esetén megosztjuk az adatokat fizetési szolgáltatókkal, tárhelyszolgáltató/felhő platformokkal, elemzési és támogatási eszközökkel. Egyes feldolgozók az Egyesült Királyságon/EGT-n kívül működhetnek; ahol adattovábbítás történik, garanciákat alkalmazunk, mint az egyesült királyságbeli megfelelőségi határozatok és Standard Szerződéses Klauzulák (SCC-k)."
        },
        {
            type: "text",
            title: "5. Cookie-k",
            description: "Cookie-kat és hasonló technológiákat használunk az oldal működőképességének biztosításához (pl. bejelentkezési munkamenetek, beállítások) és a teljesítmény méréséhez. Részletekért és hozzájárulás kezeléséért tekintse meg Cookie Szabályzatunkat."
        },
        {
            type: "text",
            title: "6. Megőrzés",
            description: "A fiók-, számlázási és tranzakciós nyilvántartásokat legalább 24 hónapig és legfeljebb 6 évig őrizzük meg viták vagy megfelelőség esetén. A mentett QR-kódok és tervezési előzmények a fiók aktív működése alatt megőrzésre kerülnek, hacsak Ön nem törli azokat."
        },
        {
            type: "text",
            title: "7. Jogai",
            description: "Az adatvédelmi jogszabályok alapján jogai vannak, beleértve a hozzáférést, javítást, törlést, korlátozást, hordozhatóságot, tiltakozást és a hozzájárulás visszavonását. Jogai gyakorlásához lépjen kapcsolatba velünk: " + COMPANY_EMAIL + ". Személyazonosság ellenőrzését kérhetjük."
        },
        {
            type: "text",
            title: "8. Biztonság",
            description: "Ésszerű technikai és szervezeti intézkedéseket alkalmazunk a személyes adatok védelmére, beleértve a titkosítást az átvitel során, a biztonságos tárolást, hozzáférés-szabályozást, naplózást és rendszeres biztonsági mentéseket."
        },
        {
            type: "text",
            title: "9. Változtatások",
            description: "Frissíthetjük ezt a Szabályzatot új funkciók hozzáadásakor vagy jogi követelmények változásakor. A jelentős frissítésekről e-mailben vagy feltűnő értesítéssel a weboldalunkon tájékoztatjuk."
        },
        {
            type: "text",
            title: "10. Kapcsolat és Panaszok",
            bullets: [
                `Adatvédelmi kérdések: ${COMPANY_EMAIL}`,
                `Támogatás: ${COMPANY_EMAIL}`,
                "Ha elégedetlen, panaszt nyújthat be az Egyesült Királyság Információs Biztosának Hivatalánál (ICO) vagy helyi adatvédelmi hatóságánál."
            ]
        },
        {
            type: "text",
            title: "Hatálybalépés Dátuma",
            description: "Ez az Adatvédelmi Szabályzat a közzétételtől lép hatályba és minden korábbi verziót felülír."
        },
        {
            type: "text",
            title: "Érvényes ettől",
            description: "2025. szeptember 18."
        }
    ]
};

export default privacyPolicySchema;

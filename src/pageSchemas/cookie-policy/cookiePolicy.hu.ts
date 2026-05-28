import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

export const cookiePolicyHu: PageSchema = {
    meta: {
        title: `Cookie Szabályzat – ${COMPANY_NAME}`,
        description: `Hogyan használja a ${COMPANY_NAME} a cookie-kat, milyen célokra, mennyi ideig maradnak meg, és hogyan kezelheti hozzájárulását a QR-kódok generálása során.`,
        keywords: [
            "cookie-k",
            "cookie szabályzat",
            "adatvédelem",
            "nyomon követés",
            "hozzájárulás",
            "QR-kódok",
            "egyedi QR generátor",
            COMPANY_NAME?.toLowerCase() || "qr-codes"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookie Szabályzat",
            description: "Átlátható információk a cookie-król és hozzájárulásról QR-kód generátorunkban.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Hatálybalépés dátuma",
            description: "2025. szeptember 18."
        },
        {
            type: "text",
            title: "1. Áttekintés",
            description: `Ez a Cookie Szabályzat ismerteti, hogyan használja a ${COMPANY_NAME} („mi", „minket", „miénk") a cookie-kat és hasonló technológiákat (például localStorage, sessionStorage és pixelek) QR-kód Generátorunkban. Kiegészíti Adatvédelmi Szabályzatunkat. Az oldal használatával vagy cookie bannerünkkel való interakcióval Ön az alábbiakban leírtak szerint kezelheti vagy megadhatja hozzájárulását a nem alapvető cookie-khoz.`
        },
        {
            type: "text",
            title: "2. Mik azok a cookie-k?",
            description: "A cookie-k kis szövegfájlok, amelyek az eszközére kerülnek webhelyek látogatásakor. Segítenek az alapvető funkciók biztosításában (pl. a QR generálási munkamenet aktívan tartása), a beállítások megjegyzésében, a teljesítmény mérésében és javításában, valamint (az Ön hozzájárulásával) az elemzések és marketing támogatásában."
        },
        {
            type: "text",
            title: "3. Az általunk használt cookie kategóriák",
            bullets: [
                "Szükséges / Alapvető — az alapvető platformfunkciókhoz szükséges (QR-kód generálás, bejelentkezés, munkamenet-kezelés). Ezek a cookie-k nem igényelnek hozzájárulást.",
                "Funkcionális — megjegyzik beállításait és preferenciáit (mentett QR sablonok, választott nyelv, sötét/világos mód).",
                "Teljesítmény / Elemzés — az oldalhasználat, hibák és betöltési idők mérése a QR generálás sebességének és megbízhatóságának javítása érdekében. Jogos érdekek és/vagy hozzájárulás alapján használva az eszköztől függően.",
                "Marketing / Hirdetés — csak ha Ön engedélyezi: kampány-hozzárendelés, remarketing, érdeklődés-alapú tartalom (hozzájárulás szükséges).",
                "Biztonság / Visszaélés elleni védelem — szokatlan tevékenység észlelése és az oldal, valamint a felhasználók védelme csalástól vagy automatizált botoktól."
            ]
        },
        {
            type: "text",
            title: "4. Tipikus cookie-k (példák)",
            bullets: [
                "session_id — Cél: bejelentkezési munkamenet (szükséges) • Élettartam: munkamenet",
                "csrf_token — Cél: CSRF védelem (szükséges) • Élettartam: munkamenet",
                "consent_state — Cél: cookie hozzájárulási választás tárolása (funkcionális/szükséges) • Élettartam: 6–12 hónap",
                "qr_prefs — Cél: QR generátor beállításainak mentése (funkcionális) • Élettartam: ~6 hónap",
                "perf_metrics — Cél: teljesítmény elemzés (elemzés) • Élettartam: 1–3 hónap",
                "campaign_src — Cél: kampány-hozzárendelés (marketing) • Élettartam: 1–3 hónap",
                "Megjegyzés: a pontos cookie nevek, élettartamok és szolgáltatók változhatnak — a legfrissebb információkért tekintse meg a cookie kezelőpanelt."
            ]
        },
        {
            type: "text",
            title: "5. Hozzájárulás és jogalap",
            bullets: [
                "Alapvető cookie-k: feltétlenül szükségesek a Szolgáltatáshoz és hozzájárulás nélkül használatosak.",
                "Nem alapvető cookie-k (funkcionális, elemzési, marketing): csak az Ön hozzájárulása után kerülnek beállításra cookie bannerünkön vagy beállításainkon keresztül, kivéve ahol jogos érdekek érvényesek (pl. korlátozott elemzés).",
                "Az általunk használt jogalapok: szerződés teljesítése, hozzájárulás és jogos érdekek (csalásmegelőzés, szolgáltatásfejlesztés, vitarendezés)."
            ]
        },
        {
            type: "text",
            title: "6. Hogyan rögzítjük és őrizzük meg a hozzájárulást",
            description: "Amikor Ön hozzájárulást ad, rögzítjük a döntést (jelölőnégyzet szövege/szabályzat verziója), ISO 8601 időbélyeget, IP-címet és user-agent karakterláncot bizonyítékként. A hozzájárulás és a kapcsolódó nyilvántartások legalább 24 hónapig és legfeljebb 6 évig megőrzésre kerülnek vállalati vagy vitatott ügyekben, Adatvédelmi Szabályzatunkkal összhangban."
        },
        {
            type: "text",
            title: "7. Harmadik felek és nemzetközi adattovábbítás",
            description: "Harmadik fél szolgáltatókat használunk (fizetési feldolgozók, elemzés, tárhelyszolgáltatás, marketing platformok), amelyek cookie-kat állíthatnak be. Egyes szolgáltatók az Egyesült Királyságon/EGT-n kívül dolgozhatják fel az adatokat; ahol adattovábbítás történik, biztosítjuk a garanciákat (egyesült királyságbeli megfelelőség, Standard Szerződéses Klauzulák vagy azzal egyenértékű). A jelenlegi szolgáltatókért tekintse meg a cookie kezelőpanelt."
        },
        {
            type: "text",
            title: "8. Hogyan kezelje vagy vonja vissza cookie hozzájárulását",
            bullets: [
                "Használja az oldalon található cookie bannert / beállításokat a nem alapvető cookie-k elfogadásához, elutasításához vagy testreszabásához.",
                "A hozzájárulást bármikor visszavonhatja a láblécben található cookie beállítások linkjén keresztül.",
                "A cookie-kat böngésző beállításokon keresztül is eltávolíthatja (cookie-k / webhelyadatok törlése) vagy használhat privát/inkognitó módot. Megjegyzés: a cookie-k törlése ronthatja a funkcionalitást (pl. elveszítheti a mentett QR sablonokat)."
            ]
        },
        {
            type: "text",
            title: "9. A Szabályzat módosításai",
            description: "Időről időre frissíthetjük ezt a Cookie Szabályzatot (pl. új funkciók vagy integrációk hozzáadásakor). A lényeges változásokról feltűnő értesítéssel az oldalon vagy e-mailben értesítjük a regisztrált felhasználókat. A hatálybalépés dátuma frissítésre kerül."
        },
        {
            type: "text",
            title: "10. Kapcsolat",
            bullets: [
                `Általános: ${COMPANY_EMAIL}`,
                `Jogi: ${COMPANY_LEGAL_NAME}`,
                `Cím: ${COMPANY_ADDRESS}`,
            ]
        }
    ]
};

export default cookiePolicyHu;

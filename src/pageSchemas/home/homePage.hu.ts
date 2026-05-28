import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME } from '@/resources/constants';
import { pricingCardsHu } from "@/resources/pricingPlans";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — QR-kód Konfigurátor Minden Igényre`,
        description: `Készítsen részletes, egyedi QR-kódokat azonnal. Minden QR-kód 30 tokenbe kerül. Gyors, biztonságos és rugalmas bármilyen felhasználásra.`,
        keywords: ["QR-kód", "konfigurátor", "generátor", "tokenek", "egyedi", "gyors", "biztonságos"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME} QR Konfigurátor`,
            description: "Készítsen egyedi QR-kódokat bármilyen célra. Gyors, rugalmas és biztonságos.",
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
            title: "A Leggyorsabb Módja a QR-kódok Létrehozásának",
            description:
                "Fedezze fel az azonnali QR-kód generálás erejét. Konfigurátorunk sebességre, rugalmasságra és biztonságra lett tervezve. Minden QR-kód másodpercek alatt elkészül, az Ön igényeire szabva.",
            buttons: [
                { text: "QR Generátor Kipróbálása", link: "/get-started", color: "primary" },
                { text: "Példák Megtekintése", link: "/services", color: "secondary" },
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
                            "Készítsen QR-kódokat URL-ekhez, szövegekhez, elérhetőségekhez, WiFi-hez, eseményekhez és még sok máshoz. Szabja testre minden QR-kódot az igényeinek megfelelően.",
                        bullets: [
                            "Többféle adattípus támogatása",
                            "Egyszerű konfiguráció",
                            "Előnézet letöltés előtt",
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
                            "Válasszon színeket, adjon hozzá logókat, és állítsa be a hibajavítási szinteket a maximális megbízhatóság és márkaépítés érdekében.",
                        bullets: [
                            "Egyedi színek és márkaépítés",
                            "Logó beágyazás",
                            "Magas szintű hibajavítás",
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
                            "Kapja meg QR-kódját azonnal a fizetés után. Töltse le PNG, SVG vagy PDF formátumban nyomtatáshoz vagy digitális használathoz.",
                        bullets: ["Nincs várakozási idő", "Többféle formátum", "Nyomtatásra kész"],
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
                            "Adatai védve vannak. Minden QR-kód egyedi és biztonságos üzleti vagy személyes használatra.",
                        bullets: [
                            "Biztonságos technológia",
                            "Privát és egyedi kódok",
                            "Szakemberek által megbízható",
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
            cards: pricingCardsHu,
        },
        {
            type: "faq",
            items: [
                {
                    question: "Mi az a QR-kód konfigurátor?",
                    answer:
                        "Ez egy eszköz egyedi QR-kódok azonnali és biztonságos létrehozásához bármilyen célra. Kiválaszthatja a tartalmat, a stílust és a formátumot.",
                },
                {
                    question: "Mennyibe kerül egy QR-kód?",
                    answer:
                        "Minden QR-kód 30 tokenbe kerül. Nincsenek előfizetések vagy rejtett díjak. Vásároljon tokeneket és használja őket igény szerint.",
                },
                {
                    question: "Milyen gyorsan kapom meg a QR-kódomat?",
                    answer:
                        "QR-kódja a fizetés után azonnal generálódik és kézbesítésre kerül. Töltse le a kívánt formátumban.",
                },
                {
                    question: "Használhatok QR-kódokat üzleti célra?",
                    answer:
                        "Igen! QR-kódjaink tökéletesek névjegykártyákhoz, termékkövétéshez, marketinghez, rendezvényjegyekhez és még sok máshoz.",
                },
                {
                    question: "Biztonságban vannak az adataim?",
                    answer:
                        "Természetesen. Biztonságos technológiát használunk az Ön adatainak védelméhez. QR-kódjai egyediek és privátak.",
                },
                {
                    question: "Milyen formátumok érhetők el?",
                    answer:
                        "QR-kódjait PNG, SVG vagy PDF formátumban töltheti le, nyomtatásra vagy digitális használatra készen.",
                },
                {
                    question: "Szükségem van műszaki ismeretekre?",
                    answer:
                        "Nem szükségesek műszaki ismeretek. Konfigurátorunk mindenki számára lett tervezve.",
                },
                {
                    question: "Testreszabhatom a QR-kódom megjelenését?",
                    answer:
                        "Igen, kiválaszthat színeket, hozzáadhat logókat, és beállíthatja a hibajavítási szinteket a maximális megbízhatóság érdekében.",
                },
            ],
        },
    ],
};

export default schema;

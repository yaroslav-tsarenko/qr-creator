import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `Visszatérítési Szabályzat – ${COMPANY_NAME}`,
        description: `A ${COMPANY_NAME} Visszatérítési Szabályzata: a belső valuta (Tokenek) és digitális termékek visszatérítésének szabályai.`,
        keywords: [
            "visszatérítési szabályzat",
            "visszatérítések",
            "visszaküldések",
            COMPANY_NAME?.toLowerCase() || "manuals",
            "kézikönyvek",
            "kreditek",
            "belső valuta"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Visszatérítési Szabályzat`,
            description: "Egyértelmű és átlátható visszatérítési feltételek.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Összefoglalás",
            bullets: [
                "A visszatérítéseket ezen Szabályzat és az alkalmazandó fogyasztóvédelmi jogszabályok alapján mérlegeljük.",
                "Feldolgozási idő: A visszatérítések általában a jóváhagyás után 5–10 munkanapon belül kerülnek feldolgozásra.",
                "A visszatérítések nem haladhatják meg a kreditekért/tranzakcióért eredetileg fizetett összeget.",
                "A már elköltött kreditek (Termékek megszerzésére felhasznált) nem téríthetők vissza.",
                "A kreditek fiókhoz kötöttek, nem átruházhatók és nem válthatók valódi pénznemre.",
                "A promóciós/bónusz kreditek minden körülmények között visszatéríthetetlenek.",
                `Visszatérítési kérelmeket a ${COMPANY_EMAIL} címre kell küldeni a rendelési hivatkozással és részletekkel.`,
                "Ez a Szabályzat módosítható; a lényeges változásokról az alábbiakban leírtak szerint értesítünk.",
                "Ha Ön hozzájárult az azonnali teljesítéshez és megnyitotta/letöltötte a tartalmat, a törvényes elállási jog elveszhet — lásd az 5. pontot."
            ]
        },
        {
            type: "text",
            title: "2. Hatály és Jogi Megjegyzés",
            description: `Ez a Szabályzat szabályozza a Tokenekkel (belső kreditek/„kreditek") és a Társaság által nyújtott digitális Termékekkel kapcsolatos visszatérítéseket. Nem sérti az Egyesült Királyság jogszabályai szerinti kötelező fogyasztói jogokat (ideértve, ahol alkalmazandó, a 2013-as Fogyasztói Szerződésekre vonatkozó Rendeleteket és a 2015-ös Fogyasztói Jogokról szóló Törvényt). E Szabályzat semmi sem korlátozza vagy zárja ki azokat a jogokat, amelyeket az alkalmazandó jog nem zárhat ki.`
        },
        {
            type: "text",
            title: "3. Meghatározások",
            bullets: [
                "Kreditek / Tokenek — a Szolgáltatáson használt belső valuta (tájékoztató jellegű névérték: 1 Token = 0,01 a választott pénznemből).",
                "Felhasználatlan Kreditek — a fiókjában maradt és be nem váltott kreditek.",
                "Beváltott/Elköltött Kreditek — Termék vásárlására vagy eléréséhez felhasznált kreditek.",
                "Promóciós / Bónusz Kreditek — promóciók, bónuszok vagy ösztönzők keretében kibocsátott kreditek."
            ]
        },
        {
            type: "text",
            title: "4. Visszatérítési Elvek (Kötelező Szabályok)",
            bullets: [
                "A visszatérítés nem haladhatja meg a Kreditekért vagy Termékért eredetileg fizetett összeget (a nem visszatéríthető feldolgozási díjak levonása után).",
                "Elköltött Kreditek esetén nincs visszatérítés, kivéve hibás/leírástól eltérő Termékek, sikertelen teljesítés esetén, vagy jogszabály által előírt esetben.",
                "A Felhasználatlan Kreditek általában visszatéríthetők az eredeti vételáron, ha a kérés a beváltás előtt történik (a nem visszatéríthető díjak levonása után).",
                "A kreditek fiókhoz kötöttek és nem átruházhatók.",
                "A kreditek nem válthatók készpénzre vagy más valódi pénznemre, kivéve ha jogszabály ezt előírja.",
                "A promóciós/bónusz Kreditek minden körülmények között visszatéríthetetlenek.",
                "Ha Ön hozzájárul az azonnali teljesítéshez és megnyitja/letölti a tartalmat, törvényes elállási joga elveszhet; visszatérítés kizárólag a 4.2 pont vagy jogszabály szerint lehetséges.",
                "Az egyedi/testre szabott Kézikönyvek nem téríthetők vissza, ha az érdemi munka megkezdődött, kivéve írásbeli megállapodás esetén."
            ]
        },
        {
            type: "text",
            title: "5. Hogyan Kérjen Visszatérítést",
            description: `Visszatérítés kéréséhez küldje el az alábbiakat a ${COMPANY_EMAIL} címre (vagy a támogatási űrlapon keresztül):`,
            bullets: [
                "Rendelési hivatkozási szám (kötelező).",
                "A vásárláshoz használt fiók e-mail cím.",
                "Adja meg, hogy a kérés Felhasználatlan Kreditekre vagy Beváltott Termékre vonatkozik-e.",
                "Beváltott termékre vonatkozó igény esetén: a probléma teljes leírása és alátámasztó bizonyítékok.",
                "Előnyben részesített visszatérítési módszer (az eredeti fizetési mód ajánlott).",
                "5 munkanapon belül visszaigazoljuk, kivizsgáljuk, és a jóváhagyott visszatérítéseket a jóváhagyástól számított 5–10 munkanapon belül feldolgozzuk."
            ]
        },
        {
            type: "text",
            title: "6. Vizsgálat, Bizonyítékok és Döntések",
            bullets: [
                "Beváltott Termékre vonatkozó igények esetén megvizsgáljuk a rendelési/token naplókat, a fizetési bizonyítékokat, a kézbesítési naplókat és az Ön által benyújtott bizonyítékokat.",
                "A visszatérítések általában az eredeti fizetési módra történnek; ha ez nem lehetséges, alternatívákat kínálhatunk.",
                "Ha az igényt elutasítjuk, világos magyarázatot adunk és tájékoztatjuk az eszkalációs lehetőségekről."
            ]
        },
        {
            type: "text",
            title: "7. Visszaterhelések, Csalás és Visszaélés",
            description: "Ha visszaterhelést kezdeményeznek egy függő visszatérítés mellett, azt vitaként kezeljük és teljes bizonyítékot nyújtunk a fizetési szolgáltatónak. A Társaság megtagadhatja a visszatérítéseket és felfüggesztheti/lezárhatja a Fiókokat csalás, visszaélés vagy ismételt alaptalan visszaterhelések esetén."
        },
        {
            type: "text",
            title: "8. A Szabályzat Módosításai",
            description: "A Társaság bármikor módosíthatja ezt a Visszatérítési Szabályzatot. A lényeges változásokról a regisztrált felhasználókat e-mailben vagy feltűnő értesítéssel tájékoztatjuk. A változások kizárólag a jövőre nézve hatályosak."
        },
        {
            type: "text",
            title: "9. Nyilvántartás és Megőrzés",
            description: "A visszatérítési döntések vizsgálatához és alátámasztásához szükséges nyilvántartásokat legalább 24 hónapig és legfeljebb 6 évig őrizzük meg vállalati/vitatott tranzakciók esetén, Adatvédelmi Szabályzatunkkal és az alkalmazandó jogszabályokkal összhangban."
        },
        {
            type: "text",
            title: "10. Eszkaláció és Viták",
            description: `Ha nem ért egyet egy visszatérítési döntéssel, eszkaláljon a ${COMPANY_EMAIL} címre a teljes indoklással és rendelési hivatkozással. 10 munkanapon belül felülvizsgáljuk. Ez a szabályzat nem érinti törvényes jogait.`
        },
        {
            type: "text",
            title: "11. Példák",
            bullets: [
                "Felhasználatlan Kreditek: 2 000 Token vásárlása £0,01-ért = £20; felhasznált 300 → felhasználatlan 1 700 → visszatérítés = £17 (a nem visszatéríthető feldolgozási díjak levonása után).",
                "Letöltött kézikönyv: Ha Ön hozzájárult az azonnali teljesítéshez és letöltötte a kézikönyvet, visszatérítés csak akkor lehetséges, ha a kézikönyv hibás/a leírástól eltérő.",
                "Promóciós kreditek: 100 bónusz kredit promóció során — nem visszatéríthető."
            ]
        },
        {
            type: "text",
            title: "12. Elérhetőségek",
            bullets: [
                `E-mail (támogatás): ${COMPANY_EMAIL}`,
                `Postai cím: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}`
            ]
        },
        {
            type: "text",
            title: "Hatálybalépés Dátuma",
            description: "Ez a Visszatérítési Szabályzat a közzétételtől lép hatályba és minden korábbi verziót felülír."
        },
        {
            type: "text",
            title: "Érvényes ettől",
            description: "2025. szeptember 18."
        }
    ]
};

export default refundPolicySchema;

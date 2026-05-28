import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_PHONE,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Általános Szerződési Feltételek – ${COMPANY_NAME}`,
        description: `A ${COMPANY_NAME} használatának feltételei: fiókok, QR-kód generálás, fizetések, visszatérítések, szellemi tulajdon, felelősség, adatvédelem és egyebek.`,
        keywords: [
            "feltételek",
            "általános szerződési feltételek",
            "szerződés",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "qr-kódok",
            "adatvédelem",
            "felelősség",
            "fizetés",
            "pénznem"
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `${COMPANY_NAME} – Feltételek`,
            description: "Átlátható feltételek. QR-kódok egyszerűen.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Általános Szerződési Feltételek",
            description: "Hatálybalépés dátuma: 2025. szeptember 18."
        },
        {
            type: "text",
            title: "1. Bevezetés",
            description: `Jelen Általános Szerződési Feltételek („Feltételek") szabályozzák a ${COMPANY_NAME} weboldal és szolgáltatások (a „Szolgáltatás") használatát, amelyet a ${COMPANY_LEGAL_NAME} (cégjegyzékszám: ${COMPANY_NUMBER}, székhelye: ${COMPANY_ADDRESS}) („mi", „minket", „miénk" vagy a „Társaság") üzemeltet. Jelen Feltételek jogilag kötelező megállapodást képeznek Ön („Ön", „Felhasználó", „Ügyfél") és a Társaság között. A Szolgáltatás elérésével vagy használatával, fiók regisztrálásával, QR-kódok generálásával vagy testreszabásával, illetve prémium funkciók vásárlásával Ön elfogadja jelen Feltételeket. Ha nem ért egyet a Feltételek bármely részével, nem használhatja a Szolgáltatást.`
        },
        {
            type: "text",
            title: "2. Meghatározások",
            bullets: [
                `„Fiók" a Szolgáltatáson létrehozott Felhasználói fiókot jelenti.`,
                `„QR-kód(ok)" a Szolgáltatáson keresztül létrehozott vagy testreszabott bármilyen digitális QR-kódot jelenti (beleértve a PNG, SVG, JPEG vagy PDF formátumokat).`,
                `„Funkció(k)" a Szolgáltatáson elérhető további tervezési, testreszabási, exportálási vagy nyomkövető funkcionalitásokat jelenti.`,
                `„Termék(ek)" a QR-kódokat és a Szolgáltatáson keresztül kínált bármely más árut vagy szolgáltatást jelenti.`,
                `„Ön/Az Ön/Ügyfél" a Szolgáltatást használó vagy Termékeket vásárló természetes személyt vagy jogi személyt jelenti.`
            ]
        },
        {
            type: "text",
            title: "3. Jogosultság és Fiók Regisztráció",
            bullets: [
                "Fiók regisztrálásához és a Szolgáltatás használatához legalább 18 évesnek kell lennie. Ha egy vállalat vagy más jogi személy nevében regisztrál, megerősíti, hogy erre jogosultsága van.",
                "A regisztráció során pontos, aktuális és teljes információkat kell megadnia, és ezeket naprakészen kell tartania. Ön felelős a Fiókja hitelesítő adatainak bizalmas kezeléséért és a Fiókja alatt történő minden tevékenységért.",
                "Azonnal értesítenie kell minket a Fiókja jogosulatlan használatáról vagy bármilyen más biztonsági résről."
            ]
        },
        {
            type: "text",
            title: "4. Szolgáltatások és Funkciók",
            bullets: [
                "Az alapvető QR-kód generálás díjmentes.",
                "Prémium funkciók (mint egyedi márkaépítés, közösségi média ikonok, nagy felbontású exportálás, elemzés és API hozzáférés) fizetést igényelhetnek.",
                "A Termékek digitálisan kerülnek kézbesítésre a vezérlőpulton vagy letöltési linkeken keresztül.",
                "Időről időre frissíthetjük, hozzáadhatjuk vagy eltávolíthatjuk a funkciókat."
            ]
        },
        {
            type: "text",
            title: "5. Rendelés, Fizetés és Pénztár",
            bullets: [
                "Minden rendelés a Társaság elfogadásának függvénye. Bármilyen rendelést elutasíthatunk vagy törölhetünk bármilyen okból, beleértve a csalás gyanúját, technikai hibákat, vagy ár- vagy termékleírási hibákat.",
                "Az elfogadott fizetési módok a pénztárnál jelennek meg. Ön szavatolja, hogy jogosult az Ön által megadott bármely fizetési mód használatára.",
                "A pénztárnál az alábbiak jelennek meg: (a) a kiválasztott funkciók vagy termékek ára; (b) az oldalon vagy a pénztároldalon kiválasztott elszámolási pénznem; és (c) az alkalmazandó adók, díjak és költségek. Ezeket a tranzakció befejezése előtt meg kell erősítenie.",
                "Ha több oldalpénznem érhető el, a rendelése a pénztárnál kifejezetten kiválasztott és megjelenített pénznemben kerül felszámításra és elszámolásra.",
                "A Termékek digitálisan kerülnek kézbesítésre és a letöltés vagy hozzáférés megadása után kézbesítettnek tekintendők. Nem garantáljuk a Szolgáltatás folyamatos elérhetőségét."
            ]
        },
        {
            type: "text",
            title: "6. Visszatérítések, Lemondás és Fogyasztói Jogok",
            bullets: [
                "Az Egyesült Királyság fogyasztóvédelmi jogszabályai alapján Önnek törvényes elállási joga lehet bizonyos távollévők közötti szerződések esetén. Ez a jog azonban elveszhet, ha a digitális tartalom az Ön kifejezett beleegyezésével azonnal rendelkezésre bocsátásra kerül az elállási jog nélkül.",
                "Visszatérítés kizárólag felhasználatlan vagy hibás vásárlások esetén lehetséges. Visszatérítési kérelmet a felhasználás előtt kell benyújtani.",
                `Ha egy Termék (QR-kód exportálás vagy funkció) hibás vagy nem felel meg a leírásnak, lépjen kapcsolatba ügyfélszolgálatunkkal: ${COMPANY_EMAIL}. Ha ésszerű időn belül nem tudjuk orvosolni a problémát, Ön jogosult lehet visszatérítésre vagy más jogorvoslatra a jogszabályok szerint.`,
                `Visszatérítés kéréséhez lépjen velünk kapcsolatba: ${COMPANY_EMAIL} Fiókja adataival, rendelési hivatkozásával és teljes részletekkel. Kivizsgáljuk és ésszerű időn belül válaszolunk.`
            ]
        },
        {
            type: "text",
            title: "7. Szellemi Tulajdonjogok",
            bullets: [
                `A Szolgáltatásban és Termékekben található minden szellemi tulajdonjog a ${COMPANY_LEGAL_NAME} tulajdonában van vagy annak engedélye alapján használatos, hacsak másként nem jelöljük.`,
                "A QR-kód generálásakor Ön korlátozott, nem kizárólagos, nem átruházható, visszavonható licencet kap annak személyes vagy üzleti célú felhasználására. Írásbeli megállapodás hiányában Ön nem teheti a következőket:",
                "(a) QR-kódok önálló termékként történő viszonteladása;",
                "(b) a Szolgáltatáson található szerzői jogi, védjegy- vagy egyéb tulajdonjogi jelzések eltávolítása vagy elhomályosítása;",
                "(c) a Szolgáltatás visszaélésszerű használata QR-kódok illegális, káros vagy csalárd célú generálásához."
            ]
        },
        {
            type: "text",
            title: "8. Garanciák és Nyilatkozatok",
            bullets: [
                "Szavatoljuk, hogy jogosultak vagyunk az Ön számára a jelen Feltételek szerinti jogok megadására.",
                "A kifejezetten eloirtak kivetelevel a Szolgaltatas es a Termekek 'adott allapotban' es 'elerhetoseg szerint' kerulnek nyujtasra. A Tarsasag a jogszabalyok altal megengedett legteljesebb mertekben kizar minden egyeb garanciat, legyen az kifejezett vagy hallgatolagos."
            ]
        },
        {
            type: "text",
            title: "9. Felelősségkorlátozás",
            bullets: [
                "Jelen Feltételek semmi sem korlátozza vagy zárja ki a gondatlanság által okozott halálért vagy személyi sérülésért, csalásért, vagy bármely más olyan felelősségért vállalt felelősséget, amelyet a jogszabályok nem korlátozhatnak vagy zárhatnak ki.",
                "A fentiekre figyelemmel a Társaság teljes felelőssége az Ön felé a követelést megelőző 12 hónapban az Ön által a követelést kiváltó Termékekért fizetett összeg összesített értékére korlátozódik.",
                "A Társaság nem felelős semmilyen közvetett, különleges vagy következményes kárért, elmaradt haszonért, üzleti, goodwill, várt megtakarítás, adatveszteségért vagy hasonló veszteségekért, még akkor sem, ha azok előreláthatóak voltak."
            ]
        },
        {
            type: "text",
            title: "10. Kártalanítás",
            description: "Ön vállalja, hogy kártalanítja és mentesíti a Társaságot, tisztségviselőit, igazgatóit, alkalmazottait és ügynökeit minden veszteségtől, felelősségtől, követeléstől, igénytől, kártól, költségtől és kiadástól (beleértve az ésszerű jogi díjakat), amelyek az alábbiakból erednek vagy azokkal összefüggésben merülnek fel: (a) a jelen Feltételek Ön általi megsértése; (b) a Szolgáltatás vagy Termékek Ön általi visszaélésszerű használata; vagy (c) az Ön által bármely alkalmazandó jogszabály vagy harmadik fél jogainak megsértése."
        },
        {
            type: "text",
            title: "11. Adatvédelem",
            bullets: [
                `Személyes adatokat Adatvédelmi Szabályzatunknak megfelelően dolgozunk fel (lásd a weboldalt). Betartjuk az Egyesült Királyság GDPR-t és a 2018-as Adatvédelmi Törvényt.`,
                "A Szolgáltatás használatával Ön hozzájárul személyes adatainak az Adatvédelmi Szabályzatnak megfelelő feldolgozásához."
            ]
        },
        {
            type: "text",
            title: "12. Harmadik Fél Tartalma és Linkek",
            description: "A Szolgáltatás tartalmazhat linkeket harmadik felek webhelyeihez és erőforrásaihoz. Nem irányítjuk és nem felelünk a harmadik felek oldalainak tartalmáért, adatvédelmi szabályzataiért vagy gyakorlataiért. A linkek kizárólag kényelmi célokat szolgálnak és nem jelentenek jóváhagyást."
        },
        {
            type: "text",
            title: "13. Felfüggesztés és Megszüntetés",
            bullets: [
                "Azonnal és előzetes értesítés nélkül felfüggeszthetjük, korlátozhatjuk vagy megszüntethetjük a Szolgáltatáshoz vagy Fiókjához való hozzáférést, ha ésszerűen gyanítjuk jelen Feltételek megsértését, csalárd vagy illegális tevékenységet, vagy biztonsági vagy technikai okokból.",
                "Felfüggesztés vagy megszüntetés esetén az Önnek engedélyezett jogok azonnal megszűnnek. A megszüntetés nem érinti a már keletkezett jogokat vagy kötelezettségeket."
            ]
        },
        {
            type: "text",
            title: "14. Jelen Feltételek Módosításai",
            description: "Időről időre módosíthatjuk jelen Feltételeket. A lényeges változásokról a regisztrált felhasználókat e-mailben vagy a Szolgáltatáson feltűnő értesítéssel tájékoztatjuk. A módosított Feltételek az értesítésben megjelölt napon lépnek hatályba. A Szolgáltatás közzététel utáni folyamatos használata elfogadásnak minősül."
        },
        {
            type: "text",
            title: "15. Értesítések",
            description: `A Társaságnak szóló összes értesítést e-mailben a ${COMPANY_EMAIL} címre vagy postai úton a bejegyzett címre kell küldeni. Az Önnek szóló értesítések e-mailben vagy a Szolgáltatáson való közzététellel küldhetők.`
        },
        {
            type: "text",
            title: "16. Irányadó Jog és Joghatóság",
            bullets: [
                "Jelen Feltételekre és az azokból eredő vagy azokkal kapcsolatos bármely vitára vagy követelésre Anglia és Wales jogszabályai az irányadók.",
                "Anglia és Wales bíróságai kizárólagos joghatósággal rendelkeznek, kivéve ha a fogyasztóvédelmi jog Skóciában, Észak-Írországban vagy az EU-ban másként rendelkezik."
            ]
        },
        {
            type: "text",
            title: "17. Egyéb Rendelkezések",
            bullets: [
                "Ha jelen Feltételek bármely rendelkezése érvénytelennek, jogellenesnek vagy végrehajthatatlannak bizonyul, az adott rendelkezés elkülönítésre kerül, és a fennmaradó rész teljes hatállyal érvényben marad.",
                "A Társaság bármely jelen Feltételek szerinti jog gyakorlásának elmulasztása vagy késlekedése nem minősül az adott jogról való lemondásnak."
            ]
        },
        {
            type: "text",
            title: "18. Elérhetőségek",
            bullets: [
                `Társaság: ${COMPANY_LEGAL_NAME}`,
                `Székhely: ${COMPANY_ADDRESS}`,
                `Cégjegyzékszám: ${COMPANY_NUMBER}`,
                `E-mail: ${COMPANY_EMAIL}`,
                `Telefon: ${COMPANY_PHONE}`
            ]
        }
    ]
};

export default termsSchema;

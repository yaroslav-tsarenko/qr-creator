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
        title: `Vilkår og betingelser – ${COMPANY_NAME}`,
        description: `Vilkår for brug af ${COMPANY_NAME}: konti, QR-kode generering, betalinger, refusioner, IP, ansvar, privatliv og mere.`,
        keywords: [
            "vilkår",
            "vilkår og betingelser",
            "kontrakt",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "QR-koder",
            "privatliv",
            "ansvar",
            "betaling",
            "valuta"
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `${COMPANY_NAME} – Vilkår`,
            description: "Gennemsigtige betingelser. QR-koder gjort enkelt.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Vilkår og betingelser",
            description: "Ikrafttrædelsesdato: 18. september 2025"
        },
        {
            type: "text",
            title: "1. Introduktion",
            description: `Disse vilkår og betingelser ("vilkår") regulerer din brug af ${COMPANY_NAME}-hjemmesiden og -tjenesterne ("tjenesten") drevet af ${COMPANY_LEGAL_NAME} (virksomhedsnummer: ${COMPANY_NUMBER}, registreret kontor: ${COMPANY_ADDRESS}) ("vi", "os", "vores" eller "virksomheden"). Disse vilkår udgør en juridisk bindende aftale mellem dig ("dig", "bruger", "kunde") og virksomheden. Ved at tilgå eller bruge tjenesten, oprette en konto, generere eller tilpasse QR-koder eller købe premium-funktioner accepterer du at være bundet af disse vilkår. Hvis du ikke accepterer nogen del af vilkårene, må du ikke bruge tjenesten.`
        },
        {
            type: "text",
            title: "2. Definitioner",
            bullets: [
                `"Konto" betyder den brugerkonto, der er oprettet på tjenesten.`,
                `"QR-kode(r)" betyder enhver digital QR-kode oprettet eller tilpasset via tjenesten (herunder PNG-, SVG-, JPEG- eller PDF-formater).`,
                `"Funktion(er)" betyder yderligere design-, tilpasnings-, eksport- eller sporingsfunktionaliteter tilgængelige på tjenesten.`,
                `"Produkt(er)" betyder QR-koder og alle andre varer eller tjenester, der tilbydes via tjenesten.`,
                `"Dig/Din/Kunde" betyder den person eller juridiske enhed, der bruger tjenesten eller køber produkter.`
            ]
        },
        {
            type: "text",
            title: "3. Berettigelse og kontoregistrering",
            bullets: [
                "Du skal være mindst 18 år for at registrere en konto og bruge tjenesten. Hvis du registrerer dig på vegne af en virksomhed eller anden juridisk enhed, bekræfter du, at du har bemyndigelse til at gøre det.",
                "Ved registrering skal du angive nøjagtige, aktuelle og fuldstændige oplysninger og holde sådanne oplysninger opdaterede. Du er ansvarlig for at opretholde fortroligheden af dine kontooplysninger og for al aktivitet, der finder sted under din konto.",
                "Du skal straks underrette os om enhver uautoriseret brug af din konto eller ethvert andet sikkerhedsbrud."
            ]
        },
        {
            type: "text",
            title: "4. Tjenester og funktioner",
            bullets: [
                "Grundlæggende QR-kode generering er gratis.",
                "Premium-funktioner (såsom tilpasset branding, sociale medieikoner, højopløselige eksporter, analyse og API-adgang) kan kræve betaling.",
                "Produkter leveres digitalt via dit dashboard eller via downloadlinks.",
                "Vi kan opdatere, tilføje eller fjerne funktioner fra tid til anden."
            ]
        },
        {
            type: "text",
            title: "5. Bestilling, betaling og checkout",
            bullets: [
                "Alle ordrer er underlagt accept af virksomheden. Vi kan afvise eller annullere enhver ordre af enhver grund, herunder mistanke om svindel, tekniske fejl eller fejl i pris eller produktbeskrivelse.",
                "Accepterede betalingsmetoder vises ved checkout. Du garanterer, at du er autoriseret til at bruge enhver betalingsmetode, du angiver.",
                "Ved checkout vil du blive vist: (a) prisen på de valgte funktioner eller produkter; (b) afregningsvalutaen valgt på websitet eller checkout-siden; og (c) gældende skatter, gebyrer og afgifter. Du skal bekræfte disse, før du gennemfører transaktionen.",
                "Hvor flere webstedsvalutaer er tilgængelige, opkræves og afregnes din ordre i den valuta, der eksplicit er valgt og vist ved checkout.",
                "Produkter leveres digitalt og anses for leveret, når download eller adgang er givet. Vi garanterer ikke kontinuerlig tilgængelighed af tjenesten."
            ]
        },
        {
            type: "text",
            title: "6. Refusioner, annullering og forbrugerrettigheder",
            bullets: [
                "I henhold til britisk forbrugerlovgivning kan du have en lovbestemt ret til at annullere visse fjernaftaler. Denne ret kan dog gå tabt, hvor digitalt indhold leveres øjeblikkeligt efter din udtrykkelige aftale om at begynde leveringen uden fortrydelsesret.",
                "Refusioner kan kun være tilgængelige for ubrugte eller defekte køb. Refusionsanmodninger skal indsendes inden brug.",
                `Hvis et produkt (QR-kode eksport eller funktion) er defekt eller ikke som beskrevet, kontakt vores supportteam på ${COMPANY_EMAIL}. Hvis vi ikke kan afhjælpe problemet inden for en rimelig tid, kan du have ret til en refusion eller anden afhjælpning i henhold til lovgivningen.`,
                `For at anmode om refusion, kontakt os på ${COMPANY_EMAIL} med dine kontooplysninger, ordrereference og fulde detaljer. Vi vil undersøge og svare inden for en rimelig tid.`
            ]
        },
        {
            type: "text",
            title: "7. Immaterielle rettigheder",
            bullets: [
                `Alle immaterielle rettigheder til tjenesten og produkterne ejes af eller er licenseret til ${COMPANY_LEGAL_NAME}, medmindre andet er angivet.`,
                "Ved generering af en QR-kode får du en begrænset, ikke-eksklusiv, ikke-overførbar, tilbagekaldelig licens til at bruge den til dine personlige eller forretningsmæssige formål. Medmindre skriftligt aftalt må du ikke:",
                "(a) videresælge QR-koder som et selvstændigt produkt;",
                "(b) fjerne eller tilsløre enhver ophavsrets-, varemærke- eller anden ejendomsretlig meddelelse på tjenesten;",
                "(c) misbruge tjenesten til at generere QR-koder til ulovlige, skadelige eller svigagtige formål."
            ]
        },
        {
            type: "text",
            title: "8. Garantier og ansvarsfraskrivelser",
            bullets: [
                "Vi garanterer, at vi har ret til at give dig rettighederne i henhold til disse vilkår.",
                "Medmindre udtrykkeligt angivet leveres tjenesten og produkterne \"som de er\" og \"som tilgængelige\". Virksomheden udelukker alle andre garantier, udtrykkelige eller underforståede, i det videst mulige omfang tilladt ved lov."
            ]
        },
        {
            type: "text",
            title: "9. Ansvarsbegrænsning",
            bullets: [
                "Intet i disse vilkår begrænser eller udelukker ansvar for død eller personskade forårsaget af uagtsomhed, svindel eller ethvert andet ansvar, der ikke kan begrænses eller udelukkes ved lov.",
                "Med forbehold for ovenstående er virksomhedens samlede ansvar over for dig begrænset til det samlede beløb, du har betalt for de produkter, der giver anledning til kravet, i de 12 måneder forud for kravet.",
                "Virksomheden er ikke ansvarlig for indirekte, særlige eller følgeskader, tab af fortjeneste, forretning, goodwill, forventede besparelser, data eller lignende tab, selv om det var forudsigeligt."
            ]
        },
        {
            type: "text",
            title: "10. Skadesløsholdelse",
            description: "Du accepterer at skadesløsholde og friholde virksomheden, dens ledere, direktører, medarbejdere og agenter fra og mod alle tab, forpligtelser, krav, påkrav, skader, omkostninger og udgifter (herunder rimelige advokatomkostninger) som følge af eller i forbindelse med: (a) din overtrædelse af disse vilkår; (b) dit misbrug af tjenesten eller produkterne; eller (c) din overtrædelse af gældende lovgivning eller tredjemands rettigheder."
        },
        {
            type: "text",
            title: "11. Databeskyttelse",
            bullets: [
                `Vi behandler personoplysninger i overensstemmelse med vores privatlivspolitik (se hjemmesiden). Vi overholder UK GDPR og Data Protection Act 2018.`,
                "Ved at bruge tjenesten samtykker du til behandling af dine personoplysninger i overensstemmelse med privatlivspolitikken."
            ]
        },
        {
            type: "text",
            title: "12. Tredjepartsindhold og links",
            description: "Tjenesten kan indeholde links til tredjepartshjemmesider og ressourcer. Vi kontrollerer ikke og er ikke ansvarlige for indholdet, privatlivspolitikker eller praksis på tredjepartssider. Links leveres udelukkende for nemheds skyld og indebærer ikke godkendelse."
        },
        {
            type: "text",
            title: "13. Suspension og opsigelse",
            bullets: [
                "Vi kan suspendere, begrænse eller opsige din adgang til tjenesten eller din konto øjeblikkeligt og uden varsel, hvis vi med rimelighed mistænker overtrædelse af disse vilkår, svigagtig eller ulovlig aktivitet, eller af sikkerheds- eller tekniske årsager.",
                "Ved suspension eller opsigelse ophører alle rettigheder, der er licenseret til dig, øjeblikkeligt. Opsigelse påvirker ikke optjente rettigheder eller forpligtelser."
            ]
        },
        {
            type: "text",
            title: "14. Ændringer af disse vilkår",
            description: "Vi kan ændre disse vilkår fra tid til anden. Væsentlige ændringer vil blive meddelt til registrerede brugere via e-mail eller ved en fremtrædende meddelelse på tjenesten. Ændrede vilkår træder i kraft på den dato, der er angivet i meddelelsen. Fortsat brug af tjenesten efter offentliggørelse udgør accept."
        },
        {
            type: "text",
            title: "15. Meddelelser",
            description: `Alle meddelelser til virksomheden skal sendes via e-mail til ${COMPANY_EMAIL} eller med post til den registrerede adresse. Meddelelser til dig kan gives via e-mail eller ved opslag på tjenesten.`
        },
        {
            type: "text",
            title: "16. Lovvalg og værneting",
            bullets: [
                "Disse vilkår og enhver tvist eller krav, der opstår i forbindelse med dem, er underlagt lovgivningen i England og Wales.",
                "Domstolene i England og Wales har enekompetence, undtagen som krævet af forbrugerlovgivningen i Skotland, Nordirland eller EU."
            ]
        },
        {
            type: "text",
            title: "17. Diverse",
            bullets: [
                "Hvis en bestemmelse i disse vilkår viser sig at være ugyldig, ulovlig eller ikke-håndhævbar, skal den bestemmelse adskilles, og resten skal fortsat have fuld kraft og virkning.",
                "Ingen manglende eller forsinkede udøvelse af en rettighed i henhold til disse vilkår fra virksomhedens side skal fungere som et afkald på den rettighed."
            ]
        },
        {
            type: "text",
            title: "18. Kontaktoplysninger",
            bullets: [
                `Virksomhed: ${COMPANY_LEGAL_NAME}`,
                `Registreret kontor: ${COMPANY_ADDRESS}`,
                `Virksomhedsnr.: ${COMPANY_NUMBER}`,
                `E-mail: ${COMPANY_EMAIL}`,
                `Telefon: ${COMPANY_PHONE}`
            ]
        }
    ]
};

export default termsSchema;

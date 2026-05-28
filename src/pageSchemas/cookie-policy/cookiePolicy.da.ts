import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

export const cookiePolicyDa: PageSchema = {
    meta: {
        title: `Cookiepolitik – ${COMPANY_NAME}`,
        description: `Hvordan ${COMPANY_NAME} bruger cookies, til hvilke formål, hvor længe de varer, og hvordan du kan administrere dit samtykke, mens du genererer QR-koder.`,
        keywords: [
            "cookies",
            "cookiepolitik",
            "privatliv",
            "sporing",
            "samtykke",
            "QR-koder",
            "tilpasset QR-generator",
            COMPANY_NAME?.toLowerCase() || "qr-codes"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookiepolitik",
            description: "Gennemsigtig information om cookies og samtykke på vores QR-kode generator.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Ikrafttrædelsesdato",
            description: "18. september 2025"
        },
        {
            type: "text",
            title: "1. Oversigt",
            description: `Denne cookiepolitik forklarer, hvordan ${COMPANY_NAME} ("vi", "os", "vores") bruger cookies og lignende teknologier (for eksempel localStorage, sessionStorage og pixels) på vores QR-kode Generator. Den supplerer vores privatlivspolitik. Ved at bruge websitet eller interagere med vores cookiebanner kan du administrere eller give samtykke til ikke-essentielle cookies som beskrevet nedenfor.`
        },
        {
            type: "text",
            title: "2. Hvad er cookies?",
            description: "Cookies er små tekstfiler, der placeres på din enhed, når du besøger hjemmesider. De hjælper med at levere kernefunktionalitet (f.eks. holde din QR-genereringssession aktiv), huske præferencer, måle og forbedre ydeevne, og (med dit samtykke) understøtte analyse og markedsføring."
        },
        {
            type: "text",
            title: "3. Cookiekategorier vi bruger",
            bullets: [
                "Nødvendige / Essentielle — påkrævet til kernefunktioner på platformen (QR-kode generering, login, sessionsstyring). Disse cookies kræver ikke samtykke.",
                "Funktionelle — husker dine indstillinger og præferencer (gemte QR-skabeloner, valgt sprog, mørk/lys tilstand).",
                "Ydelses- / Analysecookies — måler webstedets brug, fejl og indlæsningstider for at forbedre QR-genereringens hastighed og pålidelighed. Bruges under legitime interesser og/eller samtykke afhængigt af værktøjet.",
                "Marketing / Annoncering — bruges kun, hvis du aktiverer dem: kampagneattribution, remarketing, interessebaseret indhold (samtykke påkrævet).",
                "Sikkerheds- / Anti-misbrugscookies — registrerer usædvanlig aktivitet og beskytter websitet og brugerne mod svindel eller automatiserede bots."
            ]
        },
        {
            type: "text",
            title: "4. Typiske cookies (eksempler)",
            bullets: [
                "session_id — Formål: login-session (nødvendig) • Levetid: session",
                "csrf_token — Formål: CSRF-beskyttelse (nødvendig) • Levetid: session",
                "consent_state — Formål: gemmer dit cookiesamtykkevalg (funktionel/nødvendig) • Levetid: 6-12 måneder",
                "qr_prefs — Formål: gemmer dine QR-generatorpræferencer (funktionel) • Levetid: ~6 måneder",
                "perf_metrics — Formål: ydeevneanalyse (analyse) • Levetid: 1-3 måneder",
                "campaign_src — Formål: kampagneattribution (marketing) • Levetid: 1-3 måneder",
                "Bemærk: de præcise cookienavne, levetider og udbydere kan ændre sig — se cookiekontrolpanelet for de seneste oplysninger."
            ]
        },
        {
            type: "text",
            title: "5. Samtykke og retsgrundlag",
            bullets: [
                "Essentielle cookies: strengt nødvendige for tjenesten og bruges uden samtykke.",
                "Ikke-essentielle cookies (funktionelle, analyse, marketing): indstilles kun efter du giver samtykke via vores cookiebanner eller indstillinger, undtagen hvor legitime interesser gælder (f.eks. begrænset analyse).",
                "De retsgrundlag, vi baserer os på, inkluderer: opfyldelse af kontrakt, samtykke og legitime interesser (forebyggelse af svindel, forbedring af tjenesten, forsvar ved tvister)."
            ]
        },
        {
            type: "text",
            title: "6. Hvordan vi registrerer og opbevarer samtykke",
            description: "Når du giver samtykke, registrerer vi beslutningen (afkrydsningstekst/version af politikken), et ISO 8601-tidsstempel, IP-adressen og user-agent-strengen som dokumentation. Samtykke og relaterede optegnelser opbevares i minimum 24 måneder og op til 6 år for virksomheds- eller omtvistede sager, i overensstemmelse med vores privatlivspolitik."
        },
        {
            type: "text",
            title: "7. Tredjeparter og internationale overførsler",
            description: "Vi bruger tredjepartsudbydere (betalingsbehandlere, analyse, hosting, marketingplatforme), der kan sætte cookies. Nogle udbydere kan behandle data uden for UK/EØS; hvor overførsler finder sted, sikrer vi beskyttelsesforanstaltninger (UK-tilstrækkelighed, standardkontraktbestemmelser eller tilsvarende). Se cookiekontrolpanelet for aktuelle udbydere."
        },
        {
            type: "text",
            title: "8. Sådan administrerer eller tilbagekalder du cookiesamtykke",
            bullets: [
                "Brug cookiebanneret / indstillingerne på websitet til at acceptere, afvise eller tilpasse ikke-essentielle cookies.",
                "Du kan tilbagekalde samtykke når som helst via cookieindstillingslinket i footeren.",
                "Du kan også fjerne cookies via browserindstillinger (slet cookies / webstedsdata) eller bruge privat/inkognito-tilstand. Bemærk: sletning af cookies kan forringe funktionaliteten (f.eks. kan du miste gemte QR-skabeloner)."
            ]
        },
        {
            type: "text",
            title: "9. Ændringer af denne politik",
            description: "Vi kan opdatere denne cookiepolitik fra tid til anden (f.eks. når vi tilføjer nye funktioner eller integrationer). Væsentlige ændringer vil blive meddelt ved en fremtrædende meddelelse på websitet eller via e-mail til registrerede brugere. Ikrafttrædelsesdatoen vil blive opdateret."
        },
        {
            type: "text",
            title: "10. Kontakt",
            bullets: [
                `Generelt: ${COMPANY_EMAIL}`,
                `Juridisk: ${COMPANY_LEGAL_NAME}`,
                `Adresse: ${COMPANY_ADDRESS}`,
            ]
        }
    ]
};

export default cookiePolicyDa;

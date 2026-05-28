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
        title: `Privatlivspolitik – ${COMPANY_NAME}`,
        description: `Privatlivspolitik for ${COMPANY_NAME}: hvilke personoplysninger vi indsamler, hvordan vi bruger dem til QR-kode generering, hvor længe vi opbevarer dem, og dine rettigheder.`,
        keywords: [
            "privatlivspolitik",
            "databeskyttelse",
            "gdpr",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "QR-koder",
            "personoplysninger",
            "sikkerhed"
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privatlivspolitik`,
            description: "Gennemsigtig databeskyttelse og privatlivsstandarder.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Introduktion",
            description: `Vi respekterer dit privatliv. Denne privatlivspolitik forklarer, hvilke personoplysninger ${COMPANY_NAME} indsamler, når du bruger vores QR-kode generator, hvorfor vi bruger dem, hvor længe vi opbevarer dem, og hvordan du kan udøve dine rettigheder.`
        },
        {
            type: "text",
            title: "2. Data vi indsamler",
            bullets: [
                "Navn, e-mail og kontooplysninger (hvis du registrerer dig)",
                "Betalingstransaktionsreferencer for premium-funktioner (ikke fulde kortdata)",
                "QR-kode genereringshistorik og gemte projekter (hvis logget ind)",
                "IP-adresse, enhedsoplysninger og adgangslogfiler",
                "Supportanmodninger og korrespondance"
            ]
        },
        {
            type: "text",
            title: "3. Hvorfor vi behandler dine data og retsgrundlag",
            bullets: [
                "For at levere QR-kode generering, tilpasning og relaterede funktioner (opfyldelse af kontrakt)",
                "For at behandle betalinger for premium-tjenester og forebygge svindel (retlig forpligtelse / legitime interesser)",
                "For at besvare supportanmodninger og administrere refusioner (opfyldelse af kontrakt / legitime interesser)",
                "For at sende markedsføringskommunikation, hvis du tilmelder dig (samtykke)"
            ]
        },
        {
            type: "text",
            title: "4. Deling og overførsler",
            description: "Vi deler data med betalingsudbydere, hosting/cloud-platforme, analyse- og supportværktøjer, hvor det er nødvendigt. Nogle databehandlere kan operere uden for UK/EØS; hvor overførsler finder sted, anvender vi beskyttelsesforanstaltninger såsom UK-tilstrækkelighedsafgørelser og standardkontraktbestemmelser (SCC'er)."
        },
        {
            type: "text",
            title: "5. Cookies",
            description: "Vi bruger cookies og lignende teknologier til at holde websitet funktionelt (f.eks. login-sessioner, præferencer) og til at måle ydeevne. For detaljer og samtykkeadministration, se vores cookiepolitik."
        },
        {
            type: "text",
            title: "6. Opbevaring",
            description: "Vi opbevarer konto-, fakturerings- og transaktionsoptegnelser i minimum 24 måneder og op til 6 år ved tvister eller overholdelse. Gemte QR-koder og designhistorik opbevares, så længe din konto er aktiv, medmindre du sletter dem."
        },
        {
            type: "text",
            title: "7. Dine rettigheder",
            description: "Du har rettigheder i henhold til databeskyttelseslovgivningen, herunder adgang, rettelse, sletning, begrænsning, portabilitet, indsigelse og tilbagetrækning af samtykke. For at udøve disse rettigheder, kontakt os på " + COMPANY_EMAIL + ". Vi kan anmode om identifikation til verifikation."
        },
        {
            type: "text",
            title: "8. Sikkerhed",
            description: "Vi anvender rimelige tekniske og organisatoriske foranstaltninger til at beskytte personoplysninger, herunder kryptering under transit, sikker opbevaring, adgangskontroller, logning og regelmæssige sikkerhedskopier."
        },
        {
            type: "text",
            title: "9. Ændringer",
            description: "Vi kan opdatere denne politik, når vi tilføjer nye funktioner, eller når lovkravene ændres. Væsentlige opdateringer vil blive meddelt via e-mail eller en fremtrædende meddelelse på vores hjemmeside."
        },
        {
            type: "text",
            title: "10. Kontakt og klager",
            bullets: [
                `Databeskyttelsesforespørgsler: ${COMPANY_EMAIL}`,
                `Support: ${COMPANY_EMAIL}`,
                "Hvis du er utilfreds, kan du indgive en klage til UK Information Commissioner's Office (ICO) eller din lokale databeskyttelsesmyndighed."
            ]
        },
        {
            type: "text",
            title: "Ikrafttrædelsesdato",
            description: "Denne privatlivspolitik træder i kraft ved offentliggørelse og erstatter alle tidligere versioner."
        },
        {
            type: "text",
            title: "Gyldig fra",
            description: "18. september 2025"
        }
    ]
};

export default privacyPolicySchema;

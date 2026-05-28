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
        title: `Refusionspolitik – ${COMPANY_NAME}`,
        description: `Refusions-/returpolitik for ${COMPANY_NAME}: regler for refusion af intern valuta (Tokens) og digitale produkter.`,
        keywords: [
            "refusionspolitik",
            "refusioner",
            "returneringer",
            COMPANY_NAME?.toLowerCase() || "manuals",
            "manualer",
            "credits",
            "intern valuta"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refusionspolitik`,
            description: "Klare og gennemsigtige refusionsbetingelser.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Resumé",
            bullets: [
                "Refusioner overvejes i overensstemmelse med denne politik og gældende forbrugerlovgivning.",
                "Behandlingstid: Refusioner behandles typisk inden for 5-10 hverdage efter godkendelse.",
                "Refusioner vil ikke overstige det beløb, der oprindeligt blev betalt for credits/transaktionen.",
                "Credits, der allerede er brugt (brugt til at opnå produkter), kan ikke refunderes.",
                "Credits er kontobundne, ikke-overførbare og kan ikke veksles til rigtig valuta.",
                "Promoverings-/bonuscredits kan ikke refunderes under nogen omstændigheder.",
                `Refusionsanmodninger skal sendes til ${COMPANY_EMAIL} med din ordrereference og detaljer.`,
                "Denne politik kan ændres; væsentlige ændringer vil blive meddelt som beskrevet nedenfor.",
                "Hvis du har givet samtykke til øjeblikkelig levering og åbnet/downloadet indhold, kan den lovbestemte fortrydelsesret være mistet — se punkt 5."
            ]
        },
        {
            type: "text",
            title: "2. Omfang og juridisk bemærkning",
            description: `Denne politik regulerer refusioner vedrørende Tokens (interne credits/"credits") og digitale produkter leveret af virksomheden. Den er uden præjudice for ufravigelige lovbestemte forbrugerrettigheder i henhold til britisk lovgivning (herunder, hvor det er relevant, Consumer Contracts Regulations 2013 og Consumer Rights Act 2015). Intet i denne politik fjerner eller begrænser rettigheder, der ikke kan udelukkes ved gældende lovgivning.`
        },
        {
            type: "text",
            title: "3. Definitioner",
            bullets: [
                "Credits / Tokens — intern valuta brugt på tjenesten (vejledende nominel: 1 Token = 0,01 af valgt valuta).",
                "Ubrugte Credits — credits, der forbliver på din konto og ikke er blevet indløst.",
                "Indløste/Brugte Credits — credits, der er blevet brugt til at købe eller få adgang til et produkt.",
                "Promoverings- / Bonuscredits — credits udstedt som del af kampagner, bonusser eller incitamenter."
            ]
        },
        {
            type: "text",
            title: "4. Refusionsprincipper (bindende regler)",
            bullets: [
                "Enhver refusion vil ikke overstige det beløb, der oprindeligt blev betalt for Credits eller Produktet (fratrukket eventuelle ikke-refunderbare behandlingsgebyrer).",
                "Ingen refusion for brugte Credits, undtagen for defekte/ikke-som-beskrevet produkter, mislykket levering, eller som krævet ved lov.",
                "Ubrugte Credits er generelt berettigede til refusion til den oprindelige købspris, hvis det anmodes om inden indløsning (fratrukket eventuelle ikke-refunderbare gebyrer).",
                "Credits er kontobundne og ikke-overførbare.",
                "Credits kan ikke veksles til kontanter eller anden reel valuta, undtagen hvor det kræves ved lov.",
                "Promoverings-/bonuscredits kan ikke refunderes under nogen omstændigheder.",
                "Hvis du giver samtykke til øjeblikkelig levering og åbner/downloader indhold, kan din lovbestemte fortrydelsesret være mistet; refusion derefter kun i henhold til punkt 4.2 eller lovgivning.",
                "Tilpassede/skræddersyede manualer kan ikke refunderes, når væsentligt arbejde er påbegyndt, undtagen efter skriftlig aftale."
            ]
        },
        {
            type: "text",
            title: "5. Sådan anmoder du om refusion",
            description: `For at anmode om refusion, angiv følgende til ${COMPANY_EMAIL} (eller via supportformularen):`,
            bullets: [
                "Ordrereferencenummer (obligatorisk).",
                "Konto-e-mail brugt til købet.",
                "Angiv om anmodningen er for ubrugte Credits eller for et indløst produkt.",
                "For indløste produktkrav: fuld beskrivelse af problemet og understøttende dokumentation.",
                "Foretrukken refusionsmetode (original betalingsmetode foretrukken).",
                "Vi bekræfter inden for 5 hverdage, undersøger og behandler godkendte refusioner inden for 5-10 hverdage efter godkendelse."
            ]
        },
        {
            type: "text",
            title: "6. Undersøgelse, dokumentation og afgørelser",
            bullets: [
                "For indløste produktkrav undersøger vi ordre-/tokenlogfiler, checkout-dokumentation, leveringslogfiler og din indsendte dokumentation.",
                "Refusioner sker normalt til den oprindelige betalingsmetode; alternativer kan tilbydes, hvis det ikke er muligt.",
                "Hvis et krav afvises, giver vi en klar forklaring og dine rettigheder til at eskalere."
            ]
        },
        {
            type: "text",
            title: "7. Tilbageførsler, svindel og misbrug",
            description: "Hvis en tilbageførsel initieres, mens en refusion er under behandling, behandles det som en tvist, og fuld dokumentation gives til betalingsudbyderen. Virksomheden kan nægte refusioner og suspendere/lukke konti i tilfælde af svindel, misbrug eller gentagne uberettigede tilbageførsler."
        },
        {
            type: "text",
            title: "8. Ændringer af denne politik",
            description: "Virksomheden kan ændre denne refusionspolitik til enhver tid. Væsentlige ændringer vil blive meddelt til registrerede brugere via e-mail eller en fremtrædende meddelelse. Ændringer gælder kun fremadrettet."
        },
        {
            type: "text",
            title: "9. Journalføring og opbevaring",
            description: "Vi opbevarer optegnelser, der er nødvendige for at undersøge og begrunde refusionsafgørelser, i minimum 24 måneder og op til 6 år for virksomheds-/omtvistede transaktioner, i overensstemmelse med vores privatlivspolitik og gældende lovgivning."
        },
        {
            type: "text",
            title: "10. Eskalering og tvister",
            description: `Hvis du er uenig i en refusionsafgørelse, eskaler til ${COMPANY_EMAIL} med fulde begrundelser og ordrereference. Vi vil gennemgå inden for 10 hverdage. Denne politik påvirker ikke dine lovbestemte rettigheder.`
        },
        {
            type: "text",
            title: "11. Eksempler",
            bullets: [
                "Ubrugte Credits: Køb 2.000 Tokens til £0,01 = £20; brugt 300 → ubrugte 1.700 → refusion = £17 (fratrukket eventuelle ikke-refunderbare behandlingsgebyrer).",
                "Downloadet manual: Hvis du har givet samtykke til øjeblikkelig levering og downloadet manualen, er refusion kun mulig, hvis manualen er defekt/ikke som beskrevet.",
                "Promoveringscredits: 100 bonuscredits tildelt under kampagne — ikke-refunderbare."
            ]
        },
        {
            type: "text",
            title: "12. Kontaktoplysninger",
            bullets: [
                `E-mail (support): ${COMPANY_EMAIL}`,
                `Post: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}`
            ]
        },
        {
            type: "text",
            title: "Ikrafttrædelsesdato",
            description: "Denne refusionspolitik træder i kraft ved offentliggørelse og erstatter alle tidligere versioner."
        },
        {
            type: "text",
            title: "Gyldig fra",
            description: "18. september 2025"
        }
    ]
};

export default refundPolicySchema;

import type { Metadata } from "next";

import enFaq from "@/pageSchemas/faq/faqPage.en";
import trFaq from "@/pageSchemas/faq/faqPage.tr";
import elFaq from "@/pageSchemas/faq/faqPage.el";
import daFaq from "@/pageSchemas/faq/faqPage.da";
import huFaq from "@/pageSchemas/faq/faqPage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enFaq.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enFaq, tr: trFaq, el: elFaq, da: daFaq, hu: huFaq }} />;
}

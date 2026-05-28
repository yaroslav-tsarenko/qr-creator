import type { Metadata } from "next";

import enGetStarted from "@/pageSchemas/get-started/getStarted.page.en";
import trGetStarted from "@/pageSchemas/get-started/getStarted.tr";
import elGetStarted from "@/pageSchemas/get-started/getStarted.page.el";
import daGetStarted from "@/pageSchemas/get-started/getStarted.page.da";
import huGetStarted from "@/pageSchemas/get-started/getStarted.page.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enGetStarted.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enGetStarted, tr: trGetStarted, el: elGetStarted, da: daGetStarted, hu: huGetStarted }} />;
}

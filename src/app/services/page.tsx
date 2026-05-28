import type { Metadata } from "next";

import enServices from "@/pageSchemas/services/servicesPage.en";
import trServices from "@/pageSchemas/services/servicePage.tr";
import elServices from "@/pageSchemas/services/servicesPage.el";
import daServices from "@/pageSchemas/services/servicesPage.da";
import huServices from "@/pageSchemas/services/servicesPage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enServices.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enServices, tr: trServices, el: elServices, da: daServices, hu: huServices }} />;
}

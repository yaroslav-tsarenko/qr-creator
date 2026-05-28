import type { Metadata } from "next";

import enPricing from "@/pageSchemas/pricing/pricingPage.en";
import trPricing from "@/pageSchemas/pricing/pricingPage.tr";
import elPricing from "@/pageSchemas/pricing/pricingPage.el";
import daPricing from "@/pageSchemas/pricing/pricingPage.da";
import huPricing from "@/pageSchemas/pricing/pricingPage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enPricing.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enPricing, tr: trPricing, el: elPricing, da: daPricing, hu: huPricing }} />;
}

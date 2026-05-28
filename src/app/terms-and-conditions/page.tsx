import type {Metadata} from "next";
import enTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.en";
import trTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.tr";
import elTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.el";
import daTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.da";
import huTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enTerms.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enTerms, tr: trTerms, el: elTerms, da: daTerms, hu: huTerms }} />;
}


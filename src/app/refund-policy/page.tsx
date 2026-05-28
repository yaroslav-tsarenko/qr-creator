import type {Metadata} from "next";
import enRefund from "@/pageSchemas/refund-policy/refundPage.en";
import trRefund from "@/pageSchemas/refund-policy/refundPage.tr";
import elRefund from "@/pageSchemas/refund-policy/refundPage.el";
import daRefund from "@/pageSchemas/refund-policy/refundPage.da";
import huRefund from "@/pageSchemas/refund-policy/refundPage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enRefund.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enRefund, tr: trRefund, el: elRefund, da: daRefund, hu: huRefund }} />;
}


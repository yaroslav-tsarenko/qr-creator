import type { Metadata } from "next";

import enHome from "@/pageSchemas/home/homePage.en";
import trHome from "@/pageSchemas/home/homePage.tr";
import elHome from "@/pageSchemas/home/homePage.el";
import daHome from "@/pageSchemas/home/homePage.da";
import huHome from "@/pageSchemas/home/homePage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enHome.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enHome, tr: trHome, el: elHome, da: daHome, hu: huHome }} />;
}

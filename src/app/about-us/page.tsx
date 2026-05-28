import type { Metadata } from "next";

import enAbout from "@/pageSchemas/about/aboutPage.en";
import trAbout from "@/pageSchemas/about/aboutPage.tr";
import elAbout from "@/pageSchemas/about/aboutPage.el";
import daAbout from "@/pageSchemas/about/aboutPage.da";
import huAbout from "@/pageSchemas/about/aboutPage.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enAbout.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enAbout, tr: trAbout, el: elAbout, da: daAbout, hu: huAbout }} />;
}

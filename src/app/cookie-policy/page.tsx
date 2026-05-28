import type {Metadata} from "next";
import enCookie from "@/pageSchemas/cookie-policy/cookiePolicy.en";
import trCookie from "@/pageSchemas/cookie-policy/cookiePolicy.tr";
import elCookie from "@/pageSchemas/cookie-policy/cookiePolicy.el";
import daCookie from "@/pageSchemas/cookie-policy/cookiePolicy.da";
import huCookie from "@/pageSchemas/cookie-policy/cookiePolicy.hu";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enCookie.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enCookie, tr: trCookie, el: elCookie, da: daCookie, hu: huCookie }} />;
}


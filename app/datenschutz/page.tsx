import { getMarkdownContent } from "../lib/markdown";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("data_policy.headline"),
    description: t("data_policy.desc"),
    robots: "noindex, nofollow",
  };
}

export default async function Datenschutz() {
  const locale = await getLocale();
  const { metadata, contentHtml } = await getMarkdownContent(
    locale,
    "datenschutz",
  );

  return (
    <div className="md_content my-12">
      <h1>{metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

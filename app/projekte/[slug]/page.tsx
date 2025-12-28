import { redirect } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const t = await getTranslations();
  const { slug } = await params;

  return {
    title:
      t("core.full_name") + " | " + t("projects.details." + slug + ".title"),
    description: t("projects.details." + slug + ".description"),
    robots: "index, follow",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const slug = (await params).slug;
    const t = getTranslations();

    const { projectData: ProjectData } = await import(
      `@/content/projects/${slug}.mdx`
    );

    return (
      <>
        <div className="flex justify-center items-center my-10">
          <div className="grid grid-cols-12 items-center justify-center text-center">
            <div className="col-span-12 my-10">
              <div className="text-2xl md:text-4xl font-thin text-center">
                <h1>{ProjectData.project_titel}</h1>
              </div>
            </div>
            <div className="col-span-12 flex justify-center items-center my-3">
              <Image
                src={ProjectData.project_bild}
                alt={ProjectData.project_titel}
                width={1280}
                height={800}
                className="rounded-md"
              />
            </div>

            <div className="col-span-12 my-3 font-thin">
              <p>{(await t)("projects.details." + slug + ".description")}</p>
            </div>
            <div className="col-span-12 my-3 flex justify-end">
              <a
                href={ProjectData.project_url}
                target="_blank"
                className="border rounded p-2 font-thin bg-green-500 hover:bg-green-600"
              >
                {(await t)("projects.demo")}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.warn(error);
    redirect(`/not-found/`); //redirect to 404 page
  }
}

import type { Metadata } from "next";
import path from "path";
import fs from "fs";
import Image from "next/image";
import Btn from "../components/btn";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadataProjects");

  return {
    title: t("title"),
    description: t("description"),
    robots: "index, follow",
  };
}

export default async function Projekte() {
  const t = getTranslations();

  const files = fs.readdirSync(path.join("content/projects/"));
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-12 items-center justify-center text-center">
          <div className="col-span-12">
            <div className="text-2xl md:text-4xl font-thin text-center">
              <h1>{(await t)("projects.headline")}</h1>
            </div>
          </div>
          {files.map(async function (d, index) {
            const { projectData: ProjectMeta } = await import(
              `@/content/projects/${d}`
            );
            const projectSuffix = d.replace('.mdx','');
            return (
              <div
                key={index}
                className="col-span-12 my-10 border p-5 m-5 shadow rounded-md"
              >
                <div className="gird grid-cols-12">
                  <div className="col-span-12 text-2xl md:text-4xl font-thin text-center my-5">
                    <h2>{ProjectMeta.project_titel}</h2>
                  </div>
                  <div className="col-span-12 flex justify-center items-center my-3">
                    <Image
                      src={ProjectMeta.project_bild}
                      alt={ProjectMeta.project_titel}
                      width={400}
                      height={400}
                      className="rounded-md"
                    />
                  </div>
                  <div className="col-span-12 my-5 font-thin">
                    <p>{(await t)("projects.details." + projectSuffix + ".description")}</p>
                  </div>
                  <div className="cols-span-12 text-center mt-5">
                    <Btn
                      className="border rounded p-2 font-thin bg-green-500 hover:bg-green-600"
                      href={ProjectMeta.project_url_intern}
                      title={ProjectMeta.project_titel}
                      text={(await t)("core.more_btn")}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

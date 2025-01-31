import type { Metadata } from "next";
import path from "path";
import fs from "fs";
import Link from 'next/link';
import Image from "next/image";
import Btn from "../components/btn";
export const metadata: Metadata = {
    title: "Projekte | Florian Thönelt",
    description: "Hier findest du eine Übersicht über meine Projekte.",
    robots: "index, follow",
  };
export default async function Projekte() { 
    const files = fs.readdirSync(path.join("content/"));
    return(
        <>
        <div className="flex justify-center items-center my-10">
            <div className="grid grid-cols-12 items-center justify-center text-center">
                <div className="col-span-12">
                    <div className="text-2xl md:text-4xl font-thin text-center">
                        <h1>Projekte</h1>
                    </div>
                </div>
                {files.map(async function(d, index) {
                    const { metadata: ProjektMeta } = await import(`@/content/${d}`);
                    return(
                        <div key={index} className="col-span-12 my-10 border p-5 m-5">
                            <div className="gird grid-cols-12">
                                <div className="col-span-12 text-2xl md:text-4xl font-thin text-center my-5">
                                    <h2>{ProjektMeta.project_titel}</h2>
                                </div>
                                <div className="col-span-12 flex justify-center items-center my-3">
                                    <Image src={ProjektMeta.project_bild} alt={ProjektMeta.project_titel} width={400} height={400} className="rounded-md" />
                                </div>
                                <div className="col-span-12 my-5 font-thin">
                                    <p>{ProjektMeta.project_beschreibung}</p>
                                </div>
                                <div className="cols-span-12 text-center mt-5">
                                    <Btn className="border rounded p-2 font-thin bg-green-500 hover:bg-green-600 text-white" href={d.replace('.mdx','/')} title={ProjektMeta.project_titel} text="Mehr erfahren"/>
                                </div>
                            </div>

                        </div>
                    )
                })} 
            </div>
        </div>
        
        </>
    )

}

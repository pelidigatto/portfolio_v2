
import { redirect } from 'next/navigation';
import Image from "next/image";
export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {



    try {
        const slug = (await params).slug;
        const { default: Post, metadata: Metadata } = await import(`@/content/${slug}.mdx`);

        return <>
    
            <title>{Metadata.title}</title>
            <meta name="description" content={Metadata.description} />

            <div className="flex justify-center items-center my-10">
                <div className="grid grid-cols-12 items-center justify-center text-center">
                    <div className="col-span-12 my-10">
                        <div className="text-2xl md:text-4xl font-thin text-center">
                            <h1>{Metadata.project_titel}</h1>
                        </div>
                    </div>
                    <div className="col-span-12 flex justify-center items-center my-3">
                        <Image src={Metadata.project_bild} alt={Metadata.project_titel} width={1280} height={800} className="rounded-md" />
                    </div>

                    <div className="col-span-12 my-3 font-thin">
                        <p>{Metadata.project_beschreibung}</p>
                    </div>
                    <div className="col-span-12 my-3 font-thin">
                        <Post />
                    </div>
                    <div className='col-span-12 my-3 flex justify-end'>
                        <a href={Metadata.project_url} target="_blank" className="border rounded p-2 font-thin bg-green-500 hover:bg-green-600 text-white">Demo</a>
                    </div>
                </div>
            </div>
        </>
    }   catch (error) {
        console.log(error)
        redirect(`/not-found/`)//redirect to 404 page
    }
    
  }

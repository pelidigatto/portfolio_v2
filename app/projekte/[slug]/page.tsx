
import { redirect } from 'next/navigation';
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
            <Post />
        </>
    }   catch (error) {
        console.log(error)
        redirect(`/not-found/`)//redirect to 404 page
    }
    
  }

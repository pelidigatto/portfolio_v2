import Hero from "@/app/components/Hero/hero";
import AboutMe from "@/app/components/AboutMe/aboutme";
import Timeline from "@/app/components/Timeline/timeline";
import Contact from "@/app/components/Contact/contact";


export default async function Home() {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <Hero />
      </div>
      <div className="flex justify-center items-center my-10">
        <AboutMe />
      </div>

      <div className="flex justify-center items-center my-10">
        <Timeline />
      </div>

      <div className="flex justify-center items-center my-10">
        <Contact />
      </div>
    </>
  );
}

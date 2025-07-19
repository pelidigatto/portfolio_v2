import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-center">
      <div className="col-span-12 my-10">
        <div className="text-2xl md:text-4xl font-thin text-center">
          Moin, ich bin Florian &#x1F44B;!
        </div>
        <div className="text-2xl md:text-4xl font-thin text-center">
          <h1>
            Ein leidenschaftlicher Full-Stack{" "}
            <span className="hightlight">Webentwickler</span> aus Hannover
          </h1>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-3  flex justify-center my-10">
        <div className=" cvPicture shadow">
          <Image
            src="/foto_light.jpg"
            width={400}
            height={400}
            alt="Florian Thönelt"
            title="Florian Thönelt"
          />
        </div>
      </div>
      <div className="col-span-12 xl:col-span-9 my-5 sm:m-12  skill_container border rounded-lg shadow text-center p-6">
        <div className="dotArea">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="text-xl font-thin">
          Mit Leidenschaft für die{" "}
          <span className="hightlight">Webentwicklung</span> erschaffe ich{" "}
          <u>dynamische</u> und <u>benutzerfreundliche</u>{" "}
          <span className="hightlight">Webseiten</span> und{" "}
          <span className="hightlight">Webanwendungen</span> basierend auf
          den <u>neuesten Technologien</u>.
        </div>
      </div>
    </div>
  );
};

export default Hero;
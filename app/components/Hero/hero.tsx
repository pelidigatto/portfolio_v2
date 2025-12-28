import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-12 items-center justify-center">
      <div className="col-span-12 my-10">
        <div className="text-2xl md:text-4xl font-thin text-center">
          {t("hero.headline")} &#x1F44B;!
        </div>
        <div className="text-2xl md:text-4xl font-thin text-center">
          <h1>
            {t.rich("hero.sub", {
              highlight: (chunks) => (
                <span className="hightlight">{chunks}</span>
              ),
            })}
          </h1>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-3  flex justify-center my-10">
        <div className=" cvPicture shadow">
          <Image
            src="/foto_neu.jpg"
            width={400}
            height={400}
            alt={t("core.full_name")}
            title={t("core.full_name")}
            loading={"eager"}
            priority={true}
            fetchPriority={"high"}
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
          {t.rich("hero.dot_box", {
            highlight: (chunks) => <span className="hightlight">{chunks}</span>,
            u: (chunks) => <u>{chunks}</u>,
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

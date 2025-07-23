import SkillBubbles from "@/app/components/SkillBubbles/skillbubbles";
import { useTranslations } from "next-intl";
const skills =
  "HTML,CSS,JavaScript,PHP,Angular,Next.JS,React,Node.JS,Vue.JS,TailwindCSS,ColdFuison,Bootstrap,GIT,SEO,Bash,Shell,Linux,Wordpress,RestAPI,MySQL,C#";

export default function AboutMe() {
  const t = useTranslations();
  return (
    <>
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="col-span-12 my-10">
          <div className="text-2xl md:text-4xl font-thin text-center">
            <h2>{t("about_me.headline")}</h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  p-3 border-0 md:border-e my-1">
          <div className="font-thin text-center">
            <p className="my-3">
              {t.rich("about_me.sub_text1", {
                highlight: (chunks) => <b className="hightlight">{chunks}</b>,
              })}
            </p>
            <p className="my-3">
              {t.rich("about_me.sub_text2", {
                highlight: (chunks) => <b className="hightlight">{chunks}</b>,
              })}
            </p>
            <p className="my-3">
              {t.rich("about_me.sub_text3", {
                highlight: (chunks) => <b className="hightlight">{chunks}</b>,
              })}
            </p>
            <p className="my-3">
              {t.rich("about_me.sub_text4", {
                highlight: (chunks) => <b className="hightlight">{chunks}</b>,
              })}
            </p>
            <p className="my-3">
              {t.rich("about_me.sub_text5", {
                highlight: (chunks) => <b className="hightlight">{chunks}</b>,
              })}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <SkillBubbles skills={skills} />
        </div>
      </div>
    </>
  );
}

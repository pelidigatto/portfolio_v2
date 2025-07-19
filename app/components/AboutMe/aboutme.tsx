import SkillBubbles from "@/app/components/SkillBubbles/skillbubbles";
const skills =
  "HTML,CSS,JavaScript,PHP,Angular,Next.JS,React,Node.JS,Vue.JS,TailwindCSS,ColdFuison,Bootstrap,GIT,SEO,Bash,Shell,Linux,Wordpress,RestAPI,MySQL,C#";

export default function AboutMe() {
  return (
    <>
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="col-span-12 my-10">
          <div className="text-2xl md:text-4xl font-thin text-center">
            <h2>Über mich</h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  p-3 border-0 md:border-e my-1">
          <div className="font-thin text-center">
            <p className="my-3">
              Moin und herzlich willkommen auf meinem Portfolio. Ich bin
              Florian, ein leidenschaftlicher{" "}
              <b className="hightlight ">Fullstack Webdeveloper</b> aus der
              schönen niedersächsischen Landeshauptstadt Hannover.
            </p>
            <p className="my-3">
              Für mich ist Web-Entwicklung viel mehr als nur ein Beruf. Es ist
              meine große <b className="hightlight ">Leidenschaft</b>, für die
              ich gerne viel Zeit in meiner Freizeit investiere, weil es mir
              einfach unglaublich viel Freude bereitet. Es ist ein wunderbares
              Gefühl, sich in seiner Freizeit so intensiv mit etwas
              beschäftigen zu können, das einem so viel gibt.
            </p>
            <p className="my-3">
              Seit meiner Ausbildung zum{" "}
              <b className="hightlight ">
                Fachinformatiker für Anwendungsentwicklung
              </b>{" "}
              im Jahr 2021 konnte ich viele wertvolle Erfahrungen sammeln und
              diese kontenurlich verbessern.
            </p>
            <p className="my-3">
              In der <b className="hightlight ">Backend-Entwicklung</b>{" "}
              arbeite ich am liebsten mit PHP und verschiedenen Frameworks wie
              z.B. Laravell. Aber auch hier bleibe ich immer am Ball und lerne
              gerne Neues dazu, um mein Skillset ständig zu erweitern.
            </p>
            <p className="my-3">
              In der <b className="hightlight ">Frontend-Entwicklung</b> bin
              ich ein großer Fan von React und Next.js. Mit TailwindCSS habe
              ich eine großartige Möglichkeit gefunden, meine Projekte schnell
              und effizient zu gestalten.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <SkillBubbles skills={skills} />
        </div>
      </div>
    </>
  )
}
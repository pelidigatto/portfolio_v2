import Image from "next/image";
import {
  faBriefcase,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillBubbles from "./components/SkillBubbles/skillbubbles";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const skills =
    "HTML,CSS,JavaScript,PHP,Angular,Next.JS,React,Node.JS,Vue.JS,TailwindCSS,ColdFuison,Bootstrap,GIT,SEO,Bash,Shell,Linux,Wordpress,RestAPI,MySQL,C#";
  return (
    <>
      <div className="flex justify-center items-center   my-10">
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
      </div>

      <div className="flex justify-center items-center   my-10">
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
      </div>

      <div className="flex justify-center items-center my-10">
        <div className="container mx-auto w-full h-full">
          <div className="col-span-12 my-10">
            <div className="text-2xl md:text-4xl font-thin text-center">
              <h2>Mein Werdegang</h2>
            </div>
          </div>
          <div className="relative wrap p-2 sm:p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20  h-full border-0 md:border timeline" /* style={{ left: '50%' }} */
            ></div>

            <div className="mb-8 flex justify-start sm:justify-between flex-row sm:flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-0  sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 shadow rounded-full mx-1">
                <span className="w-7">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
              </div>
              <div className="order-1 bg-hightlight rounded-lg shadow w-full  sm:w-5/12 px-6 py-4 relative">
                <div className="absolute -top-4 right-5 border px-3 skill_container rounded-md shadow">
                  <span className="text-sm">Seit 04.2025</span>
                </div>
                <h3 className="mb-3 font-thin text-sm md:text-xl ">
                  Software Developer (Frontend)
                </h3>
                <h4 className="mb-2 font-thin text-md">
                  Hornetsecurity GmbH, Hannover
                </h4>
                <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100"></p>
              </div>
            </div>

            <div className="mb-8 flex justify-start sm:justify-between items-center w-full right-timeline">
              <div className="order-1 w-0  sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 shadow rounded-full mx-1">
                <span className="w-7">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
              </div>
              <div className="order-1 skill_container border rounded-lg shadow w-full  sm:w-5/12 px-6 py-4 relative">
                <div className="absolute -top-4 right-5 border px-3 bg-hightlight rounded-md shadow">
                  <span className="text-sm">2021 - 2025</span>
                </div>
                <h3 className="mb-3 font-thin  text-sm md:text-xl">
                  Webentwickler
                </h3>
                <h4 className="mb-2 font-thin text-md">
                  1A Infosysteme GmbH, Hannover
                </h4>
                <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                  Als Webentwickler bei der 1A-Infosysteme GmbH war ich für die
                  Frontend-Entwicklung unserer Portale (HTML, CSS, JavaScript,
                  ColdFusion) sowie für die Umsetzung individueller
                  Kundenwebseiten zuständig. WordPress verantwortlich. Im
                  Backend habe ich effiziente Außerdem habe ich Importprozesse
                  und REST-API-Schnittstellen in PHP entwickelt.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-start sm:justify-between flex-row sm:flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-0  sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 shadow rounded-full mx-1">
                <span className="w-7">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
              </div>
              <div className="order-1 bg-hightlight rounded-lg shadow w-full  sm:w-5/12 px-6 py-4 relative">
                <div className="absolute -top-4 right-5 border px-3 skill_container  rounded-md shadow">
                  <span className=" text-sm">2018 - 2021</span>
                </div>
                <h3 className="mb-3 font-thin text-sm md:text-xl ">
                  Ausbildung Fachinfinformatiker für Anwendungsentwicklung
                  (FIAE)
                </h3>
                <h4 className="mb-2 font-thin text-md">
                  1A Infosysteme GmbH, Hannover
                </h4>
                <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                  Während meiner Ausbildung zum Fachinformatiker für
                  Anwendungsentwicklung habe ich umfassende Kenntnisse in
                  Software- und Webentwicklung erworben. In meinem
                  Abschlussprojekt habe ich einen Qualifizierungsprozess für
                  Geodaten entwickelt, basierend auf der API-Schnittstelle von
                  OpenStreetMap.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-start sm:justify-between items-center w-full right-timeline">
              <div className="order-1 w-0  sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 shadow rounded-full mx-1">
                <span className="w-7">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
              </div>
              <div className="order-1 skill_container border rounded-lg shadow w-full  sm:w-5/12 px-6 py-4 relative">
                <div className="absolute -top-4 right-5 border px-3 bg-hightlight rounded-md shadow">
                  <span className="text-sm">2012 - 2014</span>
                </div>
                <h3 className="mb-3 font-thin text-sm md:text-xl ">
                  Ausbildung Informationstechnischer Assitent (ITA)
                </h3>
                <h4 className="mb-2 font-thin text-md">
                  b.i.b. International College, Hannover
                </h4>
                <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                  Während meiner Ausbildung zum ITA habe ich fundierte
                  Grundlagen in IT-Systemen, Netzwerktechnik und Programmierung
                  erlernt. Neben technischem Fachwissen lag ein besonderer Fokus
                  auf der Entwicklung und Verwaltung von IT-Lösungen sowie der
                  Unterstützung von Anwendern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center   my-10">
        <div className="grid grid-cols-12 items-center justify-center">
          <div className="col-span-12 my-10">
            <div className="text-2xl md:text-4xl font-thin text-center">
              <h2>Kontakt</h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6  p-3 border-0 md:border-e my-1">
            <div className="font-thin text-center">
              <p className="my-3">
                Wenn Sie Fragen haben oder mit mir zusammenarbeiten möchten,
                können Sie mich gerne per E-Mail kontaktieren.
              </p>
              <p className="my-3">
                Ich freue mich auf Ihre Nachricht und werde mich so schnell wie
                möglich bei Ihnen melden.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6  p-3  my-1">
            <div className="z-20 flex items-center justify-center order-1 mx-1">
              <a
                className="w-16 p-3"
                href="mailto:florian@thoenelt.dev"
                title="E-Mail an Florian Thönelt"
              >
                <FontAwesomeIcon icon={faEnvelope} className="hightlight" />
              </a>
              <a
                className="w-16 p-3"
                href="https://github.com/pelidigatto"
                title="Github Pelidigatto (Florian Thönelt)"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="w-16 p-3"
                href="https://www.linkedin.com/in/florianthoenelt"
                title="LinkedIn Florian Thönelt"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="hightlight" />
              </a>
              <a
                className="w-16 p-3"
                href="https://www.xing.com/profile/Florian_Thoenelt/"
                title="Xing Florian Thönelt"
                target="_blank"
              >
                <FontAwesomeIcon icon={faXing} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  return (
    <>
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

    </>
  )
}
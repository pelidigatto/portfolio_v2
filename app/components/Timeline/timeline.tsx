import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations();
  return (
    <>
      <div className="container mx-auto w-full h-full">
        <div className="col-span-12 my-10">
          <div className="text-2xl md:text-4xl font-thin text-center">
            <h2>{t("timeline.headline")}</h2>
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
                <span className="text-sm">
                  {t("timeline.hornet_1.job_data.date")}
                </span>
              </div>
              <h3 className="mb-3 font-thin text-sm md:text-xl ">
                {t("timeline.hornet_1.job_data.title")}
              </h3>
              <h4 className="mb-2 font-thin text-md">
                {t("timeline.hornet_1.firm")}
              </h4>
              <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                {t("timeline.hornet_1.job_data.desc")}
              </p>
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
                <span className="text-sm">
                  {t("timeline.1a_2.job_data.date")}
                </span>
              </div>
              <h3 className="mb-3 font-thin  text-sm md:text-xl">
                {t("timeline.1a_2.job_data.title")}
              </h3>
              <h4 className="mb-2 font-thin text-md">
                {t("timeline.1a_2.firm")}
              </h4>
              <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                {t("timeline.1a_2.job_data.desc")}
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
              <div className="absolute -top-4 right-5 border px-3 skill_container rounded-md shadow">
                <span className="text-sm">
                  {t("timeline.1a_1.job_data.date")}
                </span>
              </div>
              <h3 className="mb-3 font-thin  text-sm md:text-xl">
                {t("timeline.1a_1.job_data.title")}
              </h3>
              <h4 className="mb-2 font-thin text-md">
                {t("timeline.1a_1.firm")}
              </h4>
              <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                {t("timeline.1a_1.job_data.desc")}
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
                <span className="text-sm">
                  {t("timeline.bib_1.job_data.date")}
                </span>
              </div>
              <h3 className="mb-3 font-thin  text-sm md:text-xl">
                {t("timeline.bib_1.job_data.title")}
              </h3>
              <h4 className="mb-2 font-thin text-md">
                {t("timeline.bib_1.firm")}
              </h4>
              <p className="font-thin text-sm leading-snug tracking-wide text-opacity-100">
                {t("timeline.bib_1.job_data.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

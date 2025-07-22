import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";


export default function Contact() {
  const t = useTranslations();

  return (
    <>
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="col-span-12 my-10">
          <div className="text-2xl md:text-4xl font-thin text-center">
            <h2>{t('contact.headline')}</h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  p-3 border-0 md:border-e my-1">
          <div className="font-thin text-center">
            <p className="my-3">
              {t('contact.line_1')}
            </p>
            <p className="my-3">
              {t('contact.line_2')}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  p-3  my-1">
          <div className="z-20 flex items-center justify-center order-1 mx-1">
            <a
              className="w-16 p-3"
              href="mailto:florian@thoenelt.dev"
              title={t('contact.link_mail')}
            >
              <FontAwesomeIcon icon={faEnvelope} className="hightlight" />
            </a>
            <a
              className="w-16 p-3"
              href="https://github.com/pelidigatto"
              title={t('contact.link_github')}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="w-16 p-3"
              href="https://www.linkedin.com/in/florianthoenelt"
              title={t('contact.link_linkedin')}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hightlight" />
            </a>
            <a
              className="w-16 p-3"
              href="https://www.xing.com/profile/Florian_Thoenelt/"
              title={t('contact.link_xing')}
              target="_blank"
            >
              <FontAwesomeIcon icon={faXing} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

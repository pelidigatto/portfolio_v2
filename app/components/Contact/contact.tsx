import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
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
    </>
  );
}

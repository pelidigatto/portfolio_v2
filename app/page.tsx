import Image from "next/image";

export default function Home() {
  return (
      <>
        <div className="flex justify-center items-center  border-b-2 my-10">
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="col-span-12 my-10">
              <div className="text-2xl md:text-4xl font-thin text-center">
                Moin, ich bin Florian &#x1F44B;! 
              </div>
              <div className="text-2xl md:text-4xl font-thin text-center">
                <h1>Ein leidenschaftlicher Full-Stack <span className="hightlight">Webentwickler</span> aus Hannover</h1>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-3  flex justify-center my-10">
              <div className=" cvPicture shadow">
                <Image src="/foto_light.jpg" width={400} height={400} alt="Florian Thönelt" title="Florian Thönelt" />
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9 my-5 sm:m-12  bg-slate-100 rounded-lg shadow text-center p-6">
              <div className="dotArea"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
              <div className="text-xl md:text-2xl lg:text-3xl font-thin">
                Mit Leidenschaft für die <span className="hightlight">Webentwicklung</span> erschaffe ich <u>dynamische</u> und <u>benutzerfreundliche</u> <span className="hightlight">Webseiten</span> und <span className="hightlight">Webanwendungen</span> basierend auf den <u>neuesten Technologien</u>.
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center  border-b-2 my-10">
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="col-span-12 my-10">
              <div className="text-2xl md:text-4xl font-thin text-center">
                <h2>Über mich</h2>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="font-thin text-center">
                <p className="my-3">
                  Moin und herzlich willkommen auf meinem Portfolio.
                  Ich bin Florian, ein leidenschaftlicher <b className="hightlight font-bold">Fullstack Webdeveloper</b> aus der schönen niedersächsischen Landeshauptstadt Hannover.
                </p>
                <p className="my-3">
                  Für mich ist Web-Entwicklung viel mehr als nur ein Beruf. Es ist meine große <b className="hightlight font-bold">Leidenschaft</b>, für die ich gerne viel Zeit in meiner Freizeit investiere, weil es mir einfach unglaublich viel Freude bereitet. 
                  Es ist ein wunderbares Gefühl, sich in seiner Freizeit so intensiv mit etwas beschäftigen zu können, das einem so viel gibt.
                </p>
                <p className="my-3">
                  Seit meiner Ausbildung zum <b className="hightlight font-bold">Fachinformatiker für Anwendungsentwicklung</b> im Jahr 2021 konnte ich viele wertvolle Erfahrungen sammeln und diese kontenurlich verbessern.
                </p>
                <p className="my-3"> 
                  In der <b className="hightlight font-bold">Backend-Entwicklung</b> arbeite ich am liebsten mit PHP und verschiedenen Frameworks wie z.B. Laravell.
                  Aber auch hier bleibe ich immer am Ball und lerne gerne Neues dazu, um mein Skillset ständig zu erweitern.
                </p>
                <p className="my-3">
                  In der <b className="hightlight font-bold">Frontend-Entwicklung</b> bin ich ein großer Fan von React und Next.js. 
                  Mit TailwindCSS habe ich eine großartige Möglichkeit gefunden, meine Projekte schnell und effizient zu gestalten.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div className="flex flex-row justify-center flex-wrap">
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">HTML</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">CSS</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">JavaScript</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">PHP</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Next.JS</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">React</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Node.JS</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Vue.JS</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">TailwindCSS</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">ColdFuison</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Bootstrap</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">GIT</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">SEO</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Bash</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Shell</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Linux</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">Wordpress</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">RestAPI</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">MySQL</div>
                <div className="m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">C#</div>

              </div>
            </div>
          </div>
        </div>


    </>
  );
}

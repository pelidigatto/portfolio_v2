import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Impressum | thoenelt.dev",
  description: "Impressum von thoenelt.dev",
  robots: "noindex, nofollow",
};
export default function Impressum() {
  return (
    <div className="my-12">
      <h1 className="hightlight underline">Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Florian Thönelt <br />
        Lutherstr. 71 <br />
        30171 Hannover <br />
      </p>
      <h2 className="hightlight underline">Kontakt:</h2>
      <p>
        <b>E-Mail: </b>{" "}
        <a href="mailto:florian@thoenelt.dev">florian@thoenelt.dev</a>
      </p>
    </div>
  );
}

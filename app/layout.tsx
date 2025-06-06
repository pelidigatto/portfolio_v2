import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/header";

export const metadata: Metadata = {
  title: "Florian Thönelt | Full-Stack Webentwickler",
  description:
    "Florian Thönelt | Leidenschaftlicher Front-End und Back-End Webentwickler aus Hannover",
  robots: "index, follow",
  authors: [{ name: "Florian Thönelt" }],
  keywords: [
    "Webentwicklung",
    "Webdesign",
    "Full-Stack",
    "Hannover",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Express",
    "MySQL",
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
    <head>
      <title>Florian Thönelt | Dev</title>
      <script
          async
          type="text/javascript"
          src="//cdn.cookie-script.com/s/102ae36c00073d80e7b5b6dd4575b25b.js"
      ></script>
      <script defer data-domain="thoenelt.dev" src="https://plausible.thnlt.de/js/script.js"></script>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </head>
    <body className={`antialiased`}>
    <Header/>
    <div className="relative mx-auto lg:max-w-7xl px-2 py-1">
      {children}
    </div>
    </body>
    </html>
  );
}

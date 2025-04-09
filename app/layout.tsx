import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/header";

import Script from 'next/script';

export const metadata: Metadata = {
  title: "Florian Thönelt | Full-Stack Webentwickler",
  description: "Florian Thönelt | Leidenschaftlicher Front-End und Back-End Webentwickler aus Hannover",
  robots: "index, follow",
  authors: [{ name: "Florian Thönelt" }],
  keywords: ["Webentwicklung", "Webdesign", "Full-Stack", "Hannover", "React", "Next.js", "TailwindCSS", "Node.js", "Express", "MySQL","PHP","JavaScript","HTML","CSS"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self'; img-src 'self'; connect-src 'self';" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        
        
      </head>
      <body
        className={` antialiased`}
      >
        <Header />
        <div className="relative mx-auto lg:max-w-7xl px-2 py-1">
          {children}
        </div>

      </body>
    </html>
  );
}

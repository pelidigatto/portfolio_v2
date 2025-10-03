import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Header from "./components/Header/header";
import { headers } from 'next/headers'
import React from "react";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const serverInfo = (await headers()).get('x-server-info');
  const serverData = serverInfo ? JSON.parse(serverInfo) : {};
  const isDev = process.env.NODE_ENV === "development";
  const isTest = serverData.domain.test_sub !== null;
  const isProd =  !isDev && !isTest;
  const domainList = ['thoenelt.dev','florianthoenelt.de'];
  const isValidDomain = domainList.includes(serverData.hostname);
  const showScripts = !isDev && !isTest && isValidDomain;

  return (
    <>
    <html lang={locale}>
      <head>
        <title>Florian Thönelt | Dev</title>
        {
          showScripts &&
          <script
            async
            type="text/javascript"
            src="//cdn.cookie-script.com/s/102ae36c00073d80e7b5b6dd4575b25b.js"
          ></script>
        }
        {
          showScripts &&
          <script
            defer
            data-domain={serverData.hostname}
            src="https://plausible.thnlt.de/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
          ></script>
        }
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {
          showScripts &&
          <link
            rel="manifest"
            href={`/${serverData.hostname}.webmanifest`}
          />
        }
      </head>
      <NextIntlClientProvider>
        <body className={`antialiased`}>
          {
            serverData.debugActive &&
            <div className='bg-red-500'>
              <h2>Debug Menu:</h2>
                <pre>
                  {JSON.stringify(serverData, null, 2)}
                </pre>
                <br/>showScripts: {showScripts? 'true' : 'false'}
                <br/>isDev: {isDev? 'true' : 'false'}
                <br/>isTest: {isTest? 'true' : 'false'}
                <br/>isProd: {isProd? 'true' : 'false'}
                <br/>isValidDomain: {isValidDomain? 'true' : 'false'} ({serverData.hostname})
               <br/>domainList: {JSON.stringify(domainList)}
            </div>
          }
          <Header />
          <div className="relative mx-auto lg:max-w-7xl px-2 py-1">
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
    </>
  );
}

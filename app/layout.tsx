import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/header";



export const metadata: Metadata = {
  title: "Florian Thönelt | Full-Stack Webentwickler",
  description: "Florian Thönelt | Full-Stack Webentwickler aus Hannover",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

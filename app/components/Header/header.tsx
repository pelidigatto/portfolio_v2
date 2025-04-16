"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const verzeichnis = usePathname();

  const link_highlight = "text-green-500";
  const link = "text-gray-700 hover:text-green-500";
  return (
    <header className="backdrop-blur mx-5 rounded-md shadow sticky top-4 z-50">
      {/* <span>PN: {verzeichnis}</span> */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link className="text-xl font-extralight ml-2 flex" href="/">
            thoenelt<span className="hightlight">.dev </span>{" "}
            <div className="hidden sm:block ps-1">
              {" "}
              | Full-Stack <span className="hightlight">Webentwickler</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {verzeichnis.includes("/projekte/") ? (
            <Link href="/projekte/" className={link_highlight}>
              Projekte
            </Link>
          ) : (
            <Link href="/projekte/" className={link}>
              Projekte
            </Link>
          )}
          {verzeichnis.includes("/impressum/") ? (
            <Link href="/impressum/" className={link_highlight}>
              Impressum
            </Link>
          ) : (
            <Link href="/impressum/" className={link}>
              Impressum
            </Link>
          )}
          {verzeichnis.includes("/datenschutz/") ? (
            <Link href="/datenschutz/" className={link_highlight}>
              Datenschutz
            </Link>
          ) : (
            <Link href="/datenschutz/" className={link}>
              Datenschutz
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="grid p-5 border-t-2 md:hidden">
          {verzeichnis.includes("/projekte/") ? (
            <Link href="/projekte/" className={link_highlight}>
              Projekte
            </Link>
          ) : (
            <Link href="/projekte/" className={link}>
              Projekte
            </Link>
          )}
          {verzeichnis.includes("/impressum/") ? (
            <Link href="/impressum/" className={link_highlight}>
              Impressum
            </Link>
          ) : (
            <Link href="/impressum/" className={link}>
              Impressum
            </Link>
          )}
          {verzeichnis.includes("/datenschutz/") ? (
            <Link href="/datenschutz/" className={link_highlight}>
              Datenschutz
            </Link>
          ) : (
            <Link href="/datenschutz/" className={link}>
              Datenschutz
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

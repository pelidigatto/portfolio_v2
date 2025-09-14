"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/app/components/Header/Navigation/navigation";
import LocaleToggleButton from "@/app/components/LangToogle/langtoogle";
import ThemeToggleButton from "@/app/components/ThemeToogle/themeToogle";

import { useTranslations } from "next-intl";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <header className="backdrop-blur mx-5 rounded-md shadow sticky top-4 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link className="text-xl font-extralight ml-2 flex" href="/">
            {t("header.domain.name")}
            <span className="hightlight">{t("header.domain.tld")}</span>
            <div className="hidden sm:block ps-1">
              | {t("header.job_title.main")}{" "}
              <span className="hightlight">{t("header.job_title.sub")}</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Navigation />
          <div className={"toggle-menu flex items-center justify-center"}>
            <LocaleToggleButton />
          </div>
          <div className={"toggle-menu flex items-center justify-center"}>
            <ThemeToggleButton />
          </div>
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
        <div className="grid p-5  md:hidden">
          <Navigation />
          <LocaleToggleButton />
          <ThemeToggleButton />
        </div>
      )}
    </header>
  );
}

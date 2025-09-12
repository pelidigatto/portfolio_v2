"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import {useSessionStorage} from "@/app/hooks/useSessionStorage";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocaleToggleButton() {
  const router = useRouter();
  const [lang, setLang] = useSessionStorage<string>("selected-language", "de");
  const languages = ["de", "en"];

  function toggleLocale() {
    const nextLang = (() => {
      const currentIndex = languages.indexOf(lang);
      return languages[(currentIndex + 1) % languages.length];
    })();
    setLang(nextLang);
    setCookie("locale", nextLang, { path: "/" });
    router.refresh();
  }

  return (
    <button onClick={toggleLocale} className="p-2 border rounded">
      <span
        className={`fi fi-${lang === "en" ? "gb" : lang}`}
        title={lang.toUpperCase()}
      ></span>
    </button>
  );
}
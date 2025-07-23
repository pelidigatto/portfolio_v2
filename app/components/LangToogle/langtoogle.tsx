"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LocaleToggleButton() {
  const [locale, setLocale] = useState<"de" | "en">("de");
  const router = useRouter();

  useEffect(() => {
    const match = document.cookie.match(/locale=(\w{2})/);
    if (match && (match[1] === "de" || match[1] === "en")) {
      setLocale(match[1] as "de" | "en");
    }
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "de" ? "en" : "de";
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <button onClick={toggleLocale}>
      {locale === "de" ? (
        <span className="fi fi-de"></span>
      ) : (
        <span className="fi fi-gb"></span>
      )}
    </button>
  );
}

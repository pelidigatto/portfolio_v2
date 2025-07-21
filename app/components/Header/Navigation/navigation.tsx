import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface NavItemProps {
  path: string;
  pathName: string;
  hide: boolean;
}

export default function Navigation() {
  const t = useTranslations();

  const navigation: NavItemProps[] = [
    {
      path: "/",
      pathName: t("header.navigation.home"),
      hide: true,
    },
    {
      path: "/projekte/",
      pathName: t("header.navigation.projects"),
      hide: false,
    },
    {
      path: "/impressum/",
      pathName: t("header.navigation.impress"),
      hide: false,
    },
    {
      path: "/datenschutz/",
      pathName: t("header.navigation.data_protection"),
      hide: false,
    },
  ];

  const verzeichnis = usePathname();

  const link_highlight = "font-extralight text-green-500";
  const link = "font-extralight hover:text-green-500";

  return (
    <>
      {navigation.map((item) => {
        if (item.hide) return null;

        return (
          <Link
            key={item.path}
            href={item.path}
            className={verzeichnis.includes(item.path) ? link_highlight : link}
          >
            {item.pathName}
          </Link>
        );
      })}
    </>
  );
}

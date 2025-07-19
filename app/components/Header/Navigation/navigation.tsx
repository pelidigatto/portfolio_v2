import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  path: string;
  pathName: string;
  hide: boolean;
}

export default function Navigation() {
  const navigation: NavItemProps[] = [
    {
      path: "/",
      pathName: "Home",
      hide: true,
    },
    {
      path: "/projekte/",
      pathName: "Projekte",
      hide: false,
    },
    {
      path: "/impressum/",
      pathName: "Impressum",
      hide: false,
    },
    {
      path: "/datenschutz/",
      pathName: "Datenschutz",
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

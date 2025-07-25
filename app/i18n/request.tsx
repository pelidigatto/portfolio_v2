import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const fallbackLocale = "de";
  const cookieStore = await cookies();

  const cookieLocale = cookieStore.get("locale")?.value;

  const locale = cookieLocale || fallbackLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

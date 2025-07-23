import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const fallbackLocale = "de";
  const cookieStore = cookies();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const cookieLocale = cookieStore.get("locale")?.value;

  const locale = cookieLocale || fallbackLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

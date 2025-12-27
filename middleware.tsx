import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || "unknown-host";

  function parseHostname(hostname: string) {
    const parts = hostname.split(".");

    const tld = parts.pop() || "";
    const domain_name = parts.pop() || "";

    let [test_sub, sub_domain] = parts;

    if (test_sub && !sub_domain) {
      sub_domain = test_sub;
      test_sub = "";
    }

    return {
      test_sub: test_sub || null,
      sub_domain: sub_domain || null,
      domain_name,
      tld,
    };
  }

  function parseSearchQuery(query: string) {
    const params = new URLSearchParams(query);
    return Object.fromEntries(params.entries());
  }

  function isDebugActive(obj: Record<string, string>): boolean {
    return obj.debug === "true";
  }

  const serverInfo = {
    domain: parseHostname(host),
    hostname_local: url.hostname,
    hostname: host,
    pathname: url.pathname,
    protocol: url.protocol,
    searchString: url.search,
    urlParams: parseSearchQuery(url.search),
    port: url.port,
    basePath: url.basePath,
    buildId: url.buildId,
    defaultLocale: url.defaultLocale,
    locale: url.locale,
    href: url.href,
    origin: url.origin,
    debugActive: isDebugActive(parseSearchQuery(url.search)),
  };

  const res = NextResponse.next();
  res.headers.set("x-server-info", JSON.stringify(serverInfo));
  return res;
}

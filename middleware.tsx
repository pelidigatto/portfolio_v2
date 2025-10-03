import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get('host') || 'unknown-host'

  function parseHostname(hostname: string) {
    const parts = hostname.split(".")

    const tld = parts.pop() || ""
    const domain_name = parts.pop() || ""

    const [test_sub, sub_domain] = parts

    return {
      test_sub: test_sub || null,
      sub_domain: sub_domain || null,
      domain_name,
      tld,
    }
  }


  const serverInfo = {
    domain: parseHostname(host),
    hostname_local: url.hostname,
    hostname: host,
    pathname: url.pathname,
    protocol: url.protocol,
    search: url.search,
    port: url.port,
    basePath: url.basePath,
    buildId: url.buildId,
    defaultLocale: url.defaultLocale,
    locale: url.locale,
    href: url.href,
    origin: url.origin
  }

  const res = NextResponse.next()
  res.headers.set('x-server-info', JSON.stringify(serverInfo))
  return res
}

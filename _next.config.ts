import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*", // Erfasst alle Pfade
        has: [
          {
            type: "host",
            value: "www.:domain", // Prüft auf www vor der Domain
          },
        ],
        destination: "https://:domain/:path*", // Weiterleitung zur Basis-URL
        permanent: true, // Permanente Weiterleitung (301)
      },
    ];
  },
};

export default nextConfig;

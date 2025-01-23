import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  trailingSlash: true, // Beibehaltung der aktuellen Einstellung

  // Hinzufügen der Redirects
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.:domain', // Prüft auf www-Domain
          },
        ],
        destination: 'https://:domain/:path*', // Basis-URL ohne www
        permanent: true, // Permanente Weiterleitung (301)
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

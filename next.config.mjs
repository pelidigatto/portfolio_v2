import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  /* async redirects() {
    return [
      
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.:domain', // Universelle Weiterleitung
          },
        ],
        destination: 'https://:domain/:path*',
        permanent: true,
      },
    ];
  }, */
};

const withMDX = createMDX();

export default withMDX(nextConfig);

import createMDX from "@next/mdx";
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  reactStrictMode: true,
};

const withMDX = createMDX();

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  swSrc: 'public/sw.js'
})(withMDX(baseConfig));

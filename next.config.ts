import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["placehold.co"],
    dangerouslyAllowSVG: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
    },
  },
};

export default nextConfig;

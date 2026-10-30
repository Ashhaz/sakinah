import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sakinah",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
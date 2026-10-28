import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui", "@repo/map"],
  output: 'standalone',
 };

export default nextConfig;

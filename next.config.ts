import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import createMDX from "@next/mdx";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow .mdx files to be treated as pages/modules.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Prevent Next from using the wrong workspace root (extra lockfile in home folder).
  outputFileTracingRoot: root,
};

const withMDX = createMDX();

export default withMDX(nextConfig);

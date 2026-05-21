import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Prevent Next from using the wrong workspace root (extra lockfile in home folder).
  outputFileTracingRoot: root,
};

export default nextConfig;

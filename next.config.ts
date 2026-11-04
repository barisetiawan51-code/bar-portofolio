import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.26.208.1",
    "localhost",
    "*.test", // wildcard untuk domain virtual host Laragon
  ],
};

export default nextConfig;
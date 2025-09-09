// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://*.sanity.io" },
        ],
      },
    ];
  },
};

export default nextConfig;

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true, }
  }
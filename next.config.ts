import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/reflection",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

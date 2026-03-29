import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kremanska.rs",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

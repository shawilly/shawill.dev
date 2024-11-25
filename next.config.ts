import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/80/60/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/1024/768/**",
      },
      {
        protocol: "https",
        hostname: "l8tfvnumq8v5yvyq.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

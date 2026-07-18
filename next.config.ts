import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  allowedDevOrigins: ['10.38.221.211'],
};

export default nextConfig;
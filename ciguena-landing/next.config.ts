import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, // Requerido para exportación estática en plan gratuito de Vercel
  },
};

export default nextConfig;

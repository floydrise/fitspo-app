import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-exercisedb.vercel.app',
        port: '',
        pathname: '/api/v1/images/*',
        search: '',
      },
    ]
  }
};

export default nextConfig;
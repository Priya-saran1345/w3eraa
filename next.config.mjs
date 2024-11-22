/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['www.w3era.com']
  },
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
};

export default nextConfig;

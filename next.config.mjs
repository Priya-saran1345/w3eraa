/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['w3era.vefogix.com'],
  },
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
};

export default nextConfig;

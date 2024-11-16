/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
  trailingSlash:true,
  reactStrictMode: false,

    images: {
        domains: ['w3era.vefogix.com'],
      },
};

export default nextConfig;




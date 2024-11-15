/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
  trailingSlash:true,
    images: {
        domains: ['w3era.vefogix.com'],
      },
};

export default nextConfig;




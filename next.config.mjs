/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['www.w3era.com'],
  },
  experimental: {
    amp: {
      skipValidation: true,
    },
  },
  rewrites: async () => {
    return [
      {
        source: '/sitemap.xml',
        destination: `https://www.w3era.com/api/sitemap.xml`, // Replace with your API base URL
      },
    ];
  },
};

export default nextConfig;

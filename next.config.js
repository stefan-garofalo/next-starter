/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: `/${process.env.PRISMIC_ENVIRONMENT}/**`,
      },
    ],
  },
};

module.exports = nextConfig;

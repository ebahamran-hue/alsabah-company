/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ar/terms",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
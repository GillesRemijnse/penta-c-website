/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/team/persoon-1",
        destination: "/team/jacob-remijnse",
        permanent: true,
      },
      {
        source: "/team/persoon-2",
        destination: "/team/dennis-smith",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

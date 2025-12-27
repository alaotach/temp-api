/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Return the modified config
    return config;
  },
};

export default nextConfig;

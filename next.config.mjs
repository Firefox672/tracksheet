/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/tracksheet' : '',
  assetPrefix: isProd ? '/tracksheet/' : '',
}

export default nextConfig

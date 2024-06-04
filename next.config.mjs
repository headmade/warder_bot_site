/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/warder_bot_site/' : '',
  basePath: isProd ? '/warder_bot_site' : '',
};

export default nextConfig;
  
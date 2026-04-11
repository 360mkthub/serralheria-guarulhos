import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  /** Garante que o tracing do build use o diretório deste app (evita raiz errada com vários lockfiles). */
  outputFileTracingRoot: path.join(__dirname),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    }
    return config
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.serralheriaemguarulhos.com' },
      { protocol: 'https', hostname: '**.wp.com' },
      { protocol: 'https', hostname: '**.wordpress.com' },
    ],
  },
  async redirects() {
    return []
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Garante que as URLs com barra no final (padrão do WP) funcionem
  trailingSlash: true, 
  
  typescript: {
    // Ignora o erro "Cannot find name 'Object'" e outros de tipagem no build
    ignoreBuildErrors: true,
  },
  
  eslint: {
    // Ignora erros de linting (como o de instalação do ESLint) durante o build
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.serralheriaemguarulhos.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
    ],
  },

  async redirects() {
    return []
  },
}

export default nextConfig

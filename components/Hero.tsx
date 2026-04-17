import Image from 'next/image'
import { ChevronDown, Phone } from 'lucide-react'
import { HERO_ABOUT_IMAGE_SRC } from '@/lib/site-images'

const Hero = () => {
  const stats = [
    { value: 'Guarulhos', label: 'e Região' },
    { value: 'Foco', label: 'em Qualidade' },
    { value: 'Orçamento', label: 'Grátis' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image - Otimizada para Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_ABOUT_IMAGE_SRC}
          alt="Serralheria em Guarulhos - Trabalho com metal sob medida"
          fill
          className="object-cover"
          priority // Garante carregamento imediato (LCP)
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">
              SERRALHERIA EM GUARULHOS
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Serralheria em Guarulhos:{' '}
              <span className="text-yellow-400">soluções em metal</span> com qualidade e garantia
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Procurando por <strong>serralheria em Guarulhos</strong> que ofereça qualidade, durabilidade e preço justo? Você encontrou! Somos especialistas em fabricação e instalação de estruturas metálicas atendendo toda a cidade de Guarulhos e região.
            </p>
            
            <p className="text-base text-gray-300 mb-8">
              Nossa equipe de serralheiros qualificados está preparada para atender desde pequenos reparos até grandes projetos industriais. Trabalhamos com <strong>portões automáticos, grades de proteção, coberturas metálicas, mezaninos, escadas e corrimãos</strong> – tudo sob medida para suas necessidades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all text-base"
              >
                <Phone size={20} className="mr-2" />
                SOLICITAR ORÇAMENTO GRÁTIS
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                VER SERVIÇOS
              </a>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-yellow-400 text-xl">⚡</span>
              <span className="text-sm font-medium">Atendimento rápido em todos os bairros de Guarulhos</span>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/10"
                >
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden mt-12 grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white border border-white/10"
            >
              <div className="text-lg font-bold text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-xs opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-wider">ROLAR</span>
          <ChevronDown size={24} />
        </div>
      </a>
    </section>
  )
}

export default Hero

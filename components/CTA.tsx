import Image from 'next/image'
import { Phone, Clock, CheckCircle, Star } from 'lucide-react'

const CTA = () => {
  const benefits = [
    { icon: Clock, text: 'Orçamento em 24h' },
    { icon: CheckCircle, text: 'Sem compromisso' },
    { icon: Star, text: 'Atendimento personalizado' },
  ]

  return (
    <section id="contato" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Otimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/serralheria-guarulhos.jpeg"
          alt="Serralheria em Guarulhos - Atendimento imediato"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-800/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">
              ATENDIMENTO IMEDIATO
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Solicite seu <span className="text-yellow-400">Orçamento Grátis</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Receba sua cotação em até <strong>24 horas</strong>. Atendimento rápido e sem compromisso em toda Guarulhos e região!
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                  <benefit.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Peça seu Orçamento Agora
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Clique no botão abaixo e fale diretamente conosco pelo WhatsApp para um atendimento prioritário.
            </p>
            
            <a
              href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              <Phone size={24} />
              SOLICITAR ORÇAMENTO
            </a>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Atendimento online agora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

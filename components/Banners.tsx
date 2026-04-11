import Link from 'next/link'
import { Phone, MapPin, Shield, Wrench, Clock, Star } from 'lucide-react'

export const BannerTop = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Wrench className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-100">Serralheria em Guarulhos</p>
              <p className="text-lg font-bold">{'Portoes \u2022 Grades \u2022 Estruturas Metalicas'}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span>Garantia em Todos os Servicos</span>
            </div>
          </div>
          <Link
            href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Solicitar Orcamento Gratis
          </Link>
        </div>
      </div>
    </div>
  )
}

export const BannerMiddle = () => {
  return (
    <div className="my-8 bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">
              Atendemos Todos os Bairros de Guarulhos
            </p>
            <p className="text-sm text-gray-600">
              {'Vila Galvao \u2022 Macedo \u2022 Cumbica \u2022 Jardim Maia \u2022 Centro e mais'}
            </p>
          </div>
        </div>
        <Link
          href="/localidades"
          className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Ver Localidades
        </Link>
      </div>
    </div>
  )
}

export const BannerBottom = () => {
  return (
    <div className="mt-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-gray-900" />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Precisa de Serralheria em Guarulhos?
        </h3>
        <p className="text-blue-100 mb-6 text-lg">
          Orcamento gratis em ate 24h. Atendimento rapido em todos os bairros com garantia total.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <Link
            href="/servicos/portoes-automaticos"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
          >
            Conhecer Servicos
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4" /> Garantia de 5 Anos
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Orcamento em 24h
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" /> 15 Anos de Experiencia
          </span>
        </div>
      </div>
    </div>
  )
}

// 🚀 ESSA É A PARTE QUE FALTAVA PARA O BLOG FUNCIONAR:
// Criamos um objeto principal que contém todos os banners
const Banners = {
  Top: BannerTop,
  Middle: BannerMiddle,
  Bottom: BannerBottom,
}

export default Banners

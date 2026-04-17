import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const Locations = () => {
  const bairros = [
    { nome: 'Vila Cocaia', slug: 'vila-cocaia' },
    { nome: 'Jardim das Oliveiras', slug: 'jardim-das-oliveiras' },
    { nome: 'Parque Cecap', slug: 'parque-cecap' },
    { nome: 'Vila Endres', slug: 'vila-endres' },
    { nome: 'Jardim Cumbica', slug: 'jardim-cumbica' },
    { nome: 'Vila Barros', slug: 'vila-barros' },
    { nome: 'Vila Galvão', slug: 'vila-galvao' },
    { nome: 'Jardim Maia', slug: 'jardim-maia' },
    { nome: 'Vila Rio de Janeiro', slug: 'vila-rio-de-janeiro' },
    { nome: 'Macedo', slug: 'macedo' },
    { nome: 'Vila Augusta', slug: 'vila-augusta' },
    { nome: 'Centro', slug: 'centro' },
  ]

  return (
    <section id="localidades" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-4">
            <MapPin size={16} className="inline mr-1" />
            ATENDIMENTO EM TODA REGIÃO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Atendemos a <span className="text-yellow-400">Todos os Bairros de Guarulhos</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Nossa serralheria atende em todos os bairros de Guarulhos e região metropolitana. 
            Onde você estiver, levamos qualidade e garantia até você.
          </p>
        </div>

        {/* Bairros Grid */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Bairros de Guarulhos que Atendemos
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {bairros.map((bairro) => (
              <Link
                key={bairro.slug}
                href={`/localidades/${bairro.slug}`}
                className="group flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-yellow-400 
                           text-white hover:text-gray-900 rounded-lg transition-all duration-300 
                           text-sm font-medium text-center"
              >
                <MapPin size={14} className="mr-2 opacity-60 group-hover:opacity-100" />
                {bairro.nome}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/localidades"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 
                       font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 
                       shadow-lg hover:shadow-xl group"
          >
            Ver Todas as Localidades Atendidas
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-gray-900" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Cobertura Total</h4>
            <p className="text-blue-100 text-sm">Atendemos todos os bairros de Guarulhos sem exceção</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Atendimento Rápido</h4>
            <p className="text-blue-100 text-sm">Chegamos até você em tempo recorde em toda a cidade</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-900">✓</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Garantia Local</h4>
            <p className="text-blue-100 text-sm">Serviço com garantia em qualquer bairro de Guarulhos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations

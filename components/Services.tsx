'use client'

import Link from 'next/link'

const Services = () => {
  const services = [
    {
      id: 'portoes',
      title: 'Portões Automáticos e Manuais',
      description: 'A fabricação de portões em Guarulhos é um dos nossos carros-chefes. Produzimos portão automático deslizante, basculante, pivotante e manual de ferro. Trabalhamos com as melhores marcas: PPA, Garen e Peccinin.',
      types: ['Deslizante', 'Basculante', 'Pivotante', 'Social'],
      image: '/images/portao-automatico-serralheria-guarulhos.jpeg',
      link: '/servicos/portoes-automaticos',
    },
    {
      id: 'grades',
      title: 'Grades de Proteção e Segurança',
      description: 'As grades de proteção em Guarulhos são essenciais para a segurança da sua família e patrimônio. Fabricamos grades para janela, porta, galvanizadas, de ferro, alumínio e aço inox.',
      types: ['Janela', 'Porta', 'Galvanizada', 'Inox'],
      image: '/images/grade-proteçao-janela-serralheria-guarulhos.jpeg',
      link: '/servicos/grades-seguranca',
    },
    {
      id: 'estruturas',
      title: 'Estruturas Metálicas e Coberturas',
      description: 'Precisa de estrutura metálica em Guarulhos? Executamos projetos completos: cobertura para garagem, área de lazer, mezanino metálico, estrutura para galpão e telhado.',
      types: ['Cobertura', 'Mezanino', 'Galpão', 'Telhado'],
      image: '/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg',
      link: '/servicos/estruturas-metalicas',
    },
    {
      id: 'escadas',
      title: 'Escadas, Corrimãos e Manutenção',
      description: 'A serralheria artística em Guarulhos também inclui elementos de design: escada metálica, corrimão de ferro e inox, guarda-corpo. E manutenção de portões com atendimento emergencial.',
      types: ['Escada', 'Corrimão', 'Manutenção', 'Conserto'],
      image: '/images/escadas,corrimaos-serralheria-guarulhos.jpeg',
      link: '/servicos/escadas-manutencao',
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            NOSSOS SERVIÇOS DE SERRALHERIA EM GUARULHOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Especialistas em <span className="text-blue-600">Estruturas Metálicas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em serralheria em Guarulhos, desde a fabricação até a instalação com garantia total.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.types.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://wa.me/5551991606477?text=Quero%20um%20or%C3%A7amento%20para%20servi%C3%A7os"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm text-center"
                  >
                    Solicitar Orçamento
                  </a>
                  <Link
                    href={service.link}
                    className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou o que procura? Temos soluções personalizadas!</p>
          <a
            href="https://wa.me/5551991606477?text=Quero%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

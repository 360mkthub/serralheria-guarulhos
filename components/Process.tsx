import { Phone, MapPin, FileText, CheckCircle, Wrench, Settings, Shield } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Entre em contato',
      description: 'WhatsApp, telefone ou formulário',
      number: '1',
    },
    {
      icon: MapPin,
      title: 'Visita técnica gratuita',
      description: 'Avaliamos seu projeto no local',
      number: '2',
    },
    {
      icon: FileText,
      title: 'Orçamento detalhado',
      description: 'Preço justo em até 24h',
      number: '3',
    },
    {
      icon: CheckCircle,
      title: 'Aprovação e projeto',
      description: 'Desenvolvemos o desenho técnico',
      number: '4',
    },
    {
      icon: Wrench,
      title: 'Fabricação',
      description: 'Produção na nossa oficina com qualidade',
      number: '5',
    },
    {
      icon: Settings,
      title: 'Instalação',
      description: 'Montagem completa e testes finais',
      number: '6',
    },
    {
      icon: Shield,
      title: 'Garantia e pós-venda',
      description: 'Suporte contínuo para você',
      number: '7',
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            PROCESSO SIMPLIFICADO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona Nosso <span className="text-blue-600">Atendimento</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            De forma simples e rápida, você recebe seu projeto do início ao fim com total transparência em Guarulhos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="relative z-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5551991606477?text=Quero%20agendar%20uma%20visita%20tecnica"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg"
          >
            Agendar Visita Técnica Grátis
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process

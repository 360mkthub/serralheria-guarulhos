'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: 'Meu portão basculante quebrou no domingo à noite. Liguei e em 1 hora o técnico estava aqui. Serviço de emergência nota 10!',
      author: 'Roberto S.',
      location: 'Vila Cocaia, Guarulhos',
      rating: 5,
    },
    {
      id: 2,
      text: 'Como arquiteta, exijo qualidade e precisão. A serralheria entregou corrimãos de inox com acabamento impecável. Meus clientes ficaram encantados!',
      author: 'Maria Oliveira',
      location: 'Arquiteta - Guarulhos',
      rating: 5,
    },
    {
      id: 3,
      text: 'Contratamos para a construção de um mezanino. A estrutura ficou robusta, bem acabada e dentro do cronograma. Profissionalismo do início ao fim.',
      author: 'João Pedro Santos',
      location: 'Diretor - Indústria em Guarulhos',
      rating: 5,
    },
  ]

  const stats = [
    { value: 'Satisfação', label: 'Garantida' },
    { value: 'Centenas', label: 'de Projetos' },
    { value: 'Compromisso', label: 'com o Prazo' },
    { value: 'Qualidade', label: 'Garantida' },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-blue-600">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que os moradores de Guarulhos falam sobre nossos serviços de serralheria.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-200">
            <Quote className="w-12 h-12 text-blue-300 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-gray-600">{testimonials[currentIndex].location}</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-200 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={24} className="text-blue-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-200 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={24} className="text-blue-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

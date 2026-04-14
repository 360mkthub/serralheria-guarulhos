'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, MapPin, Check, ArrowRight, Star, Shield, Clock, ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import type { BairroData } from '@/lib/bairros-data'
import { HERO_ABOUT_IMAGE_SRC } from '@/lib/site-images'

interface BairroTemplateProps {
  bairro: BairroData
}

export default function BairroTemplate({ bairro }: BairroTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const projects = [
    { id: 1, title: 'Portao Automatico Residencial', category: 'Portoes', image: '/images/portao-automatico-residencial-serralheria-guarulhos.jpeg' },
    { id: 2, title: 'Corrimao em Inox Premium', category: 'Corrimaos', image: '/images/corrimao-inox-premium-serralheria-guarulhos.jpeg' },
    { id: 3, title: 'Estruturas Metalicas Diversas', category: 'Estruturas', image: '/images/mezanino-serralheria-guarulhos.jpeg' },
    { id: 4, title: 'Soldagem Especializada', category: 'Soldagem', image: '/images/soldagem-serralheria-guarulhos.jpeg' },
    { id: 5, title: 'Coberturas Metalicas', category: 'Coberturas', image: '/images/cobertura-serralheria-guarulhos.jpeg' },
    { id: 6, title: 'Grades e Seguranca', category: 'Grades', image: '/images/grades-serralheria-guarulhos.jpeg' },
  ]

  const testimonials = [
    { id: 1, text: `Meu portao basculante quebrou no domingo a noite no bairro ${bairro.nome}. Liguei e em 1 hora o tecnico estava aqui. Servico de emergencia nota 10!`, author: 'Roberto S.', location: `${bairro.nome}, Guarulhos`, rating: 5 },
    { id: 2, text: 'Como arquiteta, exijo qualidade e precisao. A serralheria entregou corrimaos de inox com acabamento impecavel. Meus clientes ficaram encantados!', author: 'Maria Oliveira', location: 'Arquiteta - Guarulhos', rating: 5 },
    { id: 3, text: 'Contratamos para a construcao de um mezanino. A estrutura ficou robusta, bem acabada e dentro do cronograma. Profissionalismo do inicio ao fim.', author: 'Joao Pedro Santos', location: 'Diretor - Industria em Guarulhos', rating: 5 },
  ]

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container-custom"><div className="max-w-4xl">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">
            <MapPin className="w-4 h-4 inline mr-1" />ATENDIMENTO NO BAIRRO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{bairro.h1}</h1>
          <div className="space-y-4 text-lg text-blue-100">{bairro.intro.map((text, i) => (<p key={i}>{text}</p>))}</div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />Solicitar Orcamento Gratis
            </a>
            <Link href="/servicos/portoes-automaticos" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center gap-2">Ver Servicos</Link>
          </div>
        </div></div>
      </section>

      {/* About */}
      <section className="section-padding bg-white">
        <div className="container-custom"><div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HERO_ABOUT_IMAGE_SRC} alt={`Equipe de serralheria em ${bairro.nome}`} className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-lg font-bold">Projetos</div><div className="text-sm opacity-90">sob medida</div>
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">ESPECIALISTAS EM ESTRUTURAS METALICAS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por Que Escolher Nossa <span className="text-gradient">Serralheria em {bairro.nome}?</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Somos especialistas em <strong>serralheria em {bairro.nome}</strong> com mais de <strong>15 anos de experiencia</strong>. Nossa equipe de serralheiros qualificados esta preparada para atender desde pequenos reparos ate grandes projetos industriais.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {bairro.diferenciais.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5"><Check size={12} className="text-white" /></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl"><Star className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-lg font-bold text-gray-900">{bairro.nome}</div><div className="text-xs text-gray-600">e Regiao</div></div>
              <div className="text-center p-4 bg-gray-50 rounded-xl"><Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-lg font-bold text-gray-900">Foco</div><div className="text-xs text-gray-600">em Qualidade</div></div>
              <div className="text-center p-4 bg-gray-50 rounded-xl"><Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-lg font-bold text-gray-900">Orcamento</div><div className="text-xs text-gray-600">Gratis</div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicos de Serralheria em <span className="text-gradient">{bairro.nome}</span></h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Portoes Automaticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
              { icon: Star, title: 'Grades de Seguranca', desc: 'Ferro, aluminio e aco inox', link: '/servicos/grades-seguranca' },
              { icon: Check, title: 'Estruturas Metalicas', desc: 'Galpoes, mezaninos e coberturas', link: '/servicos/estruturas-metalicas' },
              { icon: Clock, title: 'Manutencao', desc: 'Reparos e manutencao preventiva', link: '/servicos/escadas-manutencao' },
            ].map((servico, i) => (
              <Link key={i} href={servico.link} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors"><servico.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" /></div>
                <h3 className="font-bold text-gray-900 mb-2">{servico.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{servico.desc}</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Saiba mais <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Galeria de <span className="text-gradient">Projetos em {bairro.nome}</span></h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer card-hover" onClick={() => setSelectedImage(project.image)}>
                <div className="aspect-[4/3] overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full mb-2">{project.category}</span>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors" aria-label="Fechar"><X size={20} /></button>
            {selectedImage && <img src={selectedImage} alt="Projeto ampliado" className="w-full h-auto rounded-lg" />}
          </DialogContent>
        </Dialog>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">O Que Nossos <span className="text-gradient">Clientes Dizem</span></h2></div>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-blue-300 mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">{`"${testimonials[currentTestimonial].text}"`}</blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</div>
                  <div className="flex gap-1 mt-2">{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />))}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors" aria-label="Depoimento anterior"><ChevronLeft size={24} className="text-blue-600" /></button>
                  <button onClick={nextTestimonial} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 transition-colors" aria-label="Proximo depoimento"><ChevronRight size={24} className="text-blue-600" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {bairro.faqs.length > 0 && (
        <section id="faq" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FAQ - <span className="text-gradient">Serralheria em {bairro.nome}</span></h2></div>
            <div className="max-w-3xl mx-auto mb-12">
              <Accordion type="single" collapsible className="space-y-4">
                {bairro.faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="bg-gray-50 rounded-xl px-6 shadow-sm border-none">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                      <span className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">{faq.id}</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 pl-11">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ainda tem duvidas? Fale conosco!</h3>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300">
                <MessageCircle size={20} />FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Vizinhos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tambem Atendemos Proximo a {bairro.nome}</h2></div>
          <div className="flex flex-wrap justify-center gap-3">
            {bairro.vizinhos.map((vizinho) => (
              <Link key={vizinho} href={`/localidades/${vizinho.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 hover:bg-blue-50 transition-all">{vizinho}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de Serralheria em {bairro.nome}?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">Orcamento gratis em ate 24h. Atendimento rapido com garantia total em todos os servicos.</p>
          <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2"><Phone className="w-5 h-5" />Falar no WhatsApp</a>
        </div>
      </section>
    </>
  )
}

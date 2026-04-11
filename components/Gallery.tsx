'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Portão Automático Residencial',
      category: 'Portões',
      image: '/images/portao-automatico-residencial-serralheria-guarulhos.jpeg',
    },
    {
      id: 2,
      title: 'Corrimão em Inox Premium',
      category: 'Corrimãos',
      image: '/images/corrimao-inox-premium-serralheria-guarulhos.jpeg',
    },
    {
      id: 3,
      title: 'Estruturas Metálicas Diversas',
      category: 'Estruturas',
      image: '/images/mezanino-serralheria-guarulhos.jpeg',
    },
    {
      id: 4,
      title: 'Soldagem Especializada',
      category: 'Soldagem',
      image: '/images/soldagem-serralheria-guarulhos.jpeg',
    },
    {
      id: 5,
      title: 'Coberturas Metálicas',
      category: 'Coberturas',
      image: '/images/cobertura-serralheria-guarulhos.jpeg',
    },
    {
      id: 6,
      title: 'Grades e Segurança',
      category: 'Grades',
      image: '/images/grades-serralheria-guarulhos.jpeg',
    },
  ]

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            SOLICITE SEU ORÇAMENTO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Galeria de <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos projetos que entregamos com excelência e dedicação em Guarulhos. Cada trabalho é único e feito sob medida.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-transform hover:-translate-y-1"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Projeto ampliado"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Gallery

'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// LISTA COMPLETA E CORRIGIDA PARA O SEU PROJETO
export const faqs = [
  {
    id: 'item-1',
    question: 'Quanto custa contratar uma serralheria em Guarulhos?',
    answer: 'O preço varia conforme o tipo de serviço, material utilizado, dimensões e complexidade do projeto. Solicite seu orçamento grátis! Avaliamos seu projeto sem compromisso.'
  },
  {
    id: 'item-2',
    question: 'Qual o prazo de entrega dos serviços?',
    answer: 'O prazo varia conforme a complexidade do projeto. Entre em contato e solicite um orçamento grátis para receber uma estimativa precisa!'
  },
  {
    id: 'item-3',
    question: 'Os serviços de serralheria têm garantia?',
    answer: 'Sim! Oferecemos garantia em todos os nossos serviços.'
  },
  {
    id: 'item-4',
    question: 'Atendem emergências de portões em Guarulhos?',
    answer: 'Sim! Temos atendimento emergencial para portões em toda Guarulhos. Nossos técnicos chegam em até 2 horas.'
  },
  {
    id: 'item-5',
    question: 'Qual a diferença entre portão deslizante, basculante e pivotante?',
    answer: 'Portão deslizante corre sobre trilhos laterais, ideal para espaços amplos. Basculante sobe e desce articulado, ótimo para garagens. Pivotante gira em torno de um eixo, indicado para espaços menores.'
  },
  {
    id: 'item-6',
    question: 'Vocês fazem apenas a fabricação ou também a instalação?',
    answer: 'Fazemos tudo! Nosso serviço é completo: visita técnica, medição, projeto, fabricação, pintura, instalação, testes e ajustes finais.'
  },
  {
    id: 'item-7',
    question: 'É possível personalizar o design das estruturas metálicas?',
    answer: 'Com certeza! Personalizamos todos os projetos: pintura eletrostática, detalhes decorativos, modelos exclusivos e combinação de materiais como ferro com inox ou alumínio com vidro.'
  },
  {
    id: 'item-8',
    question: 'Quanto tempo leva para fabricar e instalar um portão?',
    answer: 'O prazo varia conforme a complexidade. Entre em contato e solicite um orçamento grátis para uma estimativa personalizada.'
  }
]

interface ServiceFAQProps {
  faqs?: { id: string; question: string; answer: string }[]
  title?: string
}

export default function ServiceFAQ({ faqs: propsFaqs, title = "Dúvidas Frequentes" }: ServiceFAQProps) {
  const displayFaqs = propsFaqs || faqs

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {displayFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-gray-50 rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

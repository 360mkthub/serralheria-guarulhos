'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { homeFaqs } from '@/lib/home-faqs'

/** Reexport para compatibilidade com imports antigos da home. */
export const faqs = homeFaqs

interface ServiceFAQProps {
  faqs?: { id: string; question: string; answer: string }[]
  title?: string
}

export default function ServiceFAQ({ faqs: propsFaqs, title = "Dúvidas Frequentes" }: ServiceFAQProps) {
  const displayFaqs = propsFaqs || [...homeFaqs]

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

/** Dados da seção FAQ da home — usados no JSON-LD (servidor) e no ServiceFAQ (cliente). */
export const homeFaqs = [
  {
    id: 'item-1',
    question: 'Quanto custa contratar uma serralheria em Guarulhos?',
    answer:
      'O preço varia conforme o tipo de serviço, material utilizado, dimensões e complexidade do projeto. Solicite seu orçamento grátis! Avaliamos seu projeto sem compromisso.',
  },
  {
    id: 'item-2',
    question: 'Qual o prazo de entrega dos serviços?',
    answer:
      'O prazo varia conforme a complexidade do projeto. Entre em contato e solicite um orçamento grátis para receber uma estimativa precisa!',
  },
  {
    id: 'item-3',
    question: 'Os serviços de serralheria têm garantia?',
    answer: 'Sim! Oferecemos garantia em todos os nossos serviços.',
  },
  {
    id: 'item-4',
    question: 'Atendem emergências de portões em Guarulhos?',
    answer:
      'Sim! Temos atendimento emergencial para portões em toda Guarulhos. Nossos técnicos chegam em até 2 horas.',
  },
  {
    id: 'item-5',
    question: 'Qual a diferença entre portão deslizante, basculante e pivotante?',
    answer:
      'Portão deslizante corre sobre trilhos laterais, ideal para espaços amplos. Basculante sobe e desce articulado, ótimo para garagens. Pivotante gira em torno de um eixo, indicado para espaços menores.',
  },
  {
    id: 'item-6',
    question: 'Vocês fazem apenas a fabricação ou também a instalação?',
    answer:
      'Fazemos tudo! Nosso serviço é completo: visita técnica, medição, projeto, fabricação, pintura, instalação, testes e ajustes finais.',
  },
  {
    id: 'item-7',
    question: 'É possível personalizar o design das estruturas metálicas?',
    answer:
      'Com certeza! Personalizamos todos os projetos: pintura eletrostática, detalhes decorativos, modelos exclusivos e combinação de materiais como ferro com inox ou alumínio com vidro.',
  },
  {
    id: 'item-8',
    question: 'Quanto tempo leva para fabricar e instalar um portão?',
    answer:
      'O prazo varia conforme a complexidade. Entre em contato e solicite um orçamento grátis para uma estimativa personalizada.',
  },
] as const

export type HomeFaqItem = (typeof homeFaqs)[number]

export interface BairroData {
  nome: string
  slug: string
  h1: string
  title: string
  metaDescription: string
  /** Título exibido na SERP (Metadata API); com `generateMetadata` usando `title.absolute`. */
  serpTitle?: string
  /** Meta description exclusiva da SERP. */
  serpDescription?: string
  intro: string[]
  servicosDestaque: string[]
  diferenciais: string[]
  vizinhos: string[]
  faqs: { id: string; question: string; answer: string }[]
}

function createBairro(nome: string, slug: string, vizinhos: string[]): BairroData {
  const prep = nome.startsWith('Jardim') || nome.startsWith('Parque') ? 'no' : nome.startsWith('Vila') || nome.startsWith('Ponte') ? 'na' : 'no'
  return {
    nome,
    slug,
    h1: `Serralheria ${prep} ${nome} | Portões, grades e estruturas metálicas`,
    title: `Serralheria ${prep} ${nome} Guarulhos | Portões automáticos com garantia`,
    metaDescription: `Serralheria ${prep} ${nome}, Guarulhos. Portões automáticos, grades de segurança e estruturas metálicas com atendimento rápido. Orçamento grátis em 24h!`,
    intro: [
      `Procurando por serralheria ${prep} ${nome}, Guarulhos? Somos especialistas em portões automáticos, grades de proteção e estruturas metálicas com mais de 15 anos de experiência atendendo o bairro ${nome} e toda a região.`,
      `Nossa equipe de serralheiros qualificados oferece serviços completos de fabricação, instalação e manutenção, utilizando materiais de primeira linha como ferro galvanizado, alumínio e aço inox. Atendimento rápido e garantia em todos os serviços.`,
    ],
    servicosDestaque: [
      'Portões automáticos basculantes, deslizantes e pivotantes',
      'Grades de segurança em ferro, alumínio e aço inox',
      'Estruturas metálicas para galpões e mezaninos',
      'Manutenção e reparos emergenciais',
    ],
    diferenciais: [
      `Atendimento rápido ${prep} ${nome} e região`,
      'Orçamento grátis em até 24 horas',
      'Garantia de até 5 anos nos serviços',
      'Materiais de primeira qualidade',
      'Equipe com certificações NR-12, NR-18 e NR-35',
      '15 anos de experiência em Guarulhos',
    ],
    vizinhos,
    faqs: [
      { id: '1', question: `Quanto custa contratar uma serralheria ${prep} ${nome}?`, answer: `O preço varia conforme o tipo de serviço, material utilizado e dimensões do projeto. ${prep.charAt(0).toUpperCase() + prep.slice(1)} ${nome}, oferecemos orçamento grátis e sem compromisso. Entre em contato e receba uma proposta detalhada em até 24h.` },
      { id: '2', question: `Qual o prazo de entrega dos serviços ${prep} ${nome}?`, answer: `O prazo varia conforme a complexidade do projeto. Para ${prep === 'no' ? 'o' : 'a'} ${nome}, garantimos atendimento prioritário com prazos reduzidos. Portões simples em 5-7 dias úteis, projetos maiores conforme especificação.` },
      { id: '3', question: `Vocês atendem emergências de portões ${prep} ${nome}?`, answer: `Sim! Temos atendimento emergencial 24h para portões ${prep} ${nome}. Nossos técnicos chegam em até 2 horas para resolver problemas como portão travado, motor queimado ou mola arrebentada.` },
      { id: '4', question: `Qual a garantia dos serviços ${prep} ${nome}?`, answer: `Oferecemos garantia de até 5 anos nos serviços de serralheria ${prep} ${nome}. O período varia conforme o tipo de serviço: portões automáticos (3 anos), grades (5 anos), estruturas (5 anos) e manutenção (6 meses).` },
      { id: '5', question: `Vocês fazem visita técnica ${prep} ${nome}?`, answer: `Sim, realizamos visita técnica gratuita em ${prep === 'no' ? 'todo o' : 'toda a'} ${nome}. Nosso técnico vai até seu endereço para avaliar o projeto, tirar medidas e apresentar a melhor solução para sua necessidade.` },
      { id: '6', question: `Quais materiais vocês trabalham ${prep} ${nome}?`, answer: 'Trabalhamos com ferro galvanizado, aço carbono, alumínio e aço inox 304 e 316. Todos os materiais são de primeira linha e com certificação de qualidade. A escolha depende da aplicação e preferência do cliente.' },
      { id: '7', question: `É possível personalizar o design dos portões ${prep} ${nome}?`, answer: 'Com certeza! Desenvolvemos projetos personalizados conforme sua preferência. Oferecemos diversas opções de cores através da pintura eletrostática, modelos decorativos e acabamentos especiais.' },
      { id: '8', question: `Vocês instalam motores para portões ${prep} ${nome}?`, answer: `Sim, somos especialistas em automação de portões ${prep} ${nome}. Trabalhamos com as melhores marcas: PPA, Garen, Peccinin, Rossi e Nice. Instalação completa com garantia e suporte técnico.` },
    ],
  }
}

function bairroComSerp(
  nome: string,
  slug: string,
  vizinhos: string[],
  serpTitle: string,
  serpDescription: string
): BairroData {
  return { ...createBairro(nome, slug, vizinhos), serpTitle, serpDescription }
}

export const bairros: BairroData[] = [
  bairroComSerp(
    'Vila Galvão',
    'vila-galvao',
    ['Macedo', 'Centro', 'Jardim Maia', 'Vila Augusta', 'Ponte Grande'],
    'Serralheria em Vila Galvão Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades e estruturas metálicas em Vila Galvão, Guarulhos. Atendimento rápido e orçamento fácil pelo WhatsApp.'
  ),
  bairroComSerp(
    'Centro',
    'centro',
    ['Vila Galvão', 'Macedo', 'Vila Rio de Janeiro', 'Ponte Grande', 'Vila Endres'],
    'Serralheria no Centro de Guarulhos | Portões e Grades Sob Medida',
    'Serralheria no Centro de Guarulhos para portões automáticos, grades e estruturas metálicas. Solicite orçamento rápido pelo WhatsApp.'
  ),
  bairroComSerp(
    'Jardim Cumbica',
    'jardim-cumbica',
    ['Vila Augusta', 'Jardim Maia', 'Parque Cecap', 'Vila Barros', 'Jardim das Oliveiras'],
    'Serralheria no Jardim Cumbica Guarulhos | Portões e Grades Sob Medida',
    'Atendimento em Jardim Cumbica, Guarulhos, para fabricação e instalação de portões, grades e estruturas metálicas.'
  ),
  bairroComSerp(
    'Jardim Maia',
    'jardim-maia',
    ['Vila Galvão', 'Macedo', 'Vila Augusta', 'Jardim Cumbica', 'Vila Barros'],
    'Serralheria no Jardim Maia Guarulhos | Portões e Grades Sob Medida',
    'Fabricação e instalação de portões, grades e estruturas metálicas no Jardim Maia, Guarulhos. Atendimento rápido e orçamento sem complicação.'
  ),
  bairroComSerp(
    'Macedo',
    'macedo',
    ['Vila Galvão', 'Centro', 'Jardim Maia', 'Vila Augusta', 'Vila Rio de Janeiro'],
    'Serralheria no Macedo Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades de proteção e estruturas metálicas no Macedo, Guarulhos. Fale no WhatsApp e peça seu orçamento.'
  ),
  bairroComSerp(
    'Vila Augusta',
    'vila-augusta',
    ['Jardim Maia', 'Vila Galvão', 'Macedo', 'Jardim Cumbica', 'Parque Cecap'],
    'Serralheria na Vila Augusta Guarulhos | Portões e Grades Sob Medida',
    'Atendimento em Vila Augusta, Guarulhos, para portões, grades e estruturas metálicas sob medida. Orçamento rápido pelo WhatsApp.'
  ),
  bairroComSerp(
    'Ponte Grande',
    'ponte-grande',
    ['Vila Galvão', 'Centro', 'Vila Endres', 'Vila Rio de Janeiro', 'Macedo'],
    'Serralheria na Ponte Grande Guarulhos | Portões e Grades Sob Medida',
    'Serralheria na Ponte Grande, Guarulhos, com fabricação sob medida de portões, grades e estruturas metálicas. Solicite orçamento.'
  ),
  bairroComSerp(
    'Parque Cecap',
    'parque-cecap',
    ['Vila Augusta', 'Jardim Cumbica', 'Vila Barros', 'Jardim das Oliveiras', 'Vila Endres'],
    'Serralheria no Parque Cecap Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades e estruturas metálicas no Parque Cecap, Guarulhos. Atendimento rápido e orçamento por WhatsApp.'
  ),
  bairroComSerp(
    'Vila Barros',
    'vila-barros',
    ['Jardim Cumbica', 'Jardim Maia', 'Parque Cecap', 'Jardim das Oliveiras', 'Vila Endres'],
    'Serralheria na Vila Barros Guarulhos | Portões e Grades Sob Medida',
    'Serralheria na Vila Barros, Guarulhos, para fabricação e instalação de portões, grades e estruturas metálicas sob medida.'
  ),
  bairroComSerp(
    'Vila Cocaia',
    'vila-cocaia',
    ['Jardim das Oliveiras', 'Vila Endres', 'Parque Cecap', 'Vila Rio de Janeiro', 'Centro'],
    'Serralheria na Vila Cocaia Guarulhos | Portões e Grades Sob Medida',
    'Portões, grades e estruturas metálicas na Vila Cocaia, Guarulhos, com atendimento rápido e orçamento fácil pelo WhatsApp.'
  ),
  bairroComSerp(
    'Vila Endres',
    'vila-endres',
    ['Ponte Grande', 'Centro', 'Parque Cecap', 'Vila Barros', 'Vila Cocaia'],
    'Serralheria na Vila Endres Guarulhos | Portões e Grades Sob Medida',
    'Atendimento em Vila Endres, Guarulhos, para portões automáticos, grades e estruturas metálicas. Solicite orçamento rápido.'
  ),
  bairroComSerp(
    'Vila Rio de Janeiro',
    'vila-rio-de-janeiro',
    ['Macedo', 'Centro', 'Ponte Grande', 'Vila Cocaia', 'Vila Endres'],
    'Serralheria na Vila Rio de Janeiro Guarulhos | Portões e Grades Sob Medida',
    'Serralheria na Vila Rio de Janeiro, Guarulhos, com fabricação sob medida de portões, grades e estruturas metálicas.'
  ),
  bairroComSerp(
    'Jardim das Oliveiras',
    'jardim-das-oliveiras',
    ['Jardim Cumbica', 'Vila Barros', 'Parque Cecap', 'Vila Cocaia', 'Vila Endres'],
    'Serralheria no Jardim das Oliveiras Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades e estruturas metálicas no Jardim das Oliveiras, Guarulhos. Fale pelo WhatsApp e peça orçamento.'
  ),
]

export function getBairroBySlug(slug: string): BairroData | undefined {
  return bairros.find((b) => b.slug === slug)
}

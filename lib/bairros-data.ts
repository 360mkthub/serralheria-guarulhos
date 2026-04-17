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
    h1: `Serralheria ${prep} ${nome} | Portoes, Grades e Estruturas Metalicas`,
    title: `Serralheria ${prep} ${nome} Guarulhos | Portoes Automaticos com Garantia`,
    metaDescription: `Serralheria ${prep} ${nome}, Guarulhos. Portoes automaticos, grades de seguranca e estruturas metalicas com atendimento rapido. Orcamento gratis em 24h!`,
    intro: [
      `Procurando por serralheria ${prep} ${nome}, Guarulhos? Somos especialistas em portoes automaticos, grades de protecao e estruturas metalicas com mais de 15 anos de experiencia atendendo o bairro ${nome} e toda a regiao.`,
      `Nossa equipe de serralheiros qualificados oferece servicos completos de fabricacao, instalacao e manutencao, utilizando materiais de primeira linha como ferro galvanizado, aluminio e aco inox. Atendimento rapido e garantia em todos os servicos.`,
    ],
    servicosDestaque: [
      'Portoes automaticos basculantes, deslizantes e pivotantes',
      'Grades de seguranca em ferro, aluminio e aco inox',
      'Estruturas metalicas para galpoes e mezaninos',
      'Manutencao e reparos emergenciais',
    ],
    diferenciais: [
      `Atendimento rapido ${prep} ${nome} e regiao`,
      'Orcamento gratis em ate 24 horas',
      'Garantia de ate 5 anos nos servicos',
      'Materiais de primeira qualidade',
      'Equipe com certificacoes NR-12, NR-18 e NR-35',
      '15 anos de experiencia em Guarulhos',
    ],
    vizinhos,
    faqs: [
      { id: '1', question: `Quanto custa contratar uma serralheria ${prep} ${nome}?`, answer: `O preco varia conforme o tipo de servico, material utilizado e dimensoes do projeto. ${prep.charAt(0).toUpperCase() + prep.slice(1)} ${nome}, oferecemos orcamento gratis e sem compromisso. Entre em contato e receba uma proposta detalhada em ate 24h.` },
      { id: '2', question: `Qual o prazo de entrega dos servicos ${prep} ${nome}?`, answer: `O prazo varia conforme a complexidade do projeto. Para ${prep === 'no' ? 'o' : 'a'} ${nome}, garantimos atendimento prioritario com prazos reduzidos. Portoes simples em 5-7 dias uteis, projetos maiores conforme especificacao.` },
      { id: '3', question: `Voces atendem emergencias de portoes ${prep} ${nome}?`, answer: `Sim! Temos atendimento emergencial 24h para portoes ${prep} ${nome}. Nossos tecnicos chegam em ate 2 horas para resolver problemas como portao travado, motor queimado ou mola arrebentada.` },
      { id: '4', question: `Qual a garantia dos servicos ${prep} ${nome}?`, answer: `Oferecemos garantia de ate 5 anos nos servicos de serralheria ${prep} ${nome}. O periodo varia conforme o tipo de servico: portoes automaticos (3 anos), grades (5 anos), estruturas (5 anos) e manutencao (6 meses).` },
      { id: '5', question: `Voces fazem visita tecnica ${prep} ${nome}?`, answer: `Sim, realizamos visita tecnica gratuita em ${prep === 'no' ? 'todo o' : 'toda a'} ${nome}. Nosso tecnico vai ate seu endereco para avaliar o projeto, tirar medidas e apresentar a melhor solucao para sua necessidade.` },
      { id: '6', question: `Quais materiais voces trabalham ${prep} ${nome}?`, answer: 'Trabalhamos com ferro galvanizado, aco carbono, aluminio e aco inox 304 e 316. Todos os materiais sao de primeira linha e com certificacao de qualidade. A escolha depende da aplicacao e preferencia do cliente.' },
      { id: '7', question: `E possivel personalizar o design dos portoes ${prep} ${nome}?`, answer: 'Com certeza! Desenvolvemos projetos personalizados conforme sua preferencia. Oferecemos diversas opcoes de cores atraves da pintura eletrostatica, modelos decorativos e acabamentos especiais.' },
      { id: '8', question: `Voces instalam motores para portoes ${prep} ${nome}?`, answer: `Sim, somos especialistas em automacao de portoes ${prep} ${nome}. Trabalhamos com as melhores marcas: PPA, Garen, Peccinin, Rossi e Nice. Instalacao completa com garantia e suporte tecnico.` },
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
    'Vila Galvao',
    'vila-galvao',
    ['Macedo', 'Centro', 'Jardim Maia', 'Vila Augusta', 'Ponte Grande'],
    'Serralheria em Vila Galvão Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades e estruturas metálicas em Vila Galvão, Guarulhos. Atendimento rápido e orçamento fácil pelo WhatsApp.'
  ),
  bairroComSerp(
    'Centro',
    'centro',
    ['Vila Galvao', 'Macedo', 'Vila Rio de Janeiro', 'Ponte Grande', 'Vila Endres'],
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
    ['Vila Galvao', 'Macedo', 'Vila Augusta', 'Jardim Cumbica', 'Vila Barros'],
    'Serralheria no Jardim Maia Guarulhos | Portões e Grades Sob Medida',
    'Fabricação e instalação de portões, grades e estruturas metálicas no Jardim Maia, Guarulhos. Atendimento rápido e orçamento sem complicação.'
  ),
  bairroComSerp(
    'Macedo',
    'macedo',
    ['Vila Galvao', 'Centro', 'Jardim Maia', 'Vila Augusta', 'Vila Rio de Janeiro'],
    'Serralheria no Macedo Guarulhos | Portões e Grades Sob Medida',
    'Portões automáticos, grades de proteção e estruturas metálicas no Macedo, Guarulhos. Fale no WhatsApp e peça seu orçamento.'
  ),
  bairroComSerp(
    'Vila Augusta',
    'vila-augusta',
    ['Jardim Maia', 'Vila Galvao', 'Macedo', 'Jardim Cumbica', 'Parque Cecap'],
    'Serralheria na Vila Augusta Guarulhos | Portões e Grades Sob Medida',
    'Atendimento em Vila Augusta, Guarulhos, para portões, grades e estruturas metálicas sob medida. Orçamento rápido pelo WhatsApp.'
  ),
  bairroComSerp(
    'Ponte Grande',
    'ponte-grande',
    ['Vila Galvao', 'Centro', 'Vila Endres', 'Vila Rio de Janeiro', 'Macedo'],
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

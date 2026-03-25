export type InternalLinkItem = { text: string; href: string }

/** Links internos estratégicos por slug de post do blog (App Router — sem getStaticProps). */
export const INTERNAL_LINKS_BY_SLUG: Record<string, InternalLinkItem[]> = {
  'motor-para-portao-industrial-guarulhos-por-que-escolher-o-modelo-certo': [
    { text: 'Portões automáticos em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Kit de automação para portão em Guarulhos',
      href: '/blog/kit-de-automacao-para-portao-em-guarulhos-compare-marcas-e-precos/',
    },
    {
      text: 'Motor PPA vs Garen: qual o melhor?',
      href: '/blog/motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa/',
    },
  ],
  'motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa': [
    { text: 'Instalação de portão automático em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Motor para portão industrial em Guarulhos',
      href: '/blog/motor-para-portao-industrial-guarulhos-por-que-escolher-o-modelo-certo/',
    },
    {
      text: 'Kit de automação completo para portão',
      href: '/blog/kit-de-automacao-para-portao-em-guarulhos-compare-marcas-e-precos/',
    },
  ],
  'kit-de-automacao-para-portao-em-guarulhos-compare-marcas-e-precos': [
    { text: 'Portão automático com instalação em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Motor PPA vs Garen: comparativo completo',
      href: '/blog/motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa/',
    },
    {
      text: 'Portão basculante automático: quanto custa?',
      href: '/blog/portao-basculante-automatico-guarulhos-precos-2026-guia/',
    },
  ],
  'portao-pivotante-automatizado-residencial-guia-completo-para-escolher-instalar-e-manter-o-seu': [
    { text: 'Portões automáticos em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Portão de ferro ou alumínio: qual escolher?',
      href: '/blog/portao-de-ferro-vs-aluminio-qual-a-melhor-escolha-para-sua-casa-ou-empresa/',
    },
    {
      text: 'Kit de automação para portão pivotante',
      href: '/blog/kit-de-automacao-para-portao-em-guarulhos-compare-marcas-e-precos/',
    },
  ],
  'portao-basculante-automatico-guarulhos-precos-2026-guia': [
    { text: 'Serviço de portão automático em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Portão automático deslizante: preço em Guarulhos',
      href: '/blog/portao-automatico-em-guarulhos-preco-e-instalacao-de-motor-deslizante/',
    },
    {
      text: 'Melhor motor para portão basculante',
      href: '/blog/motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa/',
    },
  ],
  'portao-automatico-em-guarulhos-preco-e-instalacao-de-motor-deslizante': [
    { text: 'Instalação de portão automático em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Portão basculante automático: preços 2026',
      href: '/blog/portao-basculante-automatico-guarulhos-precos-2026-guia/',
    },
    {
      text: 'Motor para portão industrial em Guarulhos',
      href: '/blog/motor-para-portao-industrial-guarulhos-por-que-escolher-o-modelo-certo/',
    },
  ],
  'portao-de-ferro-vs-aluminio-qual-a-melhor-escolha-para-sua-casa-ou-empresa': [
    { text: 'Portões automáticos e manuais em Guarulhos', href: '/servicos/portoes-automaticos/' },
    {
      text: 'Portão pivotante automatizado residencial',
      href: '/blog/portao-pivotante-automatizado-residencial-guia-completo-para-escolher-instalar-e-manter-o-seu/',
    },
    { text: 'Estruturas metálicas em Guarulhos', href: '/servicos/estruturas-metalicas/' },
  ],
  'grade-de-protecao-para-porta-em-guarulhos-guia-completo-para-escolher-comprar-e-instalar': [
    { text: 'Grades de segurança em Guarulhos', href: '/servicos/grades-seguranca/' },
    {
      text: 'Portão de ferro ou alumínio: qual escolher?',
      href: '/blog/portao-de-ferro-vs-aluminio-qual-a-melhor-escolha-para-sua-casa-ou-empresa/',
    },
    { text: 'Estruturas metálicas sob medida em Guarulhos', href: '/servicos/estruturas-metalicas/' },
  ],
  'cobertura-para-area-de-lazer-guarulhos-guia-completo-para-escolher-a-melhor-solucao-para-seu-espaco': [
    { text: 'Estruturas metálicas em Guarulhos', href: '/servicos/estruturas-metalicas/' },
    {
      text: 'Grade de proteção para porta em Guarulhos',
      href: '/blog/grade-de-protecao-para-porta-em-guarulhos-guia-completo-para-escolher-comprar-e-instalar/',
    },
    { text: 'Escadas e corrimãos metálicos em Guarulhos', href: '/servicos/escadas-manutencao/' },
  ],
  'serralheria-jardim-cumbica-solucoes-completas-em-metal': [
    { text: 'Serralheria no Jardim Cumbica', href: '/localidades/jardim-cumbica/' },
    { text: 'Portões automáticos em Guarulhos', href: '/servicos/portoes-automaticos/' },
    { text: 'Grades de segurança em Guarulhos', href: '/servicos/grades-seguranca/' },
    { text: 'Estruturas metálicas em Guarulhos', href: '/servicos/estruturas-metalicas/' },
  ],
}

export function getInternalLinksForSlug(slug: string): InternalLinkItem[] {
  return INTERNAL_LINKS_BY_SLUG[slug] ?? []
}

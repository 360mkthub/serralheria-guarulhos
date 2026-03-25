import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = { title: 'Termos de Uso', description: 'Termos de uso do site Serralheria em Guarulhos.', alternates: { canonical: 'https://serralheriaemguarulhos.com.br/termos' } }

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4"><div className="container-custom"><div className="flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="font-bold text-xl text-blue-700"><span className="block text-xs font-medium tracking-wider uppercase opacity-80">Serralheria</span><span className="block leading-tight">EM GUARULHOS</span></div></Link><Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"><ArrowLeft size={20} /><span>Voltar</span></Link></div></div></header>
      <main className="section-padding"><div className="container-custom max-w-4xl"><div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Ultima atualizacao: {new Date().toLocaleDateString('pt-BR')}</p>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">1. Aceitacao dos Termos</h2><p className="text-gray-600 mb-4">Ao acessar e utilizar o site da Serralheria em Guarulhos, voce concorda em cumprir e estar vinculado a estes Termos de Uso.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">2. Uso do Site</h2><p className="text-gray-600 mb-4">O site da Serralheria em Guarulhos destina-se a fornecer informacoes sobre nossos servicos de serralheria, portoes, grades, estruturas metalicas e coberturas em Guarulhos e regiao.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">3. Propriedade Intelectual</h2><p className="text-gray-600 mb-4">Todo o conteudo deste site, incluindo textos, imagens, logotipos, icones e software, e propriedade da Serralheria em Guarulhos ou de seus fornecedores de conteudo.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">4. Orcamentos e Servicos</h2><p className="text-gray-600 mb-4">Os orcamentos fornecidos atraves do site sao estimativas baseadas nas informacoes fornecidas pelo cliente. O valor final pode variar apos visita tecnica.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">5. Garantia</h2><p className="text-gray-600 mb-4">Todos os nossos servicos possuem garantia contra defeitos de fabricacao. A garantia nao cobre danos causados por uso indevido, desgaste natural, intervencao de terceiros ou fenomenos da natureza.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">6. Lei Aplicavel</h2><p className="text-gray-600 mb-4">Estes Termos de Uso sao regidos pelas leis da Republica Federativa do Brasil. Qualquer disputa sera submetida a jurisdicao exclusiva dos tribunais de Guarulhos, Sao Paulo.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">7. Contato</h2><p className="text-gray-600 mb-4">Se voce tiver alguma duvida sobre estes Termos de Uso, entre em contato conosco atraves do formulario de contato em nosso site ou pelo WhatsApp.</p></section>
        </div>
      </div></div></main>
      <footer className="bg-gray-900 text-white py-8"><div className="container-custom"><div className="flex flex-col items-center gap-4"><p className="text-gray-500 text-sm text-center">{'© '}{new Date().getFullYear()}{' Serralheria em Guarulhos. Todos os direitos reservados.'}</p><p className="text-gray-500 text-sm text-center">{'Site desenvolvido por '}<a href="https://360mkthub.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">360MKTHub</a></p></div></div></footer>
    </div>
  )
}

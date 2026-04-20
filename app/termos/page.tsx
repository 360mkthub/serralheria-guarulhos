import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = { title: 'Termos de Uso', description: 'Termos de uso do site Serralheria em Guarulhos.', alternates: { canonical: 'https://serralheriaemguarulhos.com/termos/' } }

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4"><div className="container-custom"><div className="flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="font-bold text-xl text-blue-700"><span className="block text-xs font-medium tracking-wider uppercase opacity-80">Serralheria</span><span className="block leading-tight">EM GUARULHOS</span></div></Link><Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"><ArrowLeft size={20} /><span>Voltar</span></Link></div></div></header>
      <main className="section-padding"><div className="container-custom max-w-4xl"><div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">1. Aceitação dos termos</h2><p className="text-gray-600 mb-4">Ao acessar e utilizar o site da Serralheria em Guarulhos, você concorda em cumprir e estar vinculado a estes Termos de Uso.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">2. Uso do site</h2><p className="text-gray-600 mb-4">O site da Serralheria em Guarulhos destina-se a fornecer informações sobre nossos serviços de serralheria, portões, grades, estruturas metálicas e coberturas em Guarulhos e região.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">3. Propriedade intelectual</h2><p className="text-gray-600 mb-4">Todo o conteúdo deste site, incluindo textos, imagens, logotipos, ícones e software, é propriedade da Serralheria em Guarulhos ou de seus fornecedores de conteúdo.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">4. Orçamentos e serviços</h2><p className="text-gray-600 mb-4">Os orçamentos fornecidos através do site são estimativas baseadas nas informações fornecidas pelo cliente. O valor final pode variar após visita técnica.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">5. Garantia</h2><p className="text-gray-600 mb-4">Todos os nossos serviços possuem garantia contra defeitos de fabricação. A garantia não cobre danos causados por uso indevido, desgaste natural, intervenção de terceiros ou fenômenos da natureza.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">6. Lei aplicável</h2><p className="text-gray-600 mb-4">Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida à jurisdição exclusiva dos tribunais de Guarulhos, São Paulo.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">7. Contato</h2><p className="text-gray-600 mb-4">Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do formulário de contato em nosso site ou pelo WhatsApp.</p></section>
        </div>
      </div></div></main>
      <footer className="bg-gray-900 text-white py-8"><div className="container-custom"><div className="flex flex-col items-center gap-4"><p className="text-gray-500 text-sm text-center">{'© '}{new Date().getFullYear()}{' Serralheria em Guarulhos. Todos os direitos reservados.'}</p><p className="text-gray-500 text-sm text-center">{'Site desenvolvido por '}<a href="https://360mkthub.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-400 hover:text-blue-300 transition-colors">360MKTHub</a></p></div></div></footer>
    </div>
  )
}

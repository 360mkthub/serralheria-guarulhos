import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = { title: 'Politica de Privacidade', description: 'Politica de privacidade do site Serralheria em Guarulhos.', alternates: { canonical: 'https://serralheriaemguarulhos.com.br/privacidade' } }

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4"><div className="container-custom"><div className="flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="font-bold text-xl text-blue-700"><span className="block text-xs font-medium tracking-wider uppercase opacity-80">Serralheria</span><span className="block leading-tight">EM GUARULHOS</span></div></Link><Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"><ArrowLeft size={20} /><span>Voltar</span></Link></div></div></header>
      <main className="section-padding"><div className="container-custom max-w-4xl"><div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Politica de Privacidade</h1>
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Ultima atualizacao: {new Date().toLocaleDateString('pt-BR')}</p>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">1. Introducao</h2><p className="text-gray-600 mb-4">A Serralheria em Guarulhos esta comprometida em proteger a privacidade e a seguranca das informacoes pessoais de nossos clientes e visitantes do site. Esta Politica de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informacoes.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">2. Informacoes que Coletamos</h2><p className="text-gray-600 mb-4">Podemos coletar informacoes de contato (nome, telefone, e-mail e endereco), informacoes do projeto, informacoes tecnicas (endereco IP, tipo de navegador, paginas visitadas) e informacoes de comunicacao.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">3. Uso das Informacoes</h2><p className="text-gray-600 mb-4">Utilizamos suas informacoes para fornecer orcamentos e propostas, executar os servicos contratados, comunicar-nos sobre seu projeto, melhorar nossos servicos e cumprir obrigacoes legais.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies</h2><p className="text-gray-600 mb-4">Nosso site utiliza cookies para melhorar a experiencia de navegacao. Voce pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">5. Seus Direitos (LGPD)</h2><p className="text-gray-600 mb-4">De acordo com a Lei Geral de Protecao de Dados (LGPD), voce tem direito a acessar, corrigir, solicitar anonimizacao, portabilidade e revogar seu consentimento a qualquer momento.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">6. Contato</h2><p className="text-gray-600 mb-4">Se voce tiver alguma duvida sobre esta Politica de Privacidade ou quiser exercer seus direitos, entre em contato conosco pelo formulario de contato em nosso site ou pelo WhatsApp.</p></section>
        </div>
      </div></div></main>
      <footer className="bg-gray-900 text-white py-8"><div className="container-custom"><div className="flex flex-col items-center gap-4"><p className="text-gray-500 text-sm text-center">{'© '}{new Date().getFullYear()}{' Serralheria em Guarulhos. Todos os direitos reservados.'}</p><p className="text-gray-500 text-sm text-center">{'Site desenvolvido por '}<a href="https://360mkthub.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">360MKTHub</a></p></div></div></footer>
    </div>
  )
}

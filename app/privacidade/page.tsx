import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = { title: 'Política de privacidade', description: 'Política de privacidade do site Serralheria em Guarulhos.', alternates: { canonical: 'https://serralheriaemguarulhos.com.br/privacidade' } }

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4"><div className="container-custom"><div className="flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="font-bold text-xl text-blue-700"><span className="block text-xs font-medium tracking-wider uppercase opacity-80">Serralheria</span><span className="block leading-tight">EM GUARULHOS</span></div></Link><Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"><ArrowLeft size={20} /><span>Voltar</span></Link></div></div></header>
      <main className="section-padding"><div className="container-custom max-w-4xl"><div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Política de privacidade</h1>
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">1. Introdução</h2><p className="text-gray-600 mb-4">A Serralheria em Guarulhos está comprometida em proteger a privacidade e a segurança das informações pessoais de nossos clientes e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">2. Informações que coletamos</h2><p className="text-gray-600 mb-4">Podemos coletar informações de contato (nome, telefone, e-mail e endereço), informações do projeto, informações técnicas (endereço IP, tipo de navegador, páginas visitadas) e informações de comunicação.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">3. Uso das informações</h2><p className="text-gray-600 mb-4">Utilizamos suas informações para fornecer orçamentos e propostas, executar os serviços contratados, comunicar-nos sobre seu projeto, melhorar nossos serviços e cumprir obrigações legais.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">4. Cookies</h2><p className="text-gray-600 mb-4">Nosso site utiliza cookies para melhorar a experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">5. Seus direitos (LGPD)</h2><p className="text-gray-600 mb-4">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a acessar, corrigir, solicitar anonimização, portabilidade e revogar seu consentimento a qualquer momento.</p></section>
          <section className="mb-8"><h2 className="text-xl font-bold text-gray-900 mb-4">6. Contato</h2><p className="text-gray-600 mb-4">Se você tiver alguma dúvida sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco pelo formulário de contato em nosso site ou pelo WhatsApp.</p></section>
        </div>
      </div></div></main>
      <footer className="bg-gray-900 text-white py-8"><div className="container-custom"><div className="flex flex-col items-center gap-4"><p className="text-gray-500 text-sm text-center">{'© '}{new Date().getFullYear()}{' Serralheria em Guarulhos. Todos os direitos reservados.'}</p><p className="text-gray-500 text-sm text-center">{'Site desenvolvido por '}<a href="https://360mkthub.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-400 hover:text-blue-300 transition-colors">360MKTHub</a></p></div></div></footer>
    </div>
  )
}

import Link from 'next/link'
import { Facebook, Instagram, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Contato', href: '/contato' },
    { label: 'Localidades Atendidas', href: '/localidades' },
    { label: 'Blog', href: '/blog' },
  ]

  const serviceLinks = [
    { label: 'Portões Automáticos', href: '/servicos/portoes-automaticos' },
    { label: 'Grades de Segurança', href: '/servicos/grades-seguranca' },
    { label: 'Estruturas Metálicas', href: '/servicos/estruturas-metalicas' },
    { label: 'Escadas e Corrimãos', href: '/servicos/escadas-manutencao' },
  ]

  const localidadesLinks = [
    { label: 'Vila Galvão', href: '/localidades/vila-galvao' },
    { label: 'Macedo', href: '/localidades/macedo' },
    { label: 'Jardim Maia', href: '/localidades/jardim-maia' },
    { label: 'Vila Augusta', href: '/localidades/vila-augusta' },
    { label: 'Centro', href: '/localidades/centro' },
    { label: 'Jardim Cumbica', href: '/localidades/jardim-cumbica' },
    { label: 'Vila Barros', href: '/localidades/vila-barros' },
    { label: 'Ponte Grande', href: '/localidades/ponte-grande' },
    { label: 'Ver todos os bairros', href: '/localidades' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="block text-xs font-medium tracking-wider uppercase text-blue-400">Serralheria</span>
              <span className="block text-2xl font-bold">EM GUARULHOS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Somos especialistas em todos os tipos de serviços de serralheria em Guarulhos, incluindo fabricação e reparo de portões, estruturas metálicas, escadas e serviços de solda em geral. Qualidade e preço justo.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/serralheriaemguarulhos"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/serralheriaemguarulhos"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-lg mb-6">Links Rápidos</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-lg mb-6">Serviços</p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localidades */}
          <div className="lg:col-span-2">
            <p className="font-bold text-lg mb-6">Principais Localidades</p>
            <ul className="grid grid-cols-2 gap-2">
              {localidadesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Atendemos toda Guarulhos e região</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
              </div>
            </div>
            <a
              href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Serralheria em Guarulhos. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm text-center">
              Site desenvolvido, otimizado e mantido por{' '}
              <a 
                href="https://360mkthub.com/" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                360MKTHub
              </a>
            </p>
            <div className="flex gap-6 mt-2">
              <Link href="/termos" className="text-gray-500 hover:text-white text-sm transition-colors">
                Termos de uso
              </Link>
              <Link href="/privacidade" className="text-gray-500 hover:text-white text-sm transition-colors">
                Política de privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

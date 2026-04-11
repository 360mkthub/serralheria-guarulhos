'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocalidadesOpen, setIsLocalidadesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const serviceItems = [
    { label: 'Portões Automáticos', href: '/servicos/portoes-automaticos' },
    { label: 'Grades de Segurança', href: '/servicos/grades-seguranca' },
    { label: 'Estruturas Metálicas', href: '/servicos/estruturas-metalicas' },
    { label: 'Escadas e Corrimãos', href: '/servicos/escadas-manutencao' },
  ]

  const localidadesItems = [
    { label: 'Vila Galvão', href: '/localidades/vila-galvao' },
    { label: 'Macedo', href: '/localidades/macedo' },
    { label: 'Jardim Maia', href: '/localidades/jardim-maia' },
    { label: 'Vila Augusta', href: '/localidades/vila-augusta' },
    { label: 'Centro', href: '/localidades/centro' },
    { label: 'Jardim Cumbica', href: '/localidades/jardim-cumbica' },
    { label: 'Vila Barros', href: '/localidades/vila-barros' },
    { label: 'Ponte Grande', href: '/localidades/ponte-grande' },
    { label: 'Parque Cecap', href: '/localidades/parque-cecap' },
    { label: 'Vila Endres', href: '/localidades/vila-endres' },
    { label: 'Jardim das Oliveiras', href: '/localidades/jardim-das-oliveiras' },
    { label: 'Vila Cocaia', href: '/localidades/vila-cocaia' },
    { label: 'Vila Rio de Janeiro', href: '/localidades/vila-rio-de-janeiro' },
    { label: 'Ver todos', href: '/localidades' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`font-bold text-xl md:text-2xl transition-colors ${
              isScrolled || pathname !== '/' ? 'text-blue-700' : 'text-white'
            }`}>
              <span className="block text-xs font-medium tracking-wider uppercase opacity-80">Serralheria</span>
              <span className="block leading-tight">EM GUARULHOS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
              } ${isActive('/') ? 'text-blue-600' : ''}`}
            >
              Home
            </Link>
            
            <Link
              href="/quem-somos"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
              } ${isActive('/quem-somos') ? 'text-blue-600' : ''}`}
            >
              Quem Somos
            </Link>
            
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
                } ${serviceItems.some(s => isActive(s.href)) ? 'text-blue-600' : ''}`}
              >
                Serviços
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100"
                >
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                        isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contato"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
              } ${isActive('/contato') ? 'text-blue-600' : ''}`}
            >
              Contato
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsLocalidadesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
                } ${isActive('/localidades') ? 'text-blue-600' : ''}`}
              >
                Localidades
                <ChevronDown size={16} className={`transition-transform ${isLocalidadesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLocalidadesOpen && (
                <div
                  onMouseLeave={() => setIsLocalidadesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100 max-h-96 overflow-y-auto"
                >
                  {localidadesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                        isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
              } ${isActive('/blog') ? 'text-blue-600' : ''}`}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || pathname !== '/' ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20 bg-white/95 backdrop-blur-sm rounded-xl p-4">
            <nav className="flex flex-col gap-3">
              <Link href="/" className={`text-sm font-medium py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}>
                Home
              </Link>
              <Link href="/quem-somos" className={`text-sm font-medium py-2 ${isActive('/quem-somos') ? 'text-blue-600' : 'text-gray-700'}`}>
                Quem Somos
              </Link>
              
              <div className="border-t border-gray-200 pt-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Serviços</span>
                {serviceItems.map((item) => (
                  <Link key={item.href} href={item.href} className={`block py-2 text-sm ${isActive(item.href) ? 'text-blue-600' : 'text-gray-700'}`}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link href="/contato" className={`text-sm font-medium py-2 ${isActive('/contato') ? 'text-blue-600' : 'text-gray-700'}`}>
                Contato
              </Link>

              <div className="border-t border-gray-200 pt-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Localidades</span>
                <div className="grid grid-cols-2 gap-1">
                  {localidadesItems.map((item) => (
                    <Link key={item.href} href={item.href} className={`block py-2 text-sm ${isActive(item.href) ? 'text-blue-600' : 'text-gray-700'}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/blog" className={`text-sm font-medium py-2 border-t border-gray-200 pt-3 ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700'}`}>
                Blog
              </Link>
              
              <a
                href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm mt-4 text-center"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const GTM_ID = 'GTM-MHRMS653'

export const metadata: Metadata = {
  metadataBase: new URL('https://serralheriaemguarulhos.com'),
  title: {
    default: 'Serralheria em Guarulhos | Portoes Automaticos, Grades e Estruturas Metalicas',
    template: '%s | Serralheria em Guarulhos',
  },
  description:
    'Serralheria em Guarulhos com mais de 15 anos de experiencia. Portoes automaticos, grades de protecao, estruturas metalicas e coberturas. Orcamento gratis em 24h!',
  keywords: [
    'serralheria em Guarulhos',
    'serralheria Guarulhos',
    'portoes automaticos Guarulhos',
    'grades de protecao Guarulhos',
    'estruturas metalicas Guarulhos',
    'serralheiro Guarulhos',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://serralheriaemguarulhos.com',
    siteName: 'Serralheria em Guarulhos',
    title: 'Serralheria em Guarulhos | Portoes Automaticos, Grades e Estruturas Metalicas',
    description:
      'Serralheria em Guarulhos com mais de 15 anos de experiencia. Orcamento gratis em 24h!',
    images: [
      {
        url: '/images/serralheria-guarulhos.jpeg',
        width: 1200,
        height: 630,
        alt: 'Serralheria em Guarulhos',
      },
    ],
  },
  alternates: {
    canonical: 'https://serralheriaemguarulhos.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}

import Link from 'next/link'
import { Award, Shield, Check } from 'lucide-react'

interface AuthorBoxProps {
  showSchema?: boolean
}

const authorData = {
  name: 'Mário Vargas',
  jobTitle: 'Serralheiro Especialista',
  description:
    'Especialista em serralheria em Guarulhos com 15 anos de experiência em fabricação e instalação de portões automáticos, grades de segurança e estruturas metálicas. Certificado nas normas regulamentadoras NR-12, NR-18 e NR-35.',
  image: '/images/serralheiro-mario-vargas-serralheria-guarulhos.jpg',
  sameAs: [
    'https://www.linkedin.com/in/mariovargas',
    'https://www.instagram.com/serralheriaemguarulhos',
    'https://www.facebook.com/serralheriaemguarulhos',
  ],
  certifications: ['NR-12', 'NR-18', 'NR-35'],
  experience: '15 anos',
}

const AuthorBox = ({ showSchema = true }: AuthorBoxProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorData.name,
    jobTitle: authorData.jobTitle,
    description: authorData.description,
    image: `https://serralheriaemguarulhos.com.br${authorData.image}`,
    sameAs: authorData.sameAs,
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'Serralheria em Guarulhos',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Guarulhos',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
  }

  return (
    <>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <img
                src={authorData.image}
                alt={authorData.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
              <Link
                href="/quem-somos#mario"
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {authorData.name}
              </Link>
              <span className="hidden md:inline text-gray-400">{'\u2022'}</span>
              <span className="text-blue-600 font-medium">{authorData.jobTitle}</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{authorData.description}</p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                {'Certificações:'}
              </span>
              {authorData.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                >
                  <Shield className="w-3 h-3" />
                  {cert}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                {authorData.experience} de experiência
              </span>
              <span className="flex items-center gap-1 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Guarulhos e região
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorBox

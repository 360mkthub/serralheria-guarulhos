import Link from 'next/link'

export interface RelatedLinkItem {
  text: string
  href: string
}

interface RelatedLinksProps {
  items: RelatedLinkItem[]
}

export default function RelatedLinks({ items }: RelatedLinksProps) {
  if (!items.length) return null

  return (
    <section
      className="mt-10 rounded-xl border border-blue-100/80 bg-gradient-to-br from-slate-50 to-blue-50/50 px-5 py-6 sm:px-6"
      aria-labelledby="related-links-heading"
    >
      <h2 id="related-links-heading" className="text-lg font-semibold text-blue-900 mb-4">
        Saiba mais sobre portões e serralheria em Guarulhos
      </h2>
      <ul className="list-none space-y-2.5 m-0 p-0">
        {items.map((item, index) => (
          <li key={`${item.href}-${index}`}>
            <Link
              href={item.href}
              className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors leading-snug"
            >
              <span className="text-blue-600 shrink-0 font-medium" aria-hidden>
                →
              </span>
              <span className="underline-offset-2 group-hover:underline">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

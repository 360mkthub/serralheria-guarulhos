/**
 * Imagem usada no Hero e na seção "Por Que Escolher..." (About).
 * Padrão: arquivo em public/images (deploy deve incluir a pasta em Linux com o mesmo nome/casing).
 * Se o arquivo não estiver no servidor, defina NEXT_PUBLIC_HERO_IMAGE_URL com URL absoluta (ex.: CDN ou WordPress).
 */
export const HERO_ABOUT_IMAGE_SRC: string =
  typeof process.env.NEXT_PUBLIC_HERO_IMAGE_URL === 'string' &&
  process.env.NEXT_PUBLIC_HERO_IMAGE_URL.trim() !== ''
    ? process.env.NEXT_PUBLIC_HERO_IMAGE_URL.trim()
    : '/images/serralheria-guarulhos.jpeg'

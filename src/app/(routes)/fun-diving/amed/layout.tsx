import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/amed',
  },
  title: 'Bali Stingray Divers | Diving in Amed',
  description: 'Amed diving trip is a hidden gem in the North East of Bali Combination of natural and artificial reefs is Perfect for photography.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Menjangan Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Amed',
    description: 'Amed diving trip is a hidden gem in the North East of Bali Combination of natural and artificial reefs is Perfect for photography.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function AmedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

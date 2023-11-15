import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/tulamben',
  },
  title: 'Bali Stingray Divers | Diving in Tulamben',
  description: 'Tulamben offers USAT Liberty Shipwreck (1942) colourful and diverse marine life. Tulamben diving is an excellent site for Beginners to Expert.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Nusa Penida Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Tulamben',
    description: 'Tulamben offers USAT Liberty Shipwreck (1942) colourful and diverse marine life. Tulamben diving is an excellent site for Beginners to Expert.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function TulambenLayout({
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

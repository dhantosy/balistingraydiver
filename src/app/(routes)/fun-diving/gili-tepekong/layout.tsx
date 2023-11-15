import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/gili-tepekong',
  },
  title: 'Bali Stingray Divers | Diving in Gili Tepekong',
  description: 'Gili Tepekong & Mimpang diving trip is suitable for experienced divers. The abundance of marine life Shark encounters. Home of blacktip and white tip reef sharks and barracuda, stingray, trevally, sweetlips, napoleon fish, grouper, moray, nudibranch, cuttlefish, barracudas and turtles. With chances to see Mola around June - October.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Menjangan Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Gili Tepekong',
    description: 'Gili Tepekong & Mimpang diving trip is suitable for experienced divers. The abundance of marine life Shark encounters. Home of blacktip and white tip reef sharks and barracuda, stingray, trevally, sweetlips, napoleon fish, grouper, moray, nudibranch, cuttlefish, barracudas and turtles. With chances to see Mola around June - October.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function GiliTepekongLayout({
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

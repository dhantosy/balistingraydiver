import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/menjangan',
  },
  title: 'Bali Stingray Divers | Diving in Menjangan',
  description: 'The home Turtles, Fire Dartfish, Red-Toothed Triggerfish, Wall diving, Nudibranchs, Orangutan Crabs Bat fish, Blue dogtooth tuna, and Tip Reef in Menjangan.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Menjangan Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Menjangan',
    description: 'The home Turtles, Fire Dartfish, Red-Toothed Triggerfish, Wall diving, Nudibranchs, Orangutan Crabs Bat fish, Blue dogtooth tuna, and Tip Reef in Menjangan.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function MenjanganLayout({
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/nusa-penida',
  },
  title: 'Bali Stingray Divers | Diving in Nusa Penida',
  description: 'Nusa Penida offers vibrant corals and unique marine life Exhilarating drift sites Nusa Penida diving trip is a favourite for experienced divers. it’s the only dive site in Bali where you can regularly see Manta all year round and Oceanic Sunfish (Mola) – mainly between July and October. Bali’s home to many reef fish including white tip reef sharks, eagle rays and blue-spotted stingrays, lionfish, octopus, moray eels, scorpionfish, and turtles.',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Nusa Penida Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Nusa Penida',
    description: 'Nusa Penida offers vibrant corals and unique marine life Exhilarating drift sites Nusa Penida diving trip is a favourite for experienced divers. it’s the only dive site in Bali where you can regularly see Manta all year round and Oceanic Sunfish (Mola) – mainly between July and October. Bali’s home to many reef fish including white tip reef sharks, eagle rays and blue-spotted stingrays, lionfish, octopus, moray eels, scorpionfish, and turtles.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function NusaPenidaLayout({
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/fun-diving/padang-bai',
  },
  title: 'Bali Stingray Divers | Diving in Padang Bai',
  description: 'Padang Bai offers colourful and diverse marine life Perfect for snorkelling. Padang Bai diving trip is ideal for macro photography. The marine life is abundant and healthy here. Cuttlefish, leaf scorpionfish, Crocodile fish, Oriental sweetlips, Moray eels, many Clownfish, and anemone fish can be seen during a Padang Bai diving. Chances of seeing sharks & turtles too!',
  keywords: 'Dive Center, Bali Dive Center, Scuba Dive Bali, Nusa Penida Diving, Tulamben Diving, Amed Diving, Nusa Penida Diving, Scuba Diving, Stingray, Bali, Diving',
  openGraph: {
    title: 'Bali Stingray Divers | Diving in Padang Bai',
    description: 'Padang Bai offers colourful and diverse marine life Perfect for snorkelling. Padang Bai diving trip is ideal for macro photography. The marine life is abundant and healthy here. Cuttlefish, leaf scorpionfish, Crocodile fish, Oriental sweetlips, Moray eels, many Clownfish, and anemone fish can be seen during a Padang Bai diving. Chances of seeing sharks & turtles too!',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function PadangBaiLayout({
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

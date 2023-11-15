import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/dive-courses/open-water',
  },
  title: 'Bali Stingray Divers | Open Water Certification',
  description: 'The Open Water course is the world’s most popular diving course. This beginner PADI certification will teach you the skills to dive safely and independently anywhere in the world. And what better place to do it than the incredible Island of Bali. There is so much to explore! After you get this diving certification your life will never be the same.',
  keywords: 'Open Water Course, Diving Course Bali, Bali Diving Course, PADI diving course in Bali',
  openGraph: {
    title: 'Bali Stingray Divers | Open Water Certification',
    description: 'The Open Water course is the world’s most popular diving course. This beginner PADI certification will teach you the skills to dive safely and independently anywhere in the world. And what better place to do it than the incredible Island of Bali. There is so much to explore! After you get this diving certification your life will never be the same.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function OpenWaterLayout({
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/dive-courses/divemaster',
  },
  title: 'Bali Stingray Divers | Divemaster Certification',
  description: 'The Divemaster marks you as a person who has a high level of personal diving skill, has instructor-level knowledge of diving theory, received significant training in how to assist an instructor during training activities, and has the ability to assume appropriate responsibilities that benefit the welfare of other divers.',
  keywords: 'Divemaster Course, Diving Course Bali, Bali Diving Course, PADI diving course in Bali',
  openGraph: {
    title: 'Bali Stingray Divers | Divemaster Certification',
    description: 'The Divemaster marks you as a person who has a high level of personal diving skill, has instructor-level knowledge of diving theory, received significant training in how to assist an instructor during training activities, and has the ability to assume appropriate responsibilities that benefit the welfare of other divers.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function DivemasterLayout({
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

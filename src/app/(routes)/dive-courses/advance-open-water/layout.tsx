import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/dive-courses/advance-open-water',
  },
  title: 'Bali Stingray Divers | Advance Open Water Certification',
  description: 'Advance Open Water course is the next step after you have completed your Open Water certification. This helps build confidence and advance your scuba diving skills through various adventure dives. You will complete the Deep and Navigation dive and can choose 3 more from Wreck, Drift, Boat, Naturalist, Fish ID, Peak Performance Buoyancy and Night.',
  keywords: 'Advance Open Water Diving Course, Diving Course Bali, Bali Diving Course, PADI diving course in Bali',
  openGraph: {
    title: 'Bali Stingray Divers | Advance Open Water Certification',
    description: 'Advance Open Water course is the next step after you have completed your Open Water certification. This helps build confidence and advance your scuba diving skills through various adventure dives. You will complete the Deep and Navigation dive and can choose 3 more from Wreck, Drift, Boat, Naturalist, Fish ID, Peak Performance Buoyancy and Night.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function AdvanceOpenWaterLayout({
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

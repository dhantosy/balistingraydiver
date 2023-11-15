import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/beyond-bali',
  },
  title: 'Bali Stingray Divers | Beyond Bali',
  description: 'we are from Travel Agent INDO OCEAN EXPLORER and BALI STINGRAY DIVERS Dive Centre in Sanur, Bali, Indonesia. Our services focus on sports travel (Diving), making Liveaboard trips, land-based or Land tour trips beyond exotic locations in Indonesia, and Diving around Bali Area. We also provide Luxury Yacht private Charter with activities: Diving Bali, Fishing, and Sailing around Bali Area.',
  keywords: 'Beyond Bali, Travel Agent, Indo Ocean Explorer, Liveaboard trip, land based trip, yacht, private charter',
  openGraph: {
    title: 'Bali Stingray Divers | Beyond Bali',
    description: 'we are from Travel Agent INDO OCEAN EXPLORER and BALI STINGRAY DIVERS Dive Centre in Sanur, Bali, Indonesia. Our services focus on sports travel (Diving), making Liveaboard trips, land-based or Land tour trips beyond exotic locations in Indonesia, and Diving around Bali Area. We also provide Luxury Yacht private Charter with activities: Diving Bali, Fishing, and Sailing around Bali Area.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function BeyondaBaliLayout({
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

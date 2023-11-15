import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.balistingraydiver.com'),
  alternates: {
    canonical: '/dive-courses/rescue-diver',
  },
  title: 'Bali Stingray Divers | Rescue Diver Certification',
  description: 'the PADI Rescue Diver course prepares you to deal with minor and significant dive emergencies (above and below the surface) using various techniques. Through knowledge development and rescue exercises, you learn what to look for and respond to. During rescue scenarios, you put into practice your knowledge and skills. The different topics include Self-rescue, recognising and managing panic, fear and stress in other divers and ultimately being equipped to prevent emergencies and provide emergency care if the situation arises.',
  keywords: 'Rescue Diving Course, Diving Course Bali, Bali Diving Course, PADI diving course in Bali',
  openGraph: {
    title: 'Bali Stingray Divers | Rescue Diver Certification',
    description: 'the PADI Rescue Diver course prepares you to deal with minor and significant dive emergencies (above and below the surface) using various techniques. Through knowledge development and rescue exercises, you learn what to look for and respond to. During rescue scenarios, you put into practice your knowledge and skills. The different topics include Self-rescue, recognising and managing panic, fear and stress in other divers and ultimately being equipped to prevent emergencies and provide emergency care if the situation arises.',
    type: 'website',
    images: '/assets/images/banner-fb.jpg'
  }
}

export default function RescueDiverLayout({
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

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { Josefin_Sans, Open_Sans } from 'next/font/google'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import WhatsappWidget from '@/app//_components/WhatsappWidget'
import Providers from '@/providers/Providers'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  display: 'swap',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bali Stingray Diver',
  description: 'Bali Stingray Diver',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='/assets/images/video-dive.mp4'
          as='fetch'
        />
      </head>
      <body className={`${josefinSans.variable} ${openSans.variable}`} suppressHydrationWarning>
        <NextTopLoader
          color='#20C7CA'
          height={5}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsappWidget />
        </Providers>
      </body>
    </html>
  )
}

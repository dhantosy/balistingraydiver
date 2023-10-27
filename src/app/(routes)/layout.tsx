import type { Metadata } from 'next'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import Providers from '@/providers/Providers'
import { Josefin_Sans, Open_Sans } from 'next/font/google'

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
      <body className={`${josefinSans.variable} ${openSans.variable}`} suppressHydrationWarning>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

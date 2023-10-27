import type { Metadata } from 'next'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import Providers from '@/providers/Providers'
import { Josefin_Sans } from 'next/font/google'

const openSans = Josefin_Sans({ subsets: ['latin'] })

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
      <body className={openSans.className} suppressHydrationWarning>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

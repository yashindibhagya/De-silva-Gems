import type { Metadata } from 'next'
import { Cinzel, Playfair_Display, Inter } from 'next/font/google'
import { LenisProvider } from '@/hooks/useLenis'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ceylon Gems | Rare Sri Lankan Gemstones',
  description:
    'Discover the world\'s finest Sri Lankan gemstones. Sapphires, rubies, and rare gems from Ratnapura, certified and curated for collectors and jewelers worldwide.',
  keywords: ['Ceylon gems', 'Sri Lanka sapphire', 'blue sapphire', 'rare gemstones', 'Ratnapura'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}
      style={{
        fontFamily: 'var(--font-inter)',
        backgroundColor: '#0A0A0A',
      }}
    >
      <body>
        <LoadingScreen />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}

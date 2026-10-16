import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Rahul Sharma - Product Manager | AI Platforms, DevEx, Search',
  description:
    'Rahul Sharma is a Product Manager with 10+ years building AI-enabled platforms, developer experience, and search & conversational (NLP) products at PayPal, JPMorganChase, Workday, and Intuit.',
  generator: 'v0.app',
  openGraph: {
    title: 'Rahul Sharma - Product Manager',
    description:
      'AI-enabled Platforms, Developer Experience, and Search & Conversations (NLP). 10+ years driving 0-to-1 products with measurable impact.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbfaf7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

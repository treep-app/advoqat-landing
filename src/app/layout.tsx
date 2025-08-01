import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advoqat - Legal Solutions Made Simple',
  description: 'Connect with expert lawyers, generate legal documents, and get AI-powered legal guidance. Your comprehensive legal platform for all your legal needs.',
  keywords: 'legal, lawyer, consultation, AI legal assistant, document generation, legal platform',
  authors: [{ name: 'Advoqat Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Advoqat - Legal Solutions Made Simple',
    description: 'Connect with expert lawyers, generate legal documents, and get AI-powered legal guidance.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advoqat - Legal Solutions Made Simple',
    description: 'Connect with expert lawyers, generate legal documents, and get AI-powered legal guidance.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
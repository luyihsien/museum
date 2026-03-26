import type { Metadata } from 'next'
import { Noto_Sans_TC, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc"
});
const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: '國際兒童博物館交流論壇 | International Children\'s Museum Exchange Forum',
  description: '2025國際兒童博物館交流論壇 - 最新消息與精彩回顧',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansTC.variable} ${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

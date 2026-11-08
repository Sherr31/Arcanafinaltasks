'use client'

import '@/app/globals.css'
import {Outfit} from 'next/font/google'
import Script from "next/script";

const outfit = Outfit({subsets: ['latin']})

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  const metadata = {
    title: 'Dreamocel',
    description: 'Dreamocel. Professional Dota 2 Player.',
    author: 'Irfan Fakhri - katsuotz.com',
    keywords: 'dreamocel, fervian, randy, dota, dota 2, the international, esport, moba'
  }

  return (
    <html lang="en">
    <head>
      <title>{metadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metadata.description}/>
      <meta name="keywords" content={metadata.keywords}/>
      <meta name="author" content={metadata.author}/>
    </head>
    <body className={outfit.className}>
    <main className="relative">
      {children}
    </main>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-2ZJPZRKNC3" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2ZJPZRKNC3');
        `}
    </Script>
    </body>
    </html>
  )
}

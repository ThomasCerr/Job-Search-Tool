import '../styles/globals.css'
import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Search Fresh Jobs — LinkedIn Hourly Generator',
  description: 'Be the first to apply. Search LinkedIn jobs posted in the last few hours and get ahead of the pack.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DTDDY9BW5R"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DTDDY9BW5R');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}

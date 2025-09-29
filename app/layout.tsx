import '../styles/globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Search Fresh Jobs — LinkedIn Hourly Generator',
  description: 'Be the first to apply. Search LinkedIn jobs posted in the last few hours and get ahead of the pack.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

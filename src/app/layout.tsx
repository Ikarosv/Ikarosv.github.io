import React from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Fira_Code } from 'next/font/google'
import Header from '@/components/Header/index'

const FiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Ikaro Vieira',
  description: 'Portfolio de Ikaro Vieira (Ikarosv)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${FiraCode.variable} font-sans bg-dark bg-no-repeat text-gray`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

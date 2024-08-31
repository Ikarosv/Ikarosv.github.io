import React from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Fira_Code } from 'next/font/google'
import Header from '@/components/Header/index'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/Footer'
import Media from '@/components/Media'
import getLanguage from '@/utils/getLanguage'

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
  const lang = getLanguage()
  return (
    <html lang={lang}>
      <body
        className={twMerge(
          `${FiraCode.variable} font-fira bg-dark bg-no-repeat text-gray overflow-x-hidden h-full min-h-screen`,
        )}
      >
        <main className="max-w-7xl mx-auto md:px-[10.69rem] w-screen overflow-x-hidden">
          <section className="absolute top-0 left-4 gap-1 hidden flex-col items-center md:flex">
            <span className="w-px h-48 bg-gray block" />
            <div className="flex flex-col gap-1">
              <Media />
            </div>
          </section>
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

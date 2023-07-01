import React from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Fira_Code } from 'next/font/google'
import Header from '@/components/Header/index'
import Image from 'next/image'

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
        className={`${FiraCode.variable} font-fira bg-dark bg-no-repeat text-gray md:px-[10.69rem]`}
      >
        <section className="absolute top-0 left-4 gap-1 flex flex-col items-center md:hidden">
          <span className="w-px h-48 bg-gray block" />
          <div className="flex flex-col">
            <a
              href="https://github.com/Ikarosv"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="Imagem do Github"
                width="32"
                height="32"
              />
            </a>
          </div>
        </section>
        <Header />
        {children}
      </body>
    </html>
  )
}

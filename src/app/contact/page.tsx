import getLanguage from '@/utils/getLanguage'
import React from 'react'
import translations from '../../../public/translations'
import Image from 'next/image'
import SendEmail from '@/components/SendEmail'
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLanguage()
  const { contact } = translations[lang]

  return {
    title: `Ikaro Vieira | ${capitalizeFirstLetter(contact)}`,
  }
}

export default function Contact() {
  const lang = getLanguage()
  const { contact, talkToMe, contactContent, messageMe } = translations[lang]
  return (
    <section className="px-3 md:px-0">
      <h1 className="text-white font-bold text-[2rem]">
        <span className="text-primary">/</span>
        {contact}
      </h1>
      <p>{talkToMe}</p>
      <div className="mt-4 flex flex-wrap md:flex-nowrap gap-2 items-center justify-between">
        <p className="flex-shrink">{contactContent}</p>
        <div className="flex flex-col p-4 border border-gray border-solid w-max">
          <h5 className="whitespace-nowrap font-semibold text-white">
            {messageMe}
          </h5>
          <div className="flex items-center w-max">
            <Image src="/icons/email.svg" width={32} height={32} alt="email" />
            <a
              href="mailto:ikarovieiraa@gmail.com"
              className="text-gray inline-block"
            >
              ikarovieiraa@gmail.com
            </a>
          </div>
          <div className="flex items-center w-max">
            <Image
              src="/icons/discord.svg"
              width={32}
              height={32}
              alt="discord icon"
            />
            <a
              href="https://discord.com/invite/77wvu2Cm"
              className="text-gray inline-block"
            >
              ikarosv
            </a>
          </div>
        </div>
      </div>
      <SendEmail lang={lang} />
    </section>
  )
}

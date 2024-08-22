import React from 'react'
import NameLogo from '../NameLogo'
import { cookies } from 'next/headers'
import translations, { Lang } from '../../../public/translations'
import Media from '../Media'

export default function Footer() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'
  const { fullStackWebDeveloper, media } = translations[lang]
  return (
    <section className="border-t border-gray border-solid h-52 py-8 md:mt-36 mt-10 w-screen">
      <div className="flex max-w-7xl m-auto md:px-[10.69rem] w-screen overflow-x-hidden">
        <div className="flex flex-col gap-2 flex-grow flex-shrink-0">
          <div className="flex gap-2 items-end">
            <NameLogo />
            <a
              href="mailto:ikarovieiraa@gmail.com"
              className="text-gray inline-block"
            >
              ikarovieiraa@gmail.com
            </a>
          </div>
          <p className="text-white">{fullStackWebDeveloper}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="whitespace-nowrap font-semibold text-white capitalize text-lg">
            {media}
          </h3>
          <div className="flex gap-1">
            <Media />
          </div>
        </div>
      </div>
    </section>
  )
}

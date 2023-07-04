import { cookies } from 'next/headers'
import translations, { Lang } from '../../public/translations'
import Image from 'next/image'
import DotGroup from '@/components/DotGroup'
import ButtonLive from '@/components/Buttons/ButtonLive'

export default function Home() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'
  const { homeTitle, homeDescription, working, contactMe } = translations[lang]
  return (
    <section className="w-full pt-[2.12rem] md:pt-[3.87rem] flex flex-col md:flex-row justify-around gap-4">
      <div className="flex flex-col md:mt-16">
        <h1
          className="font-semibold font-fira text-3xl text-white"
          dangerouslySetInnerHTML={{ __html: homeTitle }}
        />
        <p className="text-gray font-fira my-[1.5rem]">{homeDescription}</p>
        <ButtonLive className="max-md:hidden">{contactMe}</ButtonLive>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative -z-10">
          <Image
            src="/IOutlined.png"
            alt="I maiúsculo"
            width="158"
            height="243"
            className="-z-10 absolute top-1 w-auto h-[70%]"
          />
          <Image
            src="/me2.png"
            alt="Foto de Ikaro Vieira"
            width="457"
            height="366"
            className=" h-auto w-[28.5625rem]"
          />
          <div className="grid grid-rows-5 grid-cols-5 w-[5.25rem] gap-4 absolute bottom-5 right-2">
            <DotGroup />
          </div>
        </div>
        <div className="flex border border-solid border-gray p-2 gap-2 items-center md:min-w-max w-full">
          <span className="bg-primary min-w-[1rem] min-h-[1rem]" />
          <p className="text-gray">
            {working}
            <a
              href="https://Ikarosv.github.io"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white break-words break-keep"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

import Home from '@/components/Home'
import { cookies } from 'next/headers'
import translations, { Lang } from '../../public/translations'
import Image from 'next/image'

export default function Homee() {
  const lang: Lang = (cookies().get('LANG')?.value as Lang) ?? 'pt'

  const { quote } = translations[lang]
  return (
    <main className="px-3 md:px-0">
      <Home />
      <figure className="mt-28 mb-[4.62rem] border w-fit border-solid border-gray relative mx-auto -z-10 text-white">
        <Image
          src="/icons/quotes.svg"
          width={25.47}
          height={20.7}
          alt="Aspas"
          className="w-fit h-fit absolute px-2 py-1 -top-[0.875rem] left-[0.6875rem] bg-dark"
        />
        <blockquote className="text-2xl p-8 font-medium">{quote}</blockquote>
        <Image
          src="/icons/quotes.svg"
          width={25.47}
          height={20.7}
          alt="Aspas"
          className="w-fit h-fit absolute px-2 py-1 right-[1.033rem] -bottom-[0.8565rem] bg-dark z-10"
        />
        <figcaption className="text-2xl absolute -right-px font-normal border border-solid border-gray p-4">
          - Dr. Who
        </figcaption>
      </figure>
    </main>
  )
}

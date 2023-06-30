import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import translations from '../../../public/translations'
import DropdownHeader from './DropdownHeader'
import NavigationHeader from './NavigationHeader'
import MenuHamburguer from './MenuHamburguer'

function Header() {
  const cookiesHandler = cookies()
  const clientLang: keyof typeof translations =
    (cookiesHandler.get('LANG')?.value as 'en' | 'pt') ?? 'pt'
  const lang = clientLang in translations ? clientLang : 'pt'
  return (
    <header className="bg-dark flex flex-col justify-end h-header-height pb-2 pl-3 md:pl-0 top-0 sticky">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            className="h-4 mr-2"
            width={16}
            height={16}
            alt="Ikarosv logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ikarosv
          </span>
        </Link>
        <nav className="flex items-center font-normal text-2xl md:hidden">
          <MenuHamburguer lang={lang} />
        </nav>
        <nav
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <NavigationHeader lang={lang} />
            <li>
              <DropdownHeader lang={lang} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

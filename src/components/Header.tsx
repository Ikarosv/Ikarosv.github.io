import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import translations from '../../public/translations'
import DropdownHeader from './DropdownHeader'

type NavItems = {
  name: string
  href: string
}

function Header() {
  const clientLang: keyof typeof translations =
    (cookies().get('LANG')?.value as 'en' | 'pt') ?? 'pt'
  const lang = clientLang in translations ? clientLang : 'pt'
  const NAVIGATION_ITEMS: NavItems[] = [
    {
      name: translations[lang].home,
      href: '/',
    },
    {
      name: translations[lang].projects,
      href: '/projects',
    },
    {
      name: translations[lang].about_me,
      href: '/about',
    },
    {
      name: translations[lang].contact,
      href: '/contact',
    },
  ]
  return (
    <nav className="bg-dark max-w-screen-xl flex flex-col justify-end h-[3.813rem] pb-2">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            className="h-4 mr-4"
            width={16}
            height={16}
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ikarosv
          </span>
        </Link>
        <div className="flex items-center">
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={`${item.name}-${item.href}`}>
                <Link
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-gray hover:text-white md:p-0"
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <DropdownHeader lang={lang} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
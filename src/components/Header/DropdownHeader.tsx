'use client'
import { Menu, Transition } from '@headlessui/react'
import translations from '../../../public/translations'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

export default function DropdownHeader({ lang }: { lang: string }) {
  const pathname = usePathname()
  return (
    <Menu>
      <Menu.Button className="py-2 pl-3 pr-4 text-gray ui-open:text-white font-bold hover:text-white md:p-0 flex items-center">
        {lang.toUpperCase()}
        <svg
          className="ui-open:rotate-180 transition-transform duration-300 ml-2"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.707107"
            y1="1.29289"
            x2="5.70711"
            y2="6.29289"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="4.29289"
            y1="6.29289"
            x2="9.29289"
            y2="1.29289"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-dark border border-gray border-solid focus:outline-none">
          {Object.keys(translations).map((lang) => (
            <Menu.Item key={`${lang}-option-translation`}>
              <a
                className="p-1 uppercase block hover:text-white font-normal"
                onClick={() => {
                  document.cookie = `LANG=${lang}; path=/`
                }}
                href={`/${pathname.split('/')[1]}`}
              >
                {lang}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

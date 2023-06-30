'use client'
import { Menu } from '@headlessui/react'
import translations from '../../../public/translations'
import NavigationHeader from './NavigationHeader'
import React from 'react'
import DropdownHeader from './DropdownHeader'

export default function MenuHamburguer({
  lang,
}: {
  lang: keyof typeof translations
}) {
  const defaultStripeClasses = 'border border-solid border-gray transition-all'

  return (
    <Menu>
      <Menu.Button className="py-2 pl-3 pr-4 text-gray font-bold md:p-0 flex flex-col items-end focus:outline-none md:hidden gap-1">
        <span
          className={`${defaultStripeClasses} duration-300 w-6 ui-open:rotate-45`}
        ></span>
        <span
          className={`${defaultStripeClasses} duration-500 w-4 ui-open:-rotate-45 ui-open:w-6 ui-open:-translate-y-[0.36rem]`}
        ></span>
      </Menu.Button>
      <Menu.Items className="absolute top-0 right-0 mt-header-height origin-top-right w-screen h-[calc(100vh-var(--header-height))] bg-dark list-none">
        {React.Children.map(<NavigationHeader lang={lang} />, (child) => (
          <Menu.Item>{child}</Menu.Item>
        ))}
        <Menu.Item>
          <DropdownHeader lang={lang} />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

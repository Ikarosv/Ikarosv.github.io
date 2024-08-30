'use client'
import Link from 'next/link'
import translations from '../../../public/translations'
import { usePathname } from 'next/navigation'

type NavItems = {
  name: string
  href: string
}

export default function NavigationHeader({
  lang,
  onClick,
}: {
  lang: keyof typeof translations
  onClick?: () => void
}) {
  const pathname = usePathname()
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
      name: translations[lang].aboutMe,
      href: '/about',
    },
    {
      name: translations[lang].contact,
      href: '/contact',
    },
  ]
  return NAVIGATION_ITEMS.map((item) => (
    <li key={`${item.name}-${item.href}`}>
      <Link
        href={item.href}
        onClick={onClick}
        className={`block py-2 pl-3 pr-4 text-gray hover:text-white md:p-0 ${
          pathname === item.href ? 'text-white font-bold' : ''
        }`}
      >
        <span className="text-primary">#</span>
        {item.name}
      </Link>
    </li>
  ))
}

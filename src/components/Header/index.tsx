import DropdownHeader from './DropdownHeader'
import NavigationHeader from './NavigationHeader'
import MenuHamburguer from './MenuHamburguer'
import NameLogo from '../NameLogo'
import getLanguage from '@/app/utils/getLanguage'

function Header() {
  const lang = getLanguage()
  return (
    <header className="bg-dark flex flex-col justify-end h-header-height pb-2 pl-3 md:pl-0 top-0 sticky z-50 mb-[2.12rem] md:mb-[3.87rem] ">
      <div className="flex flex-wrap items-center justify-between">
        <NameLogo />
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

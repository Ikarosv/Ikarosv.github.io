import { cookies } from 'next/headers'
import translations from '../../../public/translations'

export default function getLanguage() {
  const cookiesHandler = cookies()
  const clientLang: keyof typeof translations =
    (cookiesHandler.get('LANG')?.value as 'en' | 'pt') ?? 'pt'
  const lang = clientLang in translations ? clientLang : 'pt'
  return lang
}

import pt from './pt'
import en from './en'

const translations = {
  pt,
  en,
}

export type Lang = keyof typeof translations

export default translations

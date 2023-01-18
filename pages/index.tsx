import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header/Header'
import { lightTheme, styled, theme } from '../stitches.config'

const GenericBody = styled('div', {
  fontSize: '20px'
})

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <GenericBody className={ isDarkMode ? theme.className : lightTheme.className }>
      <Head>
        <title>Ikaro Vieira</title>
        <meta name="description" content="Portfólio de Ikaro Vieira" />
      </Head>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />
      <main className="bgDark">
        <section>
        </section>
      </main>
    </GenericBody>
  )
}

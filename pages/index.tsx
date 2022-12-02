import Head from 'next/head'
import Text from '../styles/styled-components/Text'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ikaro Vieira</title>
        <meta name="description" content="Portfólio de Ikaro Vieira" />
      </Head>
      {/* <h1>Ikaro</h1> */}
      <Text color='dark-accent'>Texto</Text>
    </div>
  )
}

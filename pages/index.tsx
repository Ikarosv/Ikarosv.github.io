import Head from 'next/head'
import Loading from '../components/Loading'
import Button from '../styles/styled-components/Button'
import Text from '../styles/styled-components/Text'
import Title from '../styles/styled-components/Title'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ikaro Vieira</title>
        <meta name="description" content="Portfólio de Ikaro Vieira" />
      </Head>
      {/* <h1>Ikaro</h1> */}
      <Text>IKARO</Text>
    </div>
  )
}

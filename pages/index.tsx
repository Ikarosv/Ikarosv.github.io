import Head from 'next/head'
import Button from '../styles/styled-components/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ikaro Vieira</title>
        <meta name="description" content="Portfólio de Ikaro Vieira" />
      </Head>
      {/* <h1>Ikaro</h1> */}
      <Button secondary>Button</Button>
    </div>
  )
}

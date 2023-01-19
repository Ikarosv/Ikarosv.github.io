import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header/Header';
import ArteInicial from '../images/ArteInicial';
import { css, lightTheme, styled, theme } from '../stitches.config';
import Button from '../styles/styled-components/Button';
import Text from '../styles/styled-components/Text';

const GenericBody = styled('main', {
  fontSize: '20px',
  backgroundColor: '$body',
  fontFamily: '$Open-sans',
})

const ResponsiveImage = styled(ArteInicial, {
  width: '100vw',
  height: '110vh',
  '@bp2': {
    order: '0',
    width: '70vw',
    height: '70vh',

  }
})

export const Flex = styled('section', {
  variants: {
    center: {
      true: {
        justifyContent: 'center',
      },
    },
    directionColumn: {
      true: {
        flexDirection: 'column',
      },
    },
  },
  alignItems: 'center',
  display: 'flex',
  width: '100%',
});

const ResponsiveFlex = styled(Flex, {
  '@bp2': {
    flexDirection: 'column',
  }
})

const Main = styled('main', {
  height: '110vh',
})

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <Head>
        <title>Ikaro Vieira</title>
        <meta name="description" content="Portfólio de Ikaro Vieira" />
      </Head>
      <GenericBody
        className={ isDarkMode ? theme.className : lightTheme.className }
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />
        <Main>
          <ResponsiveFlex center>
            <Flex center directionColumn css={{
              '@bp2': {
                order: 2
              },
            }}>
              <Text weight="light">Meu nome é</Text>
              <Text weight="extraBold" size='big'>Ikaro Vieira</Text>
              <Text weight="strong" size='small'>Desenvolvedor Full-stack em formação</Text>
              <Button>FALE COMIGO</Button>
            </Flex>
            <ResponsiveImage />
          </ResponsiveFlex>
        </Main>
      </GenericBody>
    </>
  )
}

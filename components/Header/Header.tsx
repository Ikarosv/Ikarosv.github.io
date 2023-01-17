import { styled } from "../../stitches.config";
import { TextColors } from "../../styles/Colors";
import Button from "../../styles/styled-components/Button";
import Text from "../../styles/styled-components/Text";
import Title from "../../styles/styled-components/Title";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export const StyledHeader = styled('header', {
  backgroundColor: '$bgDark',
  color: '$LIGHT',
  padding: '16px $responsivePadding',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@bp2': {
    padding: '$padding'
  }
});

export const Colored = styled('span', {
  variants: {
    color: {
      ...TextColors
    }
  }
})

const Nav = styled('nav', {
  display: 'flex',
  gap: '9vw',
  '@bp2': {
    display: 'none',
  }
})

export default function Header() {
  return (
    <StyledHeader>
      <Title headNumber={4}>
        Ikaro<Colored color="dark_accent">Vieira</Colored>
      </Title>
      <HamburgerMenu />
      <Nav>
        <Text as="a" href="#" color="light">Sobre</Text>
        <Text as="a" href="#" color="light">Tecnologias</Text>
        <Text as="a" href="#" color="light">Projetos</Text>
      </Nav>
      <Button secondary as="a" href="mailto:ikarovieiraa@gmail.com" css={{'@bp2': {display: 'none'}}}>Contato</Button>
    </StyledHeader>
  );
}
import * as Switch from "@radix-ui/react-switch";
import { MoonSvg, SunSvg } from "../../icons";
import { styled, theme } from "../../stitches.config";
import Text from "../../styles/styled-components/Text";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export const StyledHeader = styled('header', {
  height: '113px',
  maxHeight: '113px',
  backgroundColor: '$section',
  color: '$textColor',
  padding: '16px $responsivePadding',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@bp2': {
    padding: '$padding'
  },
});

const Nav = styled('nav', {
  display: 'flex',
  gap: '9vw',
  '@bp2': {
    display: 'none',
  }
})

const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '#C4C4C4',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $blackA7`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '@bp2': {
    marginLeft: '22px'
  }
});

const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 23,
  height: 23,
  backgroundColor: '$DARK',
  borderRadius: '9999px',
  boxShadow: '0 2px 2px $blackA7',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export default function Header({  isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: Function}) {

  return (
    <StyledHeader>
      <SwitchRoot onCheckedChange={ () => { setIsDarkMode(!isDarkMode) } }>
        <SwitchThumb>
          { !isDarkMode ? <MoonSvg /> : <SunSvg /> }
        </SwitchThumb>
      </SwitchRoot>
      <HamburgerMenu />
      <Nav>
        <Text as="a" href="#Sobre">Sobre Mim</Text>
        <Text as="a" href="#Projetos">Projetos</Text>
        <Text as="a" href="#Skills">Skills</Text>
        <Text as="a" href="#Educacao">Educação</Text>
      </Nav>
      {/* <Button secondary as="a" href="mailto:ikarovieiraa@gmail.com" css={{'@bp2': {display: 'none'}}}>Contato</Button> */}
    </StyledHeader>
  );
}
import { styled } from "../../stitches.config"
import Text from "../../styles/styled-components/Text"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes } from '@stitches/react';


const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
  minWidth: 220,
  color: '$testColor',
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);



const itemStyles = {
  all: 'unset',
  color: '$DARK',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-highlighted]': {
    backgroundColor: '$YELLOW',
    color: '$LIGHT',
  },
};

const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);

const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$violet6',
  margin: 5,
});

export default function Navegation() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>
        <Text as="a" href="#Sobre">Sobre Mim</Text>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <Text as="a" href="#Projetos">Projetos</Text>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <Text as="a" href="#Skills">Skills</Text>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <Text as="a" href="#Educacao">Educação</Text>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
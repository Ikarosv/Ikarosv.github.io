import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Button from '../../styles/styled-components/Button';
import { styled } from '../../stitches.config';
import Navegation from '../Navegation/Navegation';
import {MenuHamb} from '../../icons';

const DropdownMenuTrigger = styled(DropdownMenu.Trigger, {
  '@bp1': {
    display: 'none',
  }
})

export default function HamburgerMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger asChild>
        <Button secondary>
          <MenuHamb />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenu.Portal style={{position: 'relative'}}>
        <Navegation />
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

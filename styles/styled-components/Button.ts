import React from 'react';
import { styled } from '../../stitches.config';
import { PURPLE, TextColors } from '../Colors';

const Button = styled('button', {
  variants: {
    secondary: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $borderSecondary',
      }
    },
    color: {
      ...TextColors,
    }
  },
  defaultVariants: {
    secondary: false,
    color: '$light'
  },
  borderRadius: '6px',
  padding: '17px',
  maxWidth: '170px',
  width: 'fit-content',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: '900',
  fontSize: '14px',
  border: 'none',
  color: '$LIGHT',
  backgroundColor: '$PURPLE',
});

export default Button;

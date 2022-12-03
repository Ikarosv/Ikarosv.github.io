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
    },
    bgColor: {
      primary: {
        backgroundColor: '$PURPLE',
      }
    }
  },
  defaultVariants: {
    secondary: false,
    color: '$light',
    bgColor: 'primary',
  },
  borderRadius: '6px',
  padding: '18px',
  minWidth: '170px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: '900',
  fontSize: '14px',
  border: 'none',
  color: '$LIGHT'
});

export default Button;

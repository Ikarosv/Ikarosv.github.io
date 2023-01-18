import { styled } from '../../stitches.config';

const Button = styled('button', {
  variants: {
    secondary: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $borderSecondary',
      }
    }
  },
  defaultVariants: {
    secondary: false,
  },
  borderRadius: '6px',
  padding: '17px 35px',
  maxWidth: '170px',
  width: 'fit-content',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: '900',
  fontSize: '14px',
  border: 'none',
  color: '$textColor',
  backgroundColor: 'transparent',
  '&:hover': {
    border: '1px solid $LIGHT',
  },
  '&[data-state=open]': {
    filter: 'drop-shadow(0 0 1rem black)'
  }
});

export default Button;

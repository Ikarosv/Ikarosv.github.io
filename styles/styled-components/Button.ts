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
  fontFamily: '$Open-sans',
  borderRadius: '6px',
  padding: '10px 14px',
  // maxWidth: '170px',
  width: 'max-content',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '20px',
  border: 'none',
  color: '$LIGHT',
  backgroundColor: '$YELLOW',
  '&:hover': {
    border: '1px solid $YELLOW',
  },
  '&[data-state=open]': {
    filter: 'drop-shadow(0 0 1rem black)'
  }
});

export default Button;

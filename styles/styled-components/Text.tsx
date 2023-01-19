import { styled, theme } from '../../stitches.config';
import { TextColors } from '../Colors';

const {colors} = theme;

const Text = styled('p', {
  variants: {
    size: {
      big: {
        fontSize: '36px',
        lineHeight: '49px',
      },
      normal: {
        fontSize: '20px',
        lineHeight: '32.68px',
      },
      small: {
        fontSize: '18px',
        lineHeight: '27px',
      }
    },
    weight: {
      light: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      strong: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
      extraBold: {
        fontWeight: 800,
      },
    },
    black: {
      true: {
        color: '$DARK',
      }
    }
  },
  defaultVariants: {
    size: 'normal',
  },
  color: '$textColor',
})

export default Text;

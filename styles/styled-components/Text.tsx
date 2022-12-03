import { styled, theme } from '../../stitches.config';
import { TextColors } from './Colors';

const {colors} = theme;

const Text = styled('p', {
  variants: {
    size: {
      big: {
        fontSize: '20px',
      },
      normal: {
        fontSize: '16px',
      },
      small: {
        fontSize: '14px',
      }
    },
    color: {
      ...TextColors
    }
  },
  defaultVariants: {
    size: 'normal',
    color: 'dark',
  }
})

export default Text;

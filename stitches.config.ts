import { createStitches } from '@stitches/react';
import Colors, { TextColors } from './styles/Colors'
import { violet, blackA } from '@radix-ui/colors'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...Colors,
      borderSecondary: 'rgba(255, 255, 255, 0.295743)',
      bgDark: '#28293E',
      ...violet,
      ...blackA,
    },
    fonts: {
      Epilogue: 'url(./fonts/Epilogue-VariableFont_wght.ttf)'
    },
    space: {
      padding: '16px 23px',
      responsivePadding: '9.9vw',
    }
  },
  media: {
    bp1: '(min-width: 768px)',
    bp2: '(max-width: 767px)'
  }
})

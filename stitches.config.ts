import { createStitches } from '@stitches/react';
import Colors from './styles/Colors'

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
      borderSecondary: 'rgba(255, 255, 255, 0.295743)'
    },
    fonts: {
      Epilogue: 'url(./fonts/Epilogue-VariableFont_wght.ttf)'
    },
  },
  media: {
    bp1: '(min-width: 425px)',
  }
})

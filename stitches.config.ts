import { createStitches } from '@stitches/react';
import Colors from './styles/styled-components/Colors'

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
    },
    fonts: {
      Epilogue: 'url(./fonts/Epilogue-VariableFont_wght.ttf)'
    }
  },
  media: {
    bp1: '(min-width: 425px)',
  }
})

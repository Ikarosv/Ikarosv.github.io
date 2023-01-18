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
      ...violet,
      ...blackA,
      textColor: TextColors.darkMode,
      body: Colors.DARK,
      section: Colors.DARK_GRAY,
    },
    fonts: {
      Epilogue: 'url(./fonts/Epilogue-VariableFont_wght.ttf)',
      "Open-sans": 'url(./fonts/OpenSans-VariableFont_wght.ttf)',
    },
    space: {
      padding: '16px 23px',
      responsivePadding: '9.9vw',
    },
  },
  media: {
    bp1: '(min-width: 768px)',
    bp2: '(max-width: 767px)'
  }
})

export const lightTheme = createTheme('light-theme', {
  colors: {
    ...Colors,
    textColor: TextColors.lightMode,
    body: Colors.LIGHT,
    section: Colors.LIGHT_GRAY,
  }
});

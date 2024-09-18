import { createTheme } from '@mui/material/styles';

import { colorPalette, fontWeights } from '../constants';

//To customize the base theme provided by the MUI
export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 568,
      md: 972,
      lg: 1206,
      xl: 1800,
    },
  },

  palette: {
    primary: {
      light: colorPalette.green[200],
      main: colorPalette.green[500],
      dark: colorPalette.green[800],
    },

    secondary: {
      light: colorPalette.blue[200],
      main: colorPalette.blue[500],
      dark: colorPalette.blue[800],
    },

    grey: {
      50: colorPalette.grey[50],
      100: colorPalette.grey[100],
      200: colorPalette.grey[200],
      300: colorPalette.grey[300],
      400: colorPalette.grey[400],
      500: colorPalette.grey[500],
      600: colorPalette.grey[600],
      700: colorPalette.grey[700],
      800: colorPalette.grey[800],
      900: colorPalette.grey[900],
    },
  },

  spacing: (size: number) => `${size * 1}rem`,

  typography: {
    htmlFontSize: 10,
    fontFamily: ['Roboto', 'sans-serif'].join(','),

    body1: {
      fontWeight: fontWeights.REGULAR_FONT_WEIGHT,
      fontSize: '1.6rem',
      lineHeight: 1.5,
    },

    body2: {
      fontWeight: fontWeights.REGULAR_FONT_WEIGHT,
      fontSize: '1.4rem',
      lineHeight: 1.5,
    },

    subtitle1: {
      fontWeight: fontWeights.MEDIUM_FONT_WEIGHT,
      fontSize: '1.4rem',
      lineHeight: 1.5,
    },

    subtitle2: {
      fontWeight: fontWeights.MEDIUM_FONT_WEIGHT,
      fontSize: '1.2rem',
      lineHeight: 1.5,
    },

    button: {
      fontWeight: fontWeights.BOLD_FONT_WEIGHT,
      fontSize: '1.6rem',
      lineHeight: 1.5,
      color: colorPalette.white,
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: ` 
      html{
        font-size: 62.5%;
        scroll-behavior: smooth;
      }

      body {
        line-height: 1;
        letter-spacing: 0;
        font-size: 1.6rem;
        vertical-align: baseline;
      }

      a {
        text-decoration: none;
        outline: none;
      }

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: ${colorPalette.scrollbarTrack};
      }

      ::-webkit-scrollbar-thumb {
        background: ${colorPalette.scrollbarThumb}
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${colorPalette.scrollbarHover}
      }
      `,
    },
  },
});

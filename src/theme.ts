import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { customColors } from './constants/colors';

const theme = createTheme(
  {
    typography: {
      fontFamily: ['Times New Roman', 'Times', 'Lato'].join(','),
    },
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: customColors.secondary.main,
        400: customColors.secondary[400],
        300: customColors.secondary[300],
        200: customColors.secondary[200],
        100: customColors.secondary[100],
      },
      error: {
        main: red.A400,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width: '200px',
            height: '56px',
            backgroundColor: '#37332F0A',
            color: customColors.mainPurple,
            boxShadow: 'unset',
            borderRadius: '30px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: customColors.secondary[200],
            },
          },
        },
      },
    },
  },
  {
    typography: {
      h4: {
        fontSize: '36px',
        '::before': {
          fontWeight: 700,
          color: customColors.darkBlue,
        },
        '::after': {
          fontWeight: 400,
          color: customColors.mainBlack,
        },
        color: customColors.darkBlue,
        '@media (max-width:1024px)': {
          fontSize: '28px',
          fontWeight: 400,
        },
      },
    },
  },
);

export default theme;

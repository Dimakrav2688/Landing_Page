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
        fontSize: '30px',
        '@media (max-width:900px)': {
          fontSize: '20px',
        },
      },
      body2: {
        '@media (max-width:600px)': {
          fontSize: '12px',
        },
      },
    },
  },
);

export default theme;

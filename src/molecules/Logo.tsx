import { Box } from '@mui/material';
import React from 'react';
import LogoIcon from '../assets/Logo.svg';
import { customColors } from '../constants/colors';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        justifyContent: 'center',
        lineHeight: '21px',
      }}
    >
      <Box
        component="img"
        src={LogoIcon}
        alt={'logo'}
        sx={{
          width: { xs: 50, lg: 60 },
          height: { xs: 50, lg: 55 },

          margin: '0 auto',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          color: customColors.mainPurple,
          fontFamily: 'Lato, sans-serif',
          fontWeight: 400,
          fontSize: { xs: '18px', lg: '20px' },
        }}
      >
        SenseiEdu
      </Box>
    </Box>
  );
};

export default Logo;

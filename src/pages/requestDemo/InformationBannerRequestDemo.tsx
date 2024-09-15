import React from 'react';
import { customColors } from '../../constants/colors';
import { Box, Typography } from '@mui/material';

const InformationBannerRequestDemo = () => {
  const textData = ['SIMPLE TO USE.', 'TIME EFFICIENT.', 'DATA DRIVEN.'];
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: { xs: '60px', md: '86px' },
        backgroundColor: customColors.mainTextBackGroundColor,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column ', sm: 'row' },
          justifyContent: 'space-between',
          padding: { xs: '20px', sm: '32px 20px', md: '40px 70px 50px' },
          gap: { md: '20px' },
        }}
      >
        {textData.map((text, index) => (
          <Typography
            key={`${index}-${text}`}
            sx={{
              fontSize: { xs: '25px', md: '36px' },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default InformationBannerRequestDemo;

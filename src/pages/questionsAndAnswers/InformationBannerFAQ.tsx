import React from 'react';
import { customColors } from '../../constants/colors';
import { Box, Typography } from '@mui/material';
import FAQIcon from '../../assets/questionsAndAnswers/FAQIcon.svg';

const InformationBannerFAQ = () => {
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
          alignItems: 'center',
          gap: { xs: '10%', md: '20%' },
          padding: '55px 35px 35px 35px',
        }}
      >
        <Box
          component="img"
          src={FAQIcon}
          alt={'questionIcon'}
          sx={{
            width: { xs: 125, lg: 180 },
            height: { xs: 125, lg: 180 },
            pointerEvents: 'none',
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '34px' },
            textAlign: 'center',
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Box>
    </Box>
  );
};

export default InformationBannerFAQ;

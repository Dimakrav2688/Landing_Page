import React from 'react';
import { customColors } from '../../constants/colors';
import { Box, Typography } from '@mui/material';
import EmailIcon from '../../assets/getInTouch/EmailIcon.png';
import PhoneIcon from '../../assets/getInTouch/PhoneIcon.svg';

const InformationBannerGetInTouch = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: { xs: '60px', md: '86px' },
        backgroundColor: customColors.mainTextBackGroundColor,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '33px', md: '38px' },
          color: customColors.mainPurple,
          fontWeight: '900',
          backgroundColor: customColors.mainWhite,
          paddingBottom: { xs: '20px', md: '40px' },
        }}
      >
        GET IN TOUCH
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '30px', md: '40px' },
          padding: '35px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Box
            component="img"
            src={EmailIcon}
            alt={'email'}
            sx={{
              width: { xs: '35px', lg: '50px' },
              height: { xs: '32px', lg: '32px' },
              pointerEvents: 'none',
            }}
          />
          <Typography sx={{ fontSize: { xs: '27px', md: '36px' }, color: customColors.mainPurple }}>
            info@senseiedu.com
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Box
            component="img"
            src={PhoneIcon}
            alt={'phone'}
            sx={{
              width: { xs: '35px', lg: '50px' },
              height: { xs: '35px', lg: '50px' },
              pointerEvents: 'none',
            }}
          />
          <Typography sx={{ fontSize: { xs: '27px', md: '36px' }, color: customColors.mainPurple }}>
            347- 858- 9174
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationBannerGetInTouch;

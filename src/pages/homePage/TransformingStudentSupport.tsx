import React from 'react';
import { Box, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';
import LadderOfAchievementGirl from '../../assets/homePage/LadderOfAchievementGirl.svg';

const TransformingStudentSupport = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: '45px ', sm: '100px', lg: '150px' },
        paddingInline: { xs: '0', sm: '50px', lg: '20px' },
      }}
    >
      <Box sx={{ textAlign: 'start', paddingInline: { xs: '10px', md: '0px' } }}>
        <Box
          component={'span'}
          sx={{
            width: '100%',
            fontSize: { xs: '20px', md: '26px' },
            fontWeight: { xs: 400, md: 700 },
            color: customColors.darkBlue,
          }}
        >
          Transforming Student Support:
          <Box
            component={'span'}
            sx={{
              color: customColors.mainBlack,
              fontWeight: 400,
            }}
          >
            {" Your School's Path to Excellence"}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          gap: { xs: '22px', sm: '40px' },
          marginTop: { xs: '22px', sm: '50px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: { xs: '42px 12px 42px 28px', sm: '77px 48px 89px 48px', lg: '85px 58px' },
            gap: '40px',
            backgroundColor: customColors.mainPurple,
            maxWidth: { xs: '100%', sm: '540px', lg: '779px' },
          }}
        >
          <Typography
            variant={'body2'}
            sx={{
              color: customColors.mainWhite,
              textAlign: 'start',
              alignSelf: 'start',
            }}
          >
            Is your school committed to providing exceptional education while nurturing the holistic
            development of each student?
          </Typography>
          <Typography
            variant={'body2'}
            sx={{
              color: customColors.mainWhite,
              textAlign: 'start',
              fontSize: { md: '16px' },
            }}
          >
            Unlock the full potential of your school with our tailored services for student support.
            We understand that every school is unique, and our approach is designed to align with
            your specific needs, goals, and values.
          </Typography>
        </Box>
        <Box
          component="img"
          src={LadderOfAchievementGirl}
          alt={'achievement'}
          sx={{
            width: { xs: '236px', md: '300px', lg: '320px' },
            height: { xs: '290px', md: '332px', lg: '360px' },
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default TransformingStudentSupport;

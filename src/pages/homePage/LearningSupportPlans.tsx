import React from 'react';
import { Box, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';
import LearningSupportPlansStudent from '../../assets/homePage/LearningSupportPlansStudent.svg';

const LearningSupportPlans = () => {
  return (
    <Box
      sx={{
        backgroundColor: customColors.mainTextBackGroundColor,
        margin: { xs: '50px 10px 0', sm: '93px 10px 0', lg: '130px 10px 0' },
        padding: { xs: '10px 25px 50px 10px', sm: '30px 54px 48px', lg: '25px 76px 55px 55px' },
      }}
    >
      <Box sx={{ textAlign: 'start', paddingInline: { xs: '10px', md: '0px' } }}>
        <Box
          component={'span'}
          sx={{
            width: '100%',
            fontSize: { xs: '20px', md: '26px' },
            color: customColors.darkBlue,
          }}
        >
          Learning Support Plans:{' '}
          <Box component={'span'} sx={{ color: customColors.mainBlack, fontWeight: 400 }}>
            Experience Efficiency, Elevate Quality
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          gap: { xs: '22px', sm: '40px' },
          paddingTop: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: { xs: '74px', sm: '0' },

            gap: '40px',

            maxWidth: { xs: '100%', sm: '540px', lg: '779px' },
          }}
        >
          <Typography
            variant={'body2'}
            sx={{
              color: customColors.mainBlack,
              textAlign: 'start',
            }}
          >
            Interactive Support Plan Management Software will significantly enhance the efficiency
            and organization of student support. You will be able to dynamically adjust goals, share
            progress, and exchange feedback, thereby promoting more targeted and effective learning
            experiences.
          </Typography>

          <Typography
            variant={'body2'}
            sx={{
              color: customColors.mainBlack,
              textAlign: 'start',
              fontSize: { md: '16px' },
            }}
          >
            Excessive investment of time in writing support documentation, lack of documentation, or
            inadequate writing of learning plans can lead to delayed interventions, reduced
            collaboration among team members, and a decrease in the quality of differentiation and
            individualized support, ultimately hampering the overall effectiveness of the student
            support process.
          </Typography>
        </Box>
        <Box
          component="img"
          src={LearningSupportPlansStudent}
          alt={'Learning Support'}
          sx={{
            width: { xs: '211px', md: '221px', lg: '300px' },
            height: { xs: '228px', md: '228px', lg: '300px' },
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default LearningSupportPlans;

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
        padding: { xs: '10px 25px 50px 10px', sm: '30px 54px 48px', lg: '25px 76px 100px 55px' },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          width: '100%',
          textAlign: 'start',
          boxSizing: 'border-box',
          paddingLeft: { xs: '5px', sm: '8px', lg: '20px' },
          position: 'relative',
          '::before': {
            content: '"Learning Support Plans:"',
          },
          '::after': {
            content: '" Experience Efficiency, Elevate Quality"',
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          gap: { xs: '22px', sm: '40px' },
          paddingTop: { xs: '74px', sm: '71px', lg: ' 118px' },
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
            sx={{
              color: customColors.mainBlack,
              fontSize: { xs: '16px', lg: '24px' },
              textAlign: 'start',
            }}
          >
            Interactive Support Plan Management Software will significantly enhance the efficiency
            and organization of student support. You will be able to dynamically adjust goals, share
            progress, and exchange feedback, thereby promoting more targeted and effective learning
            experiences.
          </Typography>
          <Typography
            sx={{
              color: customColors.mainBlack,
              fontSize: { sx: '16px', lg: '24px' },
              textAlign: 'start',
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
            width: { xs: '211px', md: '221px', lg: '311px' },
            height: { xs: '228px', md: '228px', lg: '321px' },
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default LearningSupportPlans;

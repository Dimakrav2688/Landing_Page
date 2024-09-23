import React from 'react';
import { customColors } from '../../constants/colors';
import { Box, Typography } from '@mui/material';
import ConsultingGirl from '../../assets/homePage/ConsultingGirl.svg';

const Consulting = () => {
  return (
    <Box
      sx={{
        backgroundColor: customColors.mainTextBackGroundColor,
        margin: { xs: '50px 10px 90px', sm: '93px 10px 145px', lg: '130px 10px 100px' },
        padding: {
          xs: '20px 12px 38px 4px',
          sm: '20px 58px 96px 31px',
          lg: '25px 116px 113px 40px',
        },
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
          Consulting:{' '}
          <Box component={'span'} sx={{ color: customColors.mainBlack, fontWeight: 400 }}>
            Meet Your Needs, Empower Growth
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', lg: 'flex-start' },
          gap: { xs: 0, sm: '51px', lg: '221px' },
          paddingTop: { xs: '70px', sm: '61px', lg: ' 79px' },
        }}
      >
        <Box
          component="img"
          src={ConsultingGirl}
          alt={'consulting'}
          sx={{
            width: { xs: '100%', md: '282px', lg: '420px' },
            height: { xs: '290px', md: '208px', lg: '310px' },
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: { xs: '51px', sm: '0' },

            gap: '40px',

            maxWidth: { xs: '100%', sm: '540px', lg: '779px' },
          }}
        >
          <Typography
            variant={'body2'}
            sx={{
              color: customColors.mainBlack,
              textAlign: 'start',
              paddingInline: { xs: '20px', sm: '0' },
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
              paddingInline: { xs: '20px', sm: '0' },
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
      </Box>
    </Box>
  );
};

export default Consulting;

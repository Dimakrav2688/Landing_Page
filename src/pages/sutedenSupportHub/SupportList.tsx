import React from 'react';
import { Box, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';
import StudentHead from '../../assets/studentSupport/StudentHead.svg';
import PeoplePerformance from '../../assets/studentSupport/PeoplePerformance.svg';
import FamilyIcon from '../../assets/studentSupport/FamilyIcon.svg';

const SupportList = () => {
  return (
    <Box
      sx={{
        marginBlock: { xs: '30px', lg: '40px' },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '47px', sm: '35px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '22px', md: '20px', lg: '80px' },
          height: { md: '200px', lg: '240px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            width: { xs: '210px', md: '290px', lg: '290px' },
            minWidth: { xs: '210px', md: '290px', lg: '290px' },
            height: { xs: '200px', md: '200px', lg: '240px' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            padding: '35px',
            gap: '30px',
          }}
        >
          <Box
            component="img"
            src={StudentHead}
            alt={'head'}
            sx={{
              width: { xs: '100px', lg: '129px' },
              height: { xs: '70px', lg: '100px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
            }}
          >
            For Students
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 50px 10px',
              md: '25px 25px 0px 25px',
              lg: '36px 36px 0px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          SenseiEdu offers seamless solutions for creating learning, behavioral, social- emotional,
          and enrichment plans and progress reports, enabling an inclusive learning experience. By
          providing appropriate student support documentation and personalized objectives and
          accommodations, schools can ensure that each student&apos;s unique strengths and
          challenges are recognized and addressed. This approach promotes a more equitable and
          accessible educational environment for all students.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '22px', md: '20px', lg: '80px' },
          height: { md: '200px', lg: '240px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            width: { xs: '210px', md: '290px', lg: '290px' },
            minWidth: { xs: '210px', md: '290px', lg: '290px' },
            height: { xs: '200px', md: '200px', lg: '240px' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            padding: '25px',
            gap: '30px',
          }}
        >
          <Box
            component="img"
            src={PeoplePerformance}
            alt={'performance'}
            sx={{
              width: { xs: '80px', lg: '112px' },
              height: { xs: '60px', lg: '90px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
            }}
          >
            For Specialists
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 50px 10px',
              md: '25px 25px 0px 25px',
              lg: '36px 36px 0px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          Our support plans streamline the student support process, making learning plans creation
          far more efficient. With customizable learning accommodations and a goals bank, SenseiEdu
          significantly reduces the time required for writing student documentation. Easily upload
          generated learning plans if you use third-party software like Blackbaud or Toddle.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '22px', md: '20px', lg: '80px' },
          height: { md: '200px', lg: '240px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            width: { xs: '210px', md: '290px', lg: '290px' },
            minWidth: { xs: '210px', md: '290px', lg: '290px' },
            height: { xs: '200px', md: '200px', lg: '240px' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            padding: '25px',
            gap: '30px',
          }}
        >
          <Box
            component="img"
            src={FamilyIcon}
            alt={'family'}
            sx={{
              width: { xs: '80px', lg: '112px' },
              height: { xs: '60px', lg: '90px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
            }}
          >
            For Parents
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 50px 10px',
              md: '25px 25px 0px 25px',
              lg: '36px 36px 0px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          Strengthen communication with parents by providing clear feedback, measurable goals, and
          progress tracking over time. SenseiEdu ensures that parents stay informed and engaged in
          their child&apos;s educational journey.
        </Typography>
      </Box>
    </Box>
  );
};

export default SupportList;

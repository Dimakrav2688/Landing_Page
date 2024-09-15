import React from 'react';
import { Box, Typography } from '@mui/material';
import StudentsNotes from '../../assets/studentSupport/StudentsNotes.svg';
import Insights from '../../assets/studentSupport/Insights.svg';
import { customColors } from '../../constants/colors';

const ProjectToolsInformation = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: '50px', md: '100px' },
      }}
    >
      <Box sx={{ position: 'relative', paddingBottom: { xs: '60px', md: '90px' } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: '40px',
            margin: { xs: '65px auto 24px', sm: '48px auto', lg: '64px auto' },
          }}
        >
          Student Notes
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              gap: { xs: '50px', md: '0px' },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '16px', lg: '20px' },
                margin: { xs: '0', md: '80px auto 80px', lg: '70px auto 70px' },
                textAlign: 'start',
                width: { xs: '100%', md: '50%' },
                backgroundColor: customColors.mainTextBackGroundColor,
                borderRadius: '20px',
                padding: {
                  xs: '50px  10px',
                  md: '40px 80px 40px 20px',
                  lg: '40px 150px 60px 20px',
                },
                boxSizing: { xs: 'border-box' },
              }}
            >
              KEEP YOUR NOTES CENTRALIZED.
              <br /> On SenseiEdu, you can create meeting notes or track student progress, assign
              notes to specific team members, and highlight their importance levels to ensure
              priority tasks are addressed promptly. Simplify your workflow and enhance team
              collaboration with SenseiEdu.
            </Typography>
            <Box
              component="img"
              src={StudentsNotes}
              alt={'notes'}
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '100%', md: '400px' },
                pointerEvents: 'none',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: { xs: '-16px', sm: '-24px' },
            right: { xs: '-16px', sm: '-24px' },
            height: { xs: '30px', md: '40px' },
            backgroundColor: customColors.separatorLine,
          }}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: '40px',
          margin: { xs: '40px auto 24px ', md: '64px 20% 0 64px ' },
          textAlign: { xs: 'center', md: 'end' },
        }}
      >
        Insights
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: { xs: '75px', md: '150px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '50px', md: '0px' },
            marginTop: '15px',
          }}
        >
          <Box
            component="img"
            src={Insights}
            alt={'insights'}
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: '100%', md: '400px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '14px', md: '16px', lg: '20px' },
              margin: { xs: '0', md: '30px auto 80px', lg: '70px auto 70px' },
              textAlign: 'start',
              width: { xs: '100%', md: '50%' },
              backgroundColor: customColors.mainTextBackGroundColor,
              borderRadius: '20px',
              padding: {
                xs: '50px  10px',
                md: '40px 40px 40px 20px',
                lg: '40px 90px 60px 20px',
              },
              boxSizing: { xs: 'border-box' },
            }}
          >
            DATA IS ONE OF THE MOST CRUCIAL ELEMENTS <br /> that will help you shape the objectives
            of your support program and instructional strategies. On SenseiEdu, gain insights
            through detailed student information, including evaluations, support frequency, and
            subject- specific data. Use this data to enrich your educational programs and tailor
            support to meet each student&apos;s unique needs.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectToolsInformation;

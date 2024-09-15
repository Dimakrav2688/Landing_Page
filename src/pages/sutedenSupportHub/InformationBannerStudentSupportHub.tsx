import React from 'react';
import { Box, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';

const InformationBannerStudentSupportHub = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: { xs: '60px', md: '86px' },
        backgroundColor: customColors.mainPurple,
        color: customColors.mainWhite,

        paddingBlock: { md: '50px' },
      }}
    >
      <Typography
        sx={{
          padding: { xs: '30px 20px', md: '50px 90px 60px' },
          fontSize: { xs: '18px', md: '28px' },
          textAlign: { xs: 'start', md: 'center' },
        }}
      >
        SenseiEdu empowers private and independent schools with robust tools for creating individual
        learning support plans and progress reports for students needing additional support or
        enrichment. Our platform also provides actionable insights and collaborative note-taking
        features to enhance the educational experience for all students.
      </Typography>
    </Box>
  );
};

export default InformationBannerStudentSupportHub;

import React from 'react';
import { Box, Typography } from '@mui/material';
import RequestDemoForm from './RequestDemoForm';
import AdvertisementSchoolCarousel from './AdvertisementSchoolCarousel';

const RequestDemo = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          padding: {
            xs: '40px 15px 0',
            sm: '90px 80px  0 50px ',
            md: '150px 120px  0 80px ',
            lg: '150px 450px  0 100px ',
          },
          textAlign: 'start',
        }}
      >
        SenseiEdu offers a comprehensive solution for creating student support plans and progress
        reports, enriched with powerful note-taking and analytics tools. Discover how our platform
        can save time, improve efficiency, and provide deeper insights into student performance.
      </Typography>
      <RequestDemoForm />
      <AdvertisementSchoolCarousel />
    </Box>
  );
};

export default RequestDemo;

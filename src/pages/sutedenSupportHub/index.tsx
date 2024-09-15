import React from 'react';
import { Box, Typography } from '@mui/material';
import SupportList from './SupportList';
import ProjectToolsInformation from './ProjectToolsInformation';

const SupportHub = () => {
  return (
    <Box sx={{ marginTop: { md: '100px' } }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: '40px',
          margin: { xs: '65px auto 24px', sm: '48px auto', lg: '64px auto' },
          textAlign: { xs: 'start', md: 'center' },
        }}
      >
        Learning and Enrichment Plans
      </Typography>
      <SupportList />
      <ProjectToolsInformation />
    </Box>
  );
};

export default SupportHub;

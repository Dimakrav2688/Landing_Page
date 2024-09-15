import React from 'react';
import { Box, Typography } from '@mui/material';
import ConsultingList from './ConsultingList';

const Consulting = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '28px', lg: '40px' },
          margin: { xs: '65px auto 24px', sm: '48px auto', lg: '64px auto' },
        }}
      >
        Consulting Services
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', lg: '26px' },
          textAlign: { xs: 'start', sm: 'center' },
          paddingInline: { xs: 0, sm: '10%', lg: '10%' },
        }}
      >
        SenseiEdu offers targeted and custom consulting services for student support in private and
        independent schools. Our work is always aligned with your school &apos;s philosophy and
        values, using data-driven insights to provide the most effective and tailored approach for
        improving the overall educational experience.
      </Typography>
      <ConsultingList />
    </Box>
  );
};

export default Consulting;

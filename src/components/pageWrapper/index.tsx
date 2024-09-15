import React, { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';
import { Box, Container } from '@mui/material';

const PageWrapper = ({ children, content }: { children: ReactNode; content?: ReactNode }) => {
  return (
    <Box sx={{ height: '100vh', overflowY: 'auto' }}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {content}
        <Container maxWidth="xl">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageWrapper;

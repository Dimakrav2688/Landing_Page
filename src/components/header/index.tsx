import React from 'react';
import Logo from '../../molecules/Logo';
import { Box, Toolbar, Container, AppBar } from '@mui/material';
import { customColors } from '../../constants/colors';
import MenuHeader from './MenuHeader';
import MenuDropDown from './MenuDropDown';

const Header = () => {
  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{ backgroundColor: customColors.mainWhite, boxShadow: 'unset' }}
      >
        <Container maxWidth="xl" sx={{ paddingTop: '24px' }}>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Logo />
            <MenuHeader />
            <MenuDropDown />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

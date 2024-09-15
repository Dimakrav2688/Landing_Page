import React from 'react';
import Logo from '../../molecules/Logo';
import LogoIcon from '../../assets/ProfileIcon.svg';
import MenuIcon from '../../assets/MenuIcon.svg';
import { Box, Toolbar, Typography, Container, Avatar, AppBar } from '@mui/material';
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

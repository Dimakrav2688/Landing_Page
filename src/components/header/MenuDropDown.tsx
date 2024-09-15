import { Box } from '@mui/system';
import React, { useState } from 'react';
import { customColors } from '../../constants/colors';
import LogoIcon from '../../assets/ProfileIcon.svg';
import MenuIcon from '../../assets/MenuIcon.svg';
import { Avatar, Link, Menu, MenuItem, Typography } from '@mui/material';
import { headerPageRoutes } from '../../constants/routes';

const MenuDropDown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <>
        <Box
          component="img"
          src={MenuIcon}
          alt={'menuIcon'}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            fill: customColors.mainMagentaPurple,
            height: '44px',
            width: '44px',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {headerPageRoutes.map((menuItem) => {
            return (
              <Link underline="none" key={menuItem.id} href={menuItem.path} sx={{}}>
                <MenuItem onClick={handleClose}>{menuItem.title}</MenuItem>
              </Link>
            );
          })}
        </Menu>
      </>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          gap: '10px',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Avatar sx={{ width: 33, height: 33 }} alt="Remy Sharp" src={LogoIcon} />
        <Typography sx={{ color: customColors.mainPurple, userSelect: 'none' }}>
          Create Account
        </Typography>
      </Box>
    </Box>
  );
};

export default MenuDropDown;

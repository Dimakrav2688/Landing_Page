import React from 'react';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

import { headerPageRoutes } from '../../constants/routes';
import { useLocation } from 'react-router-dom';
import { customColors } from '../../constants/colors';

const MenuHeader = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        gap: { sm: '24px', md: '32px' },
      }}
    >
      {headerPageRoutes.map((pageItem) => {
        const isActive = location.pathname === pageItem.path;
        return (
          <Link underline="none" key={pageItem.id} href={pageItem.path} sx={{}}>
            <Box
              sx={{
                fontSize: { md: '16px', lg: '22px' },
                fontWeight: isActive ? 700 : 400,
                color: isActive ? customColors.darkBlue : 'inherit',
              }}
            >
              {pageItem.title}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default MenuHeader;

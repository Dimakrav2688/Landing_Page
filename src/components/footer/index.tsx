import React from 'react';
import { Box } from '@mui/material';
import { customColors } from '../../constants/colors';
import Logo from '../../molecules/Logo';
import Link from '@mui/material/Link';
import { ROUTES } from '../../enum/routingPath';

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: customColors.mainPurple,
          display: 'flex',
          justifyContent: 'space-between',
          padding: {
            xs: '26px 15px 50px 15px',
            sm: '30px 30px 50px 30px ',
            lg: '38px 50px 50px 50px',
          },
          color: customColors.mainWhite,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Box
            sx={{
              fontWeight: '700',
              paddingBottom: { xs: '25px', sm: '35px', lg: '40px' },
              fontSize: { xs: '18px', lg: '20px' },
              userSelect: 'none',
            }}
          >
            Learn More
          </Box>
          <Link underline="none" href={ROUTES.FAQ}>
            <Box
              sx={{
                marginBottom: { xs: '30px', sm: '30px', lg: '45px' },
                fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                color: customColors.mainWhite,
              }}
            >
              Questions and Answers
            </Box>
          </Link>
          <Link underline="none" href={ROUTES.REQUEST_DEMO}>
            <Box
              sx={{
                fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                color: customColors.mainWhite,
              }}
            >
              Request Demo
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Box
            sx={{
              fontWeight: '700',
              paddingBottom: { xs: '25px', sm: '35px', lg: '40px' },
              userSelect: 'none',
              fontSize: { xs: '18px', lg: '20px' },
            }}
          >
            Contact
          </Box>
          <Link underline="none" href={ROUTES.GET_IN_TOUCH}>
            <Box
              sx={{
                fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                color: customColors.mainWhite,
              }}
            >
              Contact SenseiEdu
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Box
            sx={{
              fontWeight: '700',
              paddingBottom: { xs: '25px', sm: '35px', lg: '40px' },
              userSelect: 'none',
              fontSize: { xs: '18px', lg: '20px' },
            }}
          >
            Legal
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '30px', sm: '30px', lg: '45px' },
              fontSize: { xs: '12px', sm: '18px', lg: '26px' },
            }}
          >
            <Link underline="none" href={ROUTES.TERMS_OF_USE}>
              <Box
                sx={{
                  color: customColors.mainWhite,
                  fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                }}
              >
                Terms of Use
              </Box>
            </Link>
            <Link underline="none" href={ROUTES.PRIVACY_POLICY}>
              <Box
                sx={{
                  color: customColors.mainWhite,
                  fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                }}
              >
                Privacy Policy
              </Box>
            </Link>
            <Link underline="none" href={ROUTES.COOKIES}>
              <Box
                sx={{
                  color: customColors.mainWhite,
                  fontSize: { xs: '12px', sm: '16px', lg: '18px' },
                }}
              >
                Cookies
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: {
            xs: '10px 10px 5px 25px',
            sm: '7px 25px 10px 25px',
            lg: '10px 50px 20px 33px',
          },
          backgroundColor: customColors.mainTextBackGroundColor,
        }}
      >
        <Logo />

        <Box
          sx={{ fontSize: { xs: '12px', sm: '16px', lg: '20px' }, color: customColors.mainPurple }}
        >
          {'\u00A9'} 2024 SenseiEdu. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

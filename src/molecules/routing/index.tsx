import React from 'react';
import { ROUTES } from '../../enum/routingPath';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/homePage';
import Consulting from '../../pages/consulting';
import Support from '../../pages/sutedenSupportHub';
import RequestDemo from '../../pages/requestDemo';
import PageWrapper from '../../components/pageWrapper';
import InformationBannerStudentSupportHub from '../../pages/sutedenSupportHub/InformationBannerStudentSupportHub';
import InformationBannerRequestDemo from '../../pages/requestDemo/InformationBannerRequestDemo';
import GetInTouch from '../../pages/getInTouch';
import InformationBannerGetInTouch from '../../pages/getInTouch/InformationBannerGetInTouch';
import QuestionsAndAnswers from '../../pages/questionsAndAnswers';
import InformationBannerFAQ from '../../pages/questionsAndAnswers/InformationBannerFAQ';
import { Button, Typography } from '@mui/material';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.CONSULTING,
    element: (
      <PageWrapper>
        <Consulting />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.SUPPORT_HUB,
    element: (
      <PageWrapper content={<InformationBannerStudentSupportHub />}>
        <Support />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.REQUEST_DEMO,
    element: (
      <PageWrapper content={<InformationBannerRequestDemo />}>
        <RequestDemo />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.GET_IN_TOUCH,
    element: (
      <PageWrapper content={<InformationBannerGetInTouch />}>
        <GetInTouch />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.FAQ,
    element: (
      <PageWrapper content={<InformationBannerFAQ />}>
        <QuestionsAndAnswers />
      </PageWrapper>
    ),
  },
  {
    path: ROUTES.ERROR,
    element: (
      <PageWrapper>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '40px',
            height: '400px',
            width: '100%',
          }}
        >
          <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>
            Not existing page. Something went wrong
          </Typography>
          <Button
            onClick={() => (window.location.href = '/')}
            sx={{ fontSize: '20px', fontWeight: 600 }}
          >
            Go back to home
          </Button>
        </div>
      </PageWrapper>
    ),
  },
]);

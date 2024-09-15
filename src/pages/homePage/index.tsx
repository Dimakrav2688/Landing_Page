import React from 'react';

import TransformingStudentSupport from './TransformingStudentSupport';
import LearningSupportPlans from './LearningSupportPlans';
import Consulting from './Consulting';

const HomePage = () => {
  return (
    <>
      <TransformingStudentSupport />
      <LearningSupportPlans />
      <Consulting />
    </>
  );
};

export default HomePage;

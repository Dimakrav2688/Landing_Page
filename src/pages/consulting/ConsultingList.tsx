import React from 'react';
import { Box, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';
import DataDriverInsights from '../../assets/consultingPage/DataDriverInsights.png';
import CollaborativeEngagement from '../../assets/consultingPage/CollaborativeEngagement.png';
import TransformInnovate from '../../assets/consultingPage/TransformInnovate.png';
import IvanaImage from '../../assets/consultingPage/IvanaImage.svg';

const ConsultingList = () => {
  return (
    <Box
      sx={{
        marginBlock: { xs: '83px', sm: '120px', lg: '150px' },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '47px', sm: '41px', lg: '60px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '22px', md: '20px', lg: '50px' },
          height: { md: '255px', lg: '350px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            width: { md: '330px', lg: '465px' },
            minWidth: { md: '330px', lg: '465px' },
            height: { md: '255px', lg: '350px' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            padding: '25px',
          }}
        >
          <Box
            component="img"
            src={DataDriverInsights}
            alt={'data_driver_insights'}
            sx={{
              width: { xs: '54px', lg: '80px' },
              height: { xs: '58px', lg: '76px' },
              marginBottom: { xs: '16px', lg: '24px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
              marginBottom: { xs: '35px', lg: '50px' },
            }}
          >
            Data-Driven Insight
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', lg: '26px' },
              color: customColors.mainWhite,
              textAlign: 'center',
            }}
          >
            Utilize data to identify strengths and areas for improvement.
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 50px 10px',
              md: '25px 25px 0px 25px',
              lg: '36px 36px 0px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          In the initial step of our consulting process, we focus on a data-driven approach to
          assess the strengths and needs related to the support of neurodiverse students within the
          school division. By gathering and analyzing current data, we identify key areas for
          improvement and ensure our recommendations are tailored to the specific needs of the
          school. This analysis forms the foundation for a targeted and effective support strategy.
          Additionally, we consider new trends and instructional approaches to ensure our strategies
          align with the latest advancements in education, enabling the school to follow the most
          current practices effectively to support all students.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', lg: 'flex-start' },
          gap: { xs: '22px', md: '20px', lg: '50px' },
          height: { md: '330px', lg: '450px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            boxSizing: 'border-box',
            width: { xs: '100%', md: '330px', lg: '465px' },
            minWidth: { xs: '100%', md: '330px', lg: '465px' },
            height: { md: '330px', lg: '450px' },
            borderRadius: '20px',
            padding: '25px',
          }}
        >
          <Box
            component="img"
            src={CollaborativeEngagement}
            alt={'data_driver_insights'}
            sx={{
              width: { xs: '48px', lg: '80px' },
              height: { xs: '58px', lg: '76px' },
              marginBottom: { xs: '16px', lg: '24px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
              marginBottom: { xs: '35px', lg: '50px' },
            }}
          >
            Colalborative Engagement
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', lg: '26px' },
              color: customColors.mainWhite,
              textAlign: 'center',
            }}
          >
            Foster teamwork to enhance existing student support.
          </Typography>
        </Box>
        <Typography
          sx={{
            boxSizing: 'border-box',
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 10px 10px',
              md: '25px 25px 25px 25px',
              lg: '36px 36px 36px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
          }}
        >
          Collaborative Engagement involves a comprehensive review of existing Student Support
          documentation (including Learning Plans, Progress Reports, Assessment Tools) and the
          implementation of Student Support Program goals. This step focuses on:
          <br /> <br />
          <Box sx={{ display: 'flex' }}>
            <Box style={{ paddingLeft: '15px', paddingRight: '8px' }}> 1.</Box>
            <Box>
              Documentation Review: Thoroughly assess all relevant documentation to align with
              program goals and identify areas for improvement.
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box style={{ paddingLeft: '15px', paddingRight: '8px' }}> 2.</Box>
            <Box>
              Goal Implementation: Effectively execute the Student Support Program goals based on
              insights gained from the documentation review.
            </Box>
          </Box>
          During this process, we collaborate closely with school staff, administrators, and other
          stakeholders to ensure our efforts align with their expectations and needs. By fostering
          open communication and teamwork, we build a strong partnership that enhances the
          effectiveness of the Student Support Program and ensures optimal outcomes for students.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '22px', md: '20px', lg: '50px' },
          height: { md: '255px', lg: '350px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: customColors.mainPurple,
            width: { md: '330px', lg: '465px' },
            minWidth: { md: '330px', lg: '465px' },
            height: { md: '255px', lg: '350px' },
            borderRadius: '20px',
            boxSizing: 'border-box',
            padding: '25px',
          }}
        >
          <Box
            component="img"
            src={TransformInnovate}
            alt={'innovate'}
            sx={{
              width: { xs: '46px', lg: '60px' },
              height: { xs: '58px', lg: '76px' },
              marginBottom: { xs: '16px', lg: '24px' },
              pointerEvents: 'none',
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '24px', lg: '34px' },
              color: customColors.mainAbYellow,
              marginBottom: { xs: '35px', lg: '50px' },
            }}
          >
            Transform and Innovate
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', lg: '26px' },
              color: customColors.mainWhite,
              textAlign: 'center',
            }}
          >
            Transform and innovate your student support program.
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: customColors.mainTextBackGroundColor,
            fontSize: { xs: '14px', lg: '18px' },
            padding: {
              xs: '10px 10px 50px 10px',
              md: '25px 25px 0px 25px',
              lg: '36px 36px 0px 36px',
            },
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            textAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          In the process of enhancing or rebuilding your school&apos;s support program, we conduct a
          comprehensive evaluation of the existing framework. Our objective is to implement targeted
          goals that address the school&apos;s specific needs. By maintaining regular follow-ups, we
          ensure the sustained effectiveness of these goals and continuously refine our approach.
          This iterative process ensures that the support program adapts to the evolving needs of
          your students, promoting ongoing growth and development.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'start',
          gap: { xs: '45px', md: '100px' },
          marginTop: { xs: '', md: '100px' },
        }}
      >
        <Box
          component="img"
          src={IvanaImage}
          alt={'data_driver_insights'}
          sx={{
            width: { xs: '200px', md: '250px' },
            height: { xs: '200px', md: '250px' },
            alignSelf: { xs: 'center', md: 'start' },
            pointerEvents: 'none',
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '28px', md: '32px', lg: '40px' },
              marginBottom: '20px',
              color: customColors.mainPurple,
              fontWeight: 700,
              textAlign: 'start',
            }}
          >
            Your Expert Partner in Student Support
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '14px', lg: '20px' },
              textAlign: 'start',
            }}
          >
            &apos;&apos;In the middle of difficulty lies opportunity.&apos;&apos; — Albert Einstein
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '14px', lg: '20px' },
              margin: { xs: '30px auto 24px', md: '30px auto 80px' },
              textAlign: 'start',
            }}
          >
            I lead student support in the Lower School division at the prestigious Polytechnic
            School in California. As the senior consultant for SenseiEdu, I am bringing that
            expertise to private and international schools through our consulting services. With a
            visionary approach and an unwavering commitment to efficiency, I will drive a
            transformation in the way student support services are delivered at your school.
            <br />
            <br /> My 15 years of experience in student support including international and private
            schools allows me to understand on a very deep level specialists&apos; struggles,
            teachers&apos; challenges, and students&apos; needs. This extensive experience allows me
            to address these needs comprehensively and effectively. <br />
            <br /> Through a strategic approach and a deep understanding of individual student
            needs, your school&apos;s student support services will evolve into a dynamic ecosystem
            tailored to each student’s unique strengths. I will streamline and optimize these
            services to help students overcome challenges and thrive independently, significantly
            enhancing their academic outcomes. My data-driven insights and collaborative approach
            will strengthen the support provided, fostering a sense of ownership and empowerment
            among students and educators.
            <br />
            <br />
            Connect with Sensei Edu to redefine student support and ensure that each student&apos;s
            journey is equipped with the tools, guidance, and resources they need to excel and
            flourish.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultingList;

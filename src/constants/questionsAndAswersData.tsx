import React, { ReactNode } from 'react';
import { customColors } from './colors';
import Link from '@mui/material/Link';
import { ROUTES } from '../enum/routingPath';

interface QuestionDetails {
  pointTitle: string | ReactNode;
  pointList: ReactNode[];
}

interface QuestionItem {
  summary: string;
  details: string | QuestionDetails;
}

interface QuestionCategory {
  category: string;
  data: QuestionItem[];
}

export const questionsData: Array<QuestionCategory> = [
  {
    category: 'Learn More About SenseiEdu.',
    data: [
      {
        summary: 'What is SenseiEdu Software?',
        details:
          'SenseiEdu Software provides the student support team with the opportunity to create  support plans within minutes,significantly decreasing administrative time and enhancing the overall quality of student support.',
      },
      {
        summary: 'What kind of documents can schools create?',
        details: {
          pointTitle: 'Schools can create the following reports:',
          pointList: [
            <span key={`Schools can create the following reports:1`}>
              &#9679;
              <span style={{ color: customColors.mainPurple, paddingInline: '5px' }}>
                Learning Support Plan
              </span>
              (if a student has academic needs)
            </span>,
            <span key={`Schools can create the following reports:2`}>
              &#9679;
              <span style={{ color: customColors.mainPurple, paddingInline: '5px' }}>
                Enrichment Plan
              </span>
              (if a student exhibits above-average performance and needs enrichment)
            </span>,
            <span key={`Schools can create the following reports:3`}>
              &#9679;
              <span style={{ color: customColors.mainPurple, paddingInline: '5px' }}>
                Behavioral Support Plan
              </span>
              (if a student has behavioral needs)
            </span>,
            <span key={`Schools can create the following reports:4`}>
              &#9679;
              <span style={{ color: customColors.mainPurple, paddingInline: '5px' }}>SEL Plan</span>
              (if a student needs social-emotional support)
            </span>,
            <span key={`Schools can create the following reports:5`}>
              &#9679;
              <span style={{ color: customColors.mainPurple, paddingInline: '5px' }}>
                Progress reports
              </span>
              (to share a student’s progress with parents and other stakeholders)
            </span>,
          ],
        },
      },
      {
        summary: 'What additional features are available on SenseiEdu?',
        details: {
          pointTitle:
            'Besides providing exceptionally straightforward learning support plans and progress reports creation, you will be able to:',
          pointList: [
            <span key={`Besides providing:1`}>&#9679; Get Analytics</span>,
            <span key={`Besides providing:2`}>
              &#9679; Share reports with one click directly from the platform
            </span>,
            <span key={`Besides providing:3`}>&#9679; Create, share, and assign Notes</span>,
          ],
        },
      },
      {
        summary: 'What kind of analytics will be provided?',
        details:
          'Data is a very powerful instrument in crafting individual or school-wide instructions. With SenseiEdu, you will gain insight into both the neurodiverse student population and students who need enrichment in your school. This will help you better understand the needs and strengths of your student support program. For example, data insights you may generate include the total number of neurodiverse students and those needing enrichment within your school per grade level, the subjects in which students need help or advanced instruction, as well as the frequency of services received.',
      },
      {
        summary: 'How can my school benefit from SenseiEdu solutions?',
        details:
          'Your school can GREATLY benefit from using our software to manage documentation for students on support, follow progress, diversify instructions, level up partnerships with parents by providing learning/accommodation plans and progress reports, and decrease overall administration time.',
      },
    ],
  },
  {
    category: 'Explore Our Consulting Services.',
    data: [
      {
        summary: 'What kind of Consulting Services are you providing?',
        details: {
          pointTitle:
            'Our consulting services will enhance administrative efficiency, streamline team collaboration, foster professional growth, and achieve student support objectives, ultimately enabling schools to effectively address the diverse needs of their students.<br/><br/><br/> The primary areas of consulting will include:<br/>',
          pointList: [
            <span key={`Our consulting services:1`}>
              a) Building support services from the ground up
            </span>,
            <span key={`Our consulting services:2`}>
              b) Reshaping, rebuilding, or enhancing your current student support program
            </span>,
            <span key={`Our consulting services:3`}>
              c) Offering guidance on the best instructional strategies and curriculum approaches
            </span>,
            <span key={`Our consulting services:4`}>
              d) Effectively collecting and utilizing various data points This revision aims to
              clarify that the consulting services are designed to improve student support and
              address various needs within educational institutions.
            </span>,
          ],
        },
      },
    ],
  },
  {
    category: 'Getting Started with SenseiEdu.',
    data: [
      {
        summary: 'How can I purchase SenseEdu Software or get your Consulting Services?',
        details: {
          pointTitle: (
            <span key={'How can I purchase-1'}>
              Please{' '}
              <Link
                underline="none"
                style={{ color: customColors.mainPurple, cursor: 'pointer', fontWeight: 600 }}
                href={ROUTES.GET_IN_TOUCH}
              >
                contact us
              </Link>{' '}
              to discuss your needs in more detail.
            </span>
          ),
          pointList: [
            "For purchasing Support Plans Management Software, we will provide you with all the necessary information and assist you through the setup process. For consulting services, fees will vary based on your school's needs, long-term goals, and 'retention time.<br/>  We look forward to exploring how we can assist you.",
          ],
        },
      },
    ],
  },
  {
    category: 'Service Regions.',
    data: [
      {
        summary: 'In which countries are your services available?',
        details:
          'SenseiEdu primarily operates in the United States, but both Consulting Services and Support Plans Management Software are available to international and independent/private schools worldwide.',
      },
    ],
  },
];

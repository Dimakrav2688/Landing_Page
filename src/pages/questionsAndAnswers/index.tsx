import React from 'react';
import { customColors } from '../../constants/colors';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { questionsData } from '../../constants/questionsAndAswersData';

const QuestionsAndAnswers = () => {
  return (
    <Box
      sx={{
        marginBlock: { xs: '50px', md: '150px' },
        display: 'flex',
        flexDirection: 'column',
        gap: { sm: '20px', md: '50px' },
      }}
    >
      {questionsData.map((questionBlock, index) => {
        return (
          <Box
            key={`${index}-${questionBlock.category}`}
            sx={{
              width: { xs: '100%', sm: '70%' },
            }}
          >
            <Box
              sx={{
                color: customColors.mainPurple,
                fontSize: { sm: '18px', md: '24px' },
                padding: '14px  24px',
                textAlign: 'start',
                fontWeight: '700',
                borderBottom: `1px solid ${customColors.secondary['300']}`,
                paddingBottom: '8px',
              }}
            >
              {questionBlock.category}
            </Box>

            <Box sx={{ marginTop: '15px' }}>
              {questionBlock.data.map((accordionItem, index) => {
                return (
                  <Accordion key={`${accordionItem.summary}- ${index}`}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id={`${accordionItem.summary}- ${index}`}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: '12px', sm: '14px', md: '18px' },
                          textAlign: 'start',
                        }}
                      >
                        {accordionItem.summary}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontSize: { xs: '12px', sm: '14px', md: '18px' } }}>
                      <>
                        {typeof accordionItem.details === 'object' ? (
                          <Box
                            sx={{
                              paddingLeft: { xs: '0', sm: '10px' },
                              width: '90%',
                              textAlign: 'start',
                              fontSize: { xs: '12px', sm: '14px', md: '18px' },
                            }}
                          >
                            <Box
                              sx={{
                                textAlign: 'start',
                                padding: {
                                  xs: '0 0 20px 0px',
                                  sm: '0 0 20px 10px',
                                  md: '0 0 20px 10px',
                                },
                              }}
                            >
                              {typeof accordionItem.details?.pointTitle === 'string' ? (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: accordionItem.details?.pointTitle || '',
                                  }}
                                />
                              ) : (
                                accordionItem.details?.pointTitle
                              )}
                            </Box>
                            {accordionItem.details?.pointList && (
                              <Box
                                sx={{
                                  textAlign: 'start',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '10px',
                                  padding: {
                                    xs: '0 0 25px 0px',
                                    sm: '0 0 25px 20px',
                                    md: '0 0px 30px 35px',
                                    lg: '0 0px 50px 50px',
                                  },
                                  fontSize: { xs: '12px', sm: '14px', md: '18px' },
                                }}
                              >
                                {accordionItem.details.pointList.map((point, index) => {
                                  return (
                                    <Box key={`${'point'}-${index}`}>
                                      {typeof point === 'string' ? (
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: point || '',
                                          }}
                                        />
                                      ) : (
                                        point
                                      )}
                                    </Box>
                                  );
                                })}
                              </Box>
                            )}
                          </Box>
                        ) : (
                          <Typography
                            sx={{
                              padding: {
                                xs: '0 0 25px 0',
                                sm: '0 0 25px 20px',
                                md: '0 0px 30px 35px',
                                lg: '0 0px 50px 50px',
                              },
                              width: '90%',
                              textAlign: 'start',
                              fontSize: { xs: '12px', sm: '14px', md: '18px' },
                            }}
                          >
                            {accordionItem.details}
                          </Typography>
                        )}
                      </>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default QuestionsAndAnswers;

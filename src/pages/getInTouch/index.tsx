import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { customColors } from '../../constants/colors';

const requestDemoFields = [
  { label: 'First Name*', fieldName: 'name' },
  { label: 'Last Name*', fieldName: 'lastName' },
  { label: 'School Name*', fieldName: 'schoolName' },
  { label: 'Email address*', fieldName: 'email' },
  { label: 'State*', fieldName: 'state' },
  { label: 'textArea', fieldName: 'textArea' },
];

const GetInTouch = () => {
  const [getInTouchFormData, setGetInTouchFormData] = useState({
    name: '',
    lastName: '',
    schoolName: '',
    email: '',
    state: '',
    textArea: '',
  });

  const handeSubmitGetInTouchForm = () => {
    // fetch('/')
  };
  console.info('getInTouchFormData', getInTouchFormData);
  return (
    <Box sx={{ marginBlock: { xs: '40px', sm: '160px', md: '236px' } }}>
      <Typography
        sx={{
          color: customColors.mainPurple,
          fontSize: { xs: '28px', md: '38px' },
          textAlign: 'start',
          paddingLeft: { md: '40px' },
        }}
      >
        Or, send a message via online contact form
      </Typography>
      <form onSubmit={handeSubmitGetInTouchForm}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '25px', sm: '50px' },
          }}
        >
          <Box
            sx={{
              margin: { xs: '20px  0 25px', sm: '70px 30px 30px', md: '100px 40px 0 50px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              height: 'fit-content',
            }}
          >
            {requestDemoFields.map((field, index) => {
              if (field.fieldName === 'textArea') {
                return (
                  <TextField
                    onChange={(event) => {
                      setGetInTouchFormData((prevState) => ({
                        ...prevState,
                        [field.fieldName]: event.target.value,
                      }));
                    }}
                    key={`${index}-${field.fieldName}`}
                    label="Type your message here"
                    multiline
                    rows={8} // кількість рядків текстової області
                    variant="outlined"
                    sx={{
                      width: { xs: '100%', sm: '90%', md: '70%' },
                      marginTop: { xs: '40px', md: '30px' },
                      '& .MuiInputLabel-root': {
                        color: customColors.textAreaColor, // size label
                        fontSize: '28px',
                      },
                      '& .MuiInputLabel-shrink': {
                        fontSize: '16px', // label size when exist focus
                        color: customColors.mainPurple,
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: customColors.mainPurple, // border custom
                          borderRadius: '15px',
                        },
                        '&:hover fieldset': {
                          borderColor: customColors.mainMagentaPurple, // border custom during hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: customColors.mainMagentaPurple, // border custom color during hover
                        },
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: customColors.mainWhite, //background color text ares
                        padding: '30px 20px',
                        color: customColors.mainPurple,
                        fontSize: '28px',
                      },
                    }}
                  />
                );
              } else {
                return (
                  <Box
                    key={`${index}-${field.fieldName}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '50px',
                      gap: { xs: '0', sm: '30px' },
                      justifyContent: { xs: 'space-between', sm: 'unset' },
                      color: customColors.mainPurple,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: { xs: '20px', md: '28px' },
                        minWidth: { xs: '125px', md: '170px' },
                        textAlign: 'start',
                      }}
                    >
                      {field.label}
                    </Box>
                    <TextField
                      onChange={(event) => {
                        setGetInTouchFormData((prevState) => ({
                          ...prevState,
                          [field.fieldName]: event.target.value,
                        }));
                      }}
                      id="outlined-basic"
                      sx={{
                        width: { xs: '200px', sm: '268px', lg: '370px' },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRadius: '30px',
                          border: 'none',
                          backgroundColor: '#37332F0A',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& input': {
                            paddingInline: { xs: '15px', sm: '25px' }, // additional space for text  inside input and other text style
                            color: customColors.mainPurple,
                            fontSize: { xs: '14px', md: '20px' },
                          },
                        },
                      }}
                    />
                  </Box>
                );
              }
            })}
          </Box>
          <Button
            type={'submit'}
            variant="contained"
            sx={{
              alignSelf: { xs: 'center', sm: 'end' },
              margin: { xs: '0 auto 25px', sm: ' 0 35% 32px 0', md: '0 35% 46px 50px' },
              fontSize: { xs: '18px', md: '26px' },
              width: { xs: '145px', sm: '220px' },
            }}
          >
            Send message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default GetInTouch;

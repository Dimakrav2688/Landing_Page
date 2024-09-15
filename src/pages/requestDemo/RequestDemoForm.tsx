import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { customColors } from '../../constants/colors';
import RequestDemoImage from '../../assets/requestDemo/RequestDemoImage.svg';

const requestDemoFields = [
  { label: 'First Name*', fieldName: 'name' },
  { label: 'Last Name*', fieldName: 'lastName' },
  { label: 'School Name*', fieldName: 'schoolName' },
  { label: 'Email address*', fieldName: 'email' },
  { label: 'State*', fieldName: 'state' },
];

const RequestDemoForm = () => {
  const [requestDemoFormData, setRequestDemoFormData] = useState({
    name: '',
    lastName: '',
    schoolName: '',
    email: '',
    state: '',
  });

  const handeSubmitRequestDemoForm = () => {
    // fetch('/')
  };

  return (
    <Box
      sx={{
        position: 'relative',
        margin: { xs: '100px 0 100px', sm: '85px 0 150px', md: '125px 0 200px' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          right: { xs: '-16px', sm: 'unset' },
          left: { xs: '-16px', sm: 'unset' },
          width: { xs: '100vw', sm: '50%' },
          height: { sx: '250px', sm: 'unset' },
          backgroundColor: customColors.mainPurple,
        }}
      >
        <Box
          component="img"
          src={RequestDemoImage}
          alt={'demo'}
          sx={{
            width: { xs: 180, sm: '80%', lg: 530 },
            height: { xs: 180, sm: 380, lg: 530 },
            margin: { xs: '40px auto', sm: '0 0 0 40px' },
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          border: { xs: 'none', sm: '1px solid #413A841A ' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', md: '25px' },
            padding: {
              xs: '50px 15px 25px',
              sm: '60px 30px  0 30px ',
              md: '80px 50px  0 40px ',
              lg: '100px 130px  0 40px ',
            },
            textAlign: 'start',
          }}
        >
          Request a demo of SenseiEdu software to explore how it can revolutionize your student
          support team&apos;s workflow
        </Typography>
        <form onSubmit={handeSubmitRequestDemoForm}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
              border: { xs: '1px solid #413A841A ', sm: 'none' },
            }}
          >
            <Box
              sx={{
                margin: { xs: '20px 20px 0 25px', sm: '100px 30px 30px', md: '250px 40px 0 50px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: 'fit-content',
              }}
            >
              {requestDemoFields.map((field, index) => (
                <Box
                  key={`${index}-${field.fieldName}`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '50px',
                    gap: '20px',
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: '12px', md: '18px', minWidth: 'fit-content' },
                      flex: { xs: '1 0 30%', sm: '1 0 30%', md: '1 0 33%', lg: '1 0 40%' },
                      textAlign: 'start',
                    }}
                  >
                    {field.label}
                  </Box>
                  <TextField
                    onChange={(event) => {
                      setRequestDemoFormData((prevState) => ({
                        ...prevState,
                        [field.fieldName]: event.target.value,
                      }));
                    }}
                    id="outlined-basic"
                    sx={{
                      width: { xs: '300px', sm: '200px', md: '268px', lg: '370px' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '30px',
                        border: 'none',
                        backgroundColor: '#37332F0A',
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Button
              type={'submit'}
              variant="contained"
              sx={{
                alignSelf: { xs: 'center', sm: 'end' },
                margin: { xs: '0 0 25px 25px', sm: ' 0 32px 32px 0', md: '0 40px 46px 50px' },
                fontSize: { xs: '14px', md: '18px' },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RequestDemoForm;

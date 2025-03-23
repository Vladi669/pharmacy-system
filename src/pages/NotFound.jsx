import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 3,maxWidth:'300px' }}
      >
        Go Back to Home
      </CustomButton>
    </Box>
  );
};

export default NotFound;
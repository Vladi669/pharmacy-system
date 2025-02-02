import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'admin') {
      navigate('/');
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: '50vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center vertically
          mt: '10vh',
          boxShadow: 3,
          borderRadius: 2, // Rounded corners
          p: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
          backdropFilter: 'blur(10px)', // Adds a blurred background effect
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          Welcome Back
        </Typography>
        <Typography component="p" variant="subtitle1" sx={{ mb: 4, color: 'gray' }}>
          Please enter your login details
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& label.Mui-focused': {
                color: '#3f51b5', // Change label color on focus
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3f51b5', // Border color
                },
                '&:hover fieldset': {
                  borderColor: '#3f51b5', // Hover border color
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3f51b5', // Focused border color
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& label.Mui-focused': {
                color: '#3f51b5',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3f51b5',
                },
                '&:hover fieldset': {
                  borderColor: '#3f51b5',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#3f51b5', // Primary color
              '&:hover': {
                backgroundColor: '#303f9f', // Darker on hover
              },
              fontWeight: 'bold',
              p: 1.5,
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

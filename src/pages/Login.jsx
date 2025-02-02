import React from 'react';
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Login = () => {
  return (
    <>
    <Container maxWidth="sm" >
    <Box
    sx={{
      height: '80vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center vertically
    }}
  >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Login;

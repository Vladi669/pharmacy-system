import React, { useState } from 'react';
import { Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { postLoginUser } from '../utils/https';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        postLoginUser({ email: email, password: password })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('isAdmin', response.data.userData.isAdmin);
                    localStorage.setItem('name', response.data.userData.name);

                    navigate("/");
                    window.location.reload();
                }
            })
            .catch(error => {
                if (error.response) {
                    const status = error.response.status;
                    const message = error.response.data.message || 'An error occurred';
                    console.log(message);
                    setError(`${message}`);
                } else if (error.request) {
                    setError('No response received from the server');
                } else {
                    setError('An unexpected error occurred');
                }
            });
    };

    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/login.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        }}>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        height: '50vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '10vh',
                        boxShadow: 3,
                        borderRadius: 2,
                        p: 4,
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 36px rgba(0, 208, 255, 0.3)',
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
                        <CustomTextField
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
                        />
                        <CustomTextField
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
                        />
                        <CustomButton
                            type="submit"
                        >
                            Sign In
                        </CustomButton>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Don't have an account?{' '}
                            <Link to="/register" style={{ color: '#0d8e9d', textDecoration: 'none', fontWeight: 'bold' }}>
                                Register here
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Login;
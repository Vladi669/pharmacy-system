import React, { useState } from 'react';
import { Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { putRegisterUser } from '../utils/https';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';

const Register = () => {
    const [name, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        putRegisterUser({ name, lastName, email, password })
            .then(response => {
                if (response.status === 201) {
                    navigate("/");
                }
            })
            .catch(error => {
                if (error.response) {
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
                        height: '60vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '10vh',
                        boxShadow: 3,
                        borderRadius: 2,
                        p: 4,
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Create Your Account
                    </Typography>
                    <Typography component="p" variant="subtitle1" sx={{ mb: 4, color: 'gray' }}>
                        Please enter your details to register
                    </Typography>

                    {error && <Alert severity="error">{error}</Alert>}

                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 1 }}>
                        <CustomTextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                            autoFocus
                            value={name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <CustomTextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <CustomTextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <CustomButton
                            type="submit"
                        >
                            Register
                        </CustomButton>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Already have an account?{' '}
                            <Link to="/login" style={{ color: '#0d8e9d', textDecoration: 'none', fontWeight: 'bold' }}>
                                Login here
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Register;
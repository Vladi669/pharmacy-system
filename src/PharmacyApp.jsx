import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './pages/Home'; // Import the new Home component
import Login from './pages/Login'; // Import the Login component
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Products from './pages/Products';

const PharmacyApp = () => {
  return (
    <div>
        <ResponsiveAppBar/>
    <Router>
      <Box
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Box>
    </Router>
    </div>

  );
};

export default PharmacyApp;

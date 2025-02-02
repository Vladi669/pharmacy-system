import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ProductGrid from '../components/ProductGrid';
import { lightGreen } from '@mui/material/colors';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: '100vw',
          minHeight: '700px',
          color: 'white',
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          

          alignItems: 'center',
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom
        sx={{pt:20}}>
          Welcome to the Pharmacy System
        </Typography>
        <Typography variant="body1">
          Manage prescriptions, inventory, and orders easily.
        </Typography>
      </Box>
      <Box sx={{backgroundColor:'#F8F8F8'}}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', paddingTop: '50px' }}>
        Latest Products
      </Typography>
      <ProductGrid />
      </Box>

    </>
  );
};

export default Home;

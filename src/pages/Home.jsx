import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../utils/https';
import CustomTextField from '../components/CustomTextField';
import Footer from '../components/Footer';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
      const [loading, setLoading] = useState(true);
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts({
          searchQuery: searchTerm,
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
  
    // Fetch products when any filter or search term changes
    useEffect(() => {
      loadProducts();
    }, [searchTerm]);
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            pt: 20,
            fontSize: '3rem', // Larger font size
            fontWeight: 'bold', // Make it bold
            letterSpacing: '0.1rem', // Add letter spacing for a modern look
            background: 'linear-gradient(to right,rgb(3, 251, 255),rgb(0, 247, 255))', // Gradient text effect
            WebkitBackgroundClip: 'text', // This is needed to make the gradient only affect the text
            WebkitTextFillColor: 'transparent', // This will make the text color transparent, showing the gradient
            textAlign: 'center', // Center-align text
            textTransform: 'uppercase', // Make the text uppercase for emphasis
            textShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)', // Add subtle text shadow

          }}
        >
          Welcome to the Pharmacy System
        </Typography>

        <Typography variant="body1" sx={{ color: 'rgb(3, 251, 255)', fontSize: 20 }}>
          Manage prescriptions, inventory, and orders easily.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#F8F8F8' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            paddingTop: '50px',
            fontWeight: 'bold', // Makes the text bold
            color: '#0d8e9d', // Custom text color (change to your desired color)
            letterSpacing: '1.5px', // Adds spacing between letters
            marginBottom: '30px', // Adjusts the bottom margin

          }}
        >
          Latest Products
        </Typography>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '350px',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: 2,
          pt:0.5,
          pb:1,
          borderRadius: 3,
          boxShadow: '0 4px 14px rgba(0, 208, 255, 0.3)',
          margin: '0 auto',
        }}
      >
        <CustomTextField
          name="Product Name"
          label="Product Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
     <ProductGrid products={products} />
      </Box>
      <Footer/>

    </>
  );
};

export default Home;

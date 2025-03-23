import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import ProductList from '../components/ProductList';
import { fetchProducts, deleteProduct } from '../utils/https';
import CustomTextField from '../components/CustomTextField';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // To store the search term

  // Fetch products, with optional search term
  const loadProducts = async (searchQuery = '') => {
    setLoading(true);
    try {
      const response = await fetchProducts({ searchQuery });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  // Fetch products when the search term changes or on component mount
  useEffect(() => {
    loadProducts(searchTerm); // Call with the current search term
  }, [searchTerm]); // Dependency on searchTerm so it triggers whenever the search term changes

  // Handle product deletion
  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);  // Assuming this sends a delete request to the server

      // Filter out the deleted product from the state array
      const remainingProducts = products.filter((product) => product._id !== productId);

      // Update the state with the remaining products
      setProducts(remainingProducts);
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/login.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          paddingTop: '30px',
          fontSize: '3rem',
          color: '#0d8e9d',
          letterSpacing: '1.5px',
          fontWeight: '300',
        }}
      >
        All Products
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center content vertically

          maxWidth: '350px',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: 2,
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
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '10px',
            },
          }}
        />
      </Box>

      {/* Show products list */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
}
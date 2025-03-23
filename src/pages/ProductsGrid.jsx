import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../utils/https';
import CustomTextField from '../components/CustomTextField';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [mg, setMg] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  // Fetch products with optional search and filters
  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts({
        searchQuery: searchTerm,
        category,
        mg,
        manufacturer,
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  // Fetch products when any filter or search term changes
  useEffect(() => {
    loadProducts();
  }, [searchTerm]);

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
    <>
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
          fontSize: '2.6rem',
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

      {/* Filter and Products Alignment */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on mobile and side by side on larger screens
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 2,
      }}>
        {/* Filter Component */}
        <Filter
          category={category}
          setCategory={setCategory}
          mg={mg}
          setMg={setMg}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          onApplyFilters={loadProducts} // This is still here, but will be used only for initial load
        />

        {/* Display Products */}
        <Box sx={{ flex: 1 }}>
          {/* Loading Spinner */}
          {/* {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          )} */}
<ProductGrid products={products} />
          {/* Display products when loading is false */}
          {/* {!loading && <ProductGrid products={products} />} */}
        </Box>
      </Box>
    </div>
    <Footer/>
    </>
  );
}
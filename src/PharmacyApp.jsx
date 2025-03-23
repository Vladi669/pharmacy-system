import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Home from './pages/Home';
import Login from './pages/Login';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Products from './pages/ProductsList';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import ProductList from './components/ProductList';
import AllProducts from './pages/ProductsGrid';
import ProductDetailPage from './pages/ProductDetail';
import NotFound from './pages/NotFound'; // Import the 404 page

const PharmacyApp = () => {
  // Check if the user is admin by fetching from localStorage
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div>
      <ResponsiveAppBar />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />

            {/* Conditionally render admin routes */}
            {isAdmin && (
              <>
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/editProduct/:productId" element={<AddProduct />} />
                <Route path="/productLists" element={<Products />} />
              </>
            )}

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
};

export default PharmacyApp;
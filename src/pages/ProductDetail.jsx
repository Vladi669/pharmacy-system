import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Button, Paper, Grid, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/https';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom'; // For navigation
import Footer from '../components/Footer';
import { imageUrl } from '../utils/https';
const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [preview, setPreview] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch product details
    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const response = await getProductById(productId);
                    setProduct(response);
                    setPreview(`${response.imagePath}`);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching product:', error);
                    setErrorMessage('Error fetching product data.');
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [productId]);
    const goBack = () => {
        navigate(`/products`); // Navigate to the AddProduct page with product ID
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (errorMessage) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">
                    {errorMessage}
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
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ mt:'3rem',mr:'2rem',  minHeight: '100vh' }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        color: '#0d8e9d',
                        letterSpacing: '1.5px',
                    }}
                >
                    {product.name}
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Product Image */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {preview && (
                            <img
                                src={preview}
                                alt={product.name}
                                style={{
                                    backgroundColor: '#f5f5f5',
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 14px rgba(0, 208, 255, 0.3)',
                                }}
                            />
                        )}
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ borderRadius: '8px', boxShadow: '0px 4px 14px rgba(0, 208, 255, 0.2)', padding: '1.5rem' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: '1rem' }}>
                                    Manufacturer: {product.manufacturer}
                                </Typography>

                                <Typography variant="body1" sx={{ marginBottom: '1.5rem', color: 'text.primary' }}>
                                    {product.description}
                                </Typography>

                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0d8e9d', marginBottom: '1rem' }}>
                                    Price: {product.price}лв
                                </Typography>

                                {/* Add to Cart Button */}
                                <CustomButton
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        width: '30%',

                                    }}
                                    onClick={() => goBack()}

                                >
                                    Go back
                                </CustomButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
        
        <Footer/>
        </>
    );
};

export default ProductDetailPage;
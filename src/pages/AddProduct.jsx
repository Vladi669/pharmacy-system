import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Alert, MenuItem, FormControl, Select, InputLabel, TextField } from '@mui/material';
import CustomTextField from '../components/CustomTextField';
import CustomButton from '../components/CustomButton';
import { useParams, useNavigate } from 'react-router-dom';
import { postProduct, getProductById, updateProduct } from '../utils/https';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        manufacturer: '',
        packaging: '',
        category: '',  // New state for category
        imagePath: '' // Image URL state
    });
    const [preview, setPreview] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const { productId } = useParams();
    const navigate = useNavigate();

    // If there's an ID in the URL, fetch the product details
    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                try {
                    const response = await getProductById(productId);  // Fetch product by ID
                    setProduct(response);  // Set fetched data into the form
                   // setPreview(`${imageUrl}${response.imagePath}`);  // Set image preview if available
                } catch (error) {
                    console.error('Error fetching product:', error);
                    setErrorMessage('Error fetching product data.');
                }
            };
            fetchProduct();
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });

        // If imageUrl is changed, update the preview
        if (name === 'imagePath') {
            setPreview(value);
        }
    };

    const resetForm = () => {
        setProduct({
            name: '',
            description: '',
            price: '',
            quantity: '',
            manufacturer: '',
            packaging: '',
            category: '', // Reset category
            imagePath: '' // Reset image URL
        });
        setPreview('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.imagePath && !productId) {
            setErrorMessage('Please provide an image URL.');
            return;
        }

        try {
            let result;
            if (productId) {
                // If productId exists, update the product
                result = await updateProduct(productId, {
                    ...product,
                
                });
                setSuccessMessage('Product updated successfully!');
            } else {
                // Otherwise, create a new product
                result = await postProduct({
                    ...product,
                    
                });
                setSuccessMessage('Product added successfully!');
            }

            // Reset the form after successful submission
            resetForm();
            navigate('/productLists');  // Navigate to the product list page
        } catch (error) {
            console.error('Error submitting product:', error);
            setErrorMessage('Error adding or updating product.');
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/login.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        my: 4,
                        p: 4,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 36px rgba(0, 208, 255, 0.4)',
                    }}
                >
                    <Typography variant="h4" gutterBottom align="center">
                        {productId ? 'Edit Product' : 'Add New Product'}
                    </Typography>

                    {errorMessage && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {errorMessage}
                        </Alert>
                    )}
                    {successMessage && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            {successMessage}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 2 }}>
                            <CustomTextField
                                label="Product Name"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <CustomTextField
                                label="Product Description"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                required
                                multiline
                                rows={4}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <CustomTextField
                                label="Price"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                required
                                type="double"
                                inputProps={{ min: 0 }}
                            />
                            <CustomTextField
                                label="Quantity"
                                name="quantity"
                                value={product.quantity}
                                onChange={handleChange}
                                required
                                type="number"
                                inputProps={{ min: 0 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <CustomTextField
                                label="Manufacturer"
                                name="manufacturer"
                                value={product.manufacturer}
                                onChange={handleChange}
                                required
                            />
                            <CustomTextField
                                label="Packaging"
                                name="packaging"
                                value={product.packaging}
                                onChange={handleChange}
                                required
                                helperText="e.g., 50mg, 100mg, 250ml"
                            />
                        </Box>

                        {/* Category Dropdown */}
                        <Box sx={{ mb: 2 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    label="Category"
                                    name="category"
                                    value={product.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="антисептични">Антисептични</MenuItem>
                                    <MenuItem value="бинтове и марли">Бинтове и марли</MenuItem>
                                    <MenuItem value="за сърдечни заболявания">За сърдечни заболявания</MenuItem>
                                    <MenuItem value="успокоителни">Успокоителни</MenuItem>
                                    <MenuItem value="други">Други</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Image URL input */}
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                label="Image URL"
                                name="imagePath"
                                value={product.imagePath}
                                onChange={handleChange}
                                fullWidth
                                required
                                helperText="Paste image URL here"
                            />
                            {preview && (
                                <Box sx={{ mt: 2 }}>
                                    <img
                                        src={preview}
                                        alt="Image Preview"
                                        style={{ width: '20%', borderRadius: '8px' }}
                                    />
                                </Box>
                            )}
                        </Box>

                        <Box>
                            <CustomButton type="submit">
                                {productId ? 'Update Product' : 'Add Product'}
                            </CustomButton>
                        </Box>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddProduct;
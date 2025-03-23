import React from 'react';
import { Card, CardContent, Typography, Button, Box,Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products, onDelete }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Set the current product in edit mode
  const enterEditMode = (productId) => {
    navigate(`/editProduct/${productId}`, { state: { product: productId } }); // Navigate to the AddProduct page with product ID
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack cards vertically on all screens
          gap: 2,
          p: { xs: 2, sm: 5 }, // Responsive padding
        }}
      >
        {products.map((product) => (
          <Box
            key={product._id}
            sx={{
              width: '100%',
              minWidth: { xs: '100%', sm: '350px' }, // Full width on mobile, smaller width on larger screens
              flexShrink: 0,
              mb: 2,
            }}
          >
            <Card
              sx={{
                boxShadow: 6,
                transition: '0.3s',
                '&:hover': { boxShadow: '0 4px 36px rgba(0, 208, 255, 0.8)' },
                borderRadius: 2, // Softer corners for mobile experience
              }}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      display: 'inline-block',
                      mr: 2,
                      fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust font size for mobile
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      display: { xs: 'none', sm: 'inline-block' }, // Hide on mobile
                      mr: 2,
                    }}
                  >
                    Price: ${product.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      display: { xs: 'none', sm: 'inline-block' }, // Hide on mobile
                      mr: 2,
                    }}
                  >
                    Quantity: {product.quantity}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: { xs: 'none', sm: 'inline-block' }, // Hide on mobile
                      mr: 2,
                    }}
                  >
                    {product.description.length > 40 ? product.description.substring(0, 40) + '...' : product.description}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: '#0d8e9d', '&:hover': {
                        backgroundColor: '#14b5c5',
                      },
                      mr: 1,
                      fontSize: { xs: '0.7rem', sm: '0.875rem' }, // Smaller button text on mobile
                    }}
                    variant="contained"
                    onClick={() => enterEditMode(product._id)}
                  >
                    Edit
                  </Button>
                  <Button
                  size="small"
                  sx={{ fontSize: '0.875rem' }}
                  variant="contained"
                  color="error"
                  onClick={() => onDelete(product._id)} // Call onDelete from parent
                >
                  Delete
                </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
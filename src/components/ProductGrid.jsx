import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Box, Divider } from '@mui/material';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom'; // For navigation

const ProductGrid = ({ products }) => {
  const navigate = useNavigate(); // Hook for navigation
  const enterEditMode = (productId) => {
    navigate(`/product/${productId}`, { state: { product: productId } }); // Navigate to the AddProduct page with product ID
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4, pb: 10 }}>
      <Grid container spacing={2} >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product._id}>
            <Card sx={{ boxShadow: 6, transition: '0.3s', '&:hover': { boxShadow: 10 } }}>
              {product.imagePath && (
                <CardMedia
                  component="img"
                  height="140"
                  image={`${product.imagePath}`}
                  alt={product.name}
                  sx={{ objectFit: 'contain', padding: 1 }}
                />
              )}
              <CardContent sx={{ padding: '8px 16px' }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline-block', mr: 1 }}>
                  {product.manufacturer}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline-block', mr: 1 }}>
                  | {product.packaging}
                </Typography>
                <br></br>
                <Divider />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: 'inline-block', mr: 1, mt: 1, minHeight: '40px' }}
                >
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + '...'
                    : product.description}
                </Typography>

                <Typography variant="body1" color="text.primary" sx={{ mt: 1, fontWeight: 'bold' }}>
                  {product.price}лв
                </Typography>

                <CustomButton size="small" sx={{ mt: 1 }} variant="contained" onClick={() => enterEditMode(product._id)}>
                  View Product
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
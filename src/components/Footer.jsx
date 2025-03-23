import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
       
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section: About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Welcome to our pharmacy! We offer a wide range of products to cater to your health needs, ensuring top-notch quality and fast delivery.
            </Typography>
          </Grid>

          {/* Section: Useful Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Useful Links
            </Typography>
            <Link href="/products" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Products
            </Link>
            <Link href="/addProduct" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Add Product
            </Link>
            <Link href="/productLists" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Product Lists
            </Link>
            <Link href="/contact" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Contact Us
            </Link>
          </Grid>

          {/* Section: Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
              Email: support@pharmacy.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
              Phone: +1 (800) 123-4567
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
              <IconButton href="https://facebook.com" sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://instagram.com" sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Pharmacy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
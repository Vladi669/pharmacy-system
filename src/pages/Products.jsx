import React from 'react'
import ProductGrid from '../components/ProductGrid'
import { Box, Typography } from '@mui/material'

export default function () {
  return (
    <div>
        <Box sx={{backgroundColor:'#F8F8F8'}}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', paddingTop: '50px' }}>
        All Products
      </Typography>
      <ProductGrid />
      </Box>
    </div>
  )
}

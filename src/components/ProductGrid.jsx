import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';

const products = [
  { id: 1, name: 'Aspirin', description: 'Pain reliever and fever reducer', image: 'https://sopharmacy.bg/media/sys_master/hc1/h0f/9044406796318.jpg' },
  { id: 2, name: 'Paracetamol', description: 'Used to treat pain and fever', image: 'https://sopharmacy.bg/media/sys_master/h9e/h63/8912501964830.jpg' },
  { id: 3, name: 'Ibuprofen', description: 'Nonsteroidal anti-inflammatory drug', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ibuprofen_pills.jpg/1280px-Ibuprofen_pills.jpg' },
  { id: 4, name: 'Antibiotic Cream', description: 'Used to treat minor cuts and burns', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Antibiotic_ointment.jpg' },
  { id: 5, name: 'Cough Syrup', description: 'Used to treat coughing and related symptoms', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cough_syrup.jpg/800px-Cough_syrup.jpg' },
  { id: 6, name: 'Vitamins', description: 'Daily supplement for better health', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Multivitamins_tablets_and_softgels.jpg/800px-Multivitamins_tablets_and_softgels.jpg' },
  { id: 7, name: 'Band-Aids', description: 'For covering and protecting wounds', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Adhesive_bandage.jpg/800px-Adhesive_bandage.jpg' },
  { id: 8, name: 'Cold Pack', description: 'For reducing swelling and pain', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cold_pack.jpg/800px-Cold_pack.jpg' },
  { id: 9, name: 'Amoxicillin', description: 'Antibiotic to fight bacterial infections', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Amoxicillin_capsules.jpg/800px-Amoxicillin_capsules.jpg' },
  { id: 10, name: 'Eye Drops', description: 'Used to relieve eye irritation and redness', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Artificial_tears.jpg/800px-Artificial_tears.jpg' },
  { id: 11, name: 'Antacid Tablets', description: 'For relief from indigestion and heartburn', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Antacid_tablets.jpg/800px-Antacid_tablets.jpg' },
  { id: 12, name: 'Hand Sanitizer', description: 'Alcohol-based gel for sanitizing hands', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hand_sanitizer_gel.jpg/800px-Hand_sanitizer_gel.jpg' },
  { id: 13, name: 'Thermometer', description: 'Used to measure body temperature', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Digital_thermometer.jpg/800px-Digital_thermometer.jpg' },
  { id: 14, name: 'Insulin Syringes', description: 'For administering insulin', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Insulin_syringe.jpg/800px-Insulin_syringe.jpg' },
  { id: 15, name: 'Medical Gloves', description: 'Disposable gloves for hygiene and protection', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Medical_gloves.jpg/800px-Medical_gloves.jpg' },
  { id: 16, name: 'Saline Nasal Spray', description: 'Relieves nasal congestion and dryness', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nasal_spray.jpg/800px-Nasal_spray.jpg' }
]



const ProductGrid = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ boxShadow: 6, transition: '0.3s', '&:hover': { boxShadow: 10 } }}>
            <CardMedia
                component="img"
                height="160"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Button size="small" sx={{ mt: 2 }} variant="contained">
                  View Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;

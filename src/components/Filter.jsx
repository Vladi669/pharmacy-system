import React, { useState } from 'react';
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Button, Drawer, IconButton, useMediaQuery, Typography, Divider } from '@mui/material';
import { FilterList } from '@mui/icons-material'; // Import icon for mobile filter button
import { useTheme } from '@mui/material/styles';
import CustomButton from './CustomButton';

const categories = [
  "антисептични", "бинтове и марли", "за сърдечни заболявания", "успокоителни", "други"
];

const Filter = ({ category, setCategory, mg, setMg, manufacturer, setManufacturer, onApplyFilters }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the Drawer open/close
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen is mobile or tablet

  // Handle Drawer opening and closing
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Show Filter Button only on Mobile */}
      {isMobile && (
        <IconButton
          sx={{ position: 'fixed', top: 100, left: 20, zIndex: 1000,backgroundColor:'#0d8e9d',color:'white' }}
          color="white"
          onClick={() => toggleDrawer(true)}
        >
          <FilterList />
        </IconButton>
      )}

      {/* Drawer for Filters (only on Mobile) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '90vw',
            padding: '16px',
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Category Filter */}
          <Typography sx={{fontSize:20,alignSelf:'center',pb:2}}>
                Filter
            </Typography>
          <FormControl sx={{ mb: 2, width: '100%' }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>{cat}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* mg Filter */}
          <TextField
            label="mg/ml"
            value={mg}
            onChange={(e) => setMg(e.target.value)}
            type="number"
            sx={{ mb: 2, width: '100%' }} // Set full width and spacing between fields
          />

          {/* Manufacturer Filter */}
          <TextField
            label="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            sx={{ mb: 2, width: '100%' }}
          />

          {/* Apply Filters Button */}
          <CustomButton
            variant="contained"
            color="primary"
            onClick={() => {
              onApplyFilters();
              toggleDrawer(false); // Close the drawer after applying filters
            }}
            sx={{ width: '100%' }}
          >
            Apply Filters
          </CustomButton>
        </Box>
      </Drawer>

      {/* Display Filter Panel on Larger Screens (Desktop/Tablets) */}
      {!isMobile && (
        <Box sx={{
          position: 'sticky',
          top: 20,
          padding: '16px',
          backgroundColor: 'white',
          boxShadow: '0 4px 14px rgba(0, 208, 255, 0.3)',
          width: '250px',
          marginLeft: '50px',
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography sx={{fontSize:20,alignSelf:'center',pb:2}}>
                Filter
            </Typography>
            {/* Category Filter */}
            <FormControl sx={{ mb: 2, width: '100%' }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((cat, index) => (
                  <MenuItem key={index} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* mg Filter */}
            <TextField
              label="mg/ml"
              value={mg}
              onChange={(e) => setMg(e.target.value)}
              type="number"
              sx={{ mb: 2, width: '100%' }} // Set full width and spacing between fields
            />

            {/* Manufacturer Filter */}
            <TextField
              label="Manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              sx={{ mb: 2, width: '100%' }}
            />

            {/* Apply Filters Button */}
            <CustomButton
              variant="contained"
              color="primary"
              onClick={onApplyFilters}
              sx={{ width: '100%' }}
            >
              Apply
            </CustomButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Filter;
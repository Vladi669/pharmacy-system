import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  onClick,
  type = 'button',
  sx = {},
  size,
  ...props
}) => {
  return (
    <Button
      type={type}
      fullWidth
      variant="contained"
    
      sx={{
        mt: 3,
        mb: 2,
        backgroundColor: '#014d5b',
        '&:hover': {
          backgroundColor: '#0d8e9d',
        },
        fontWeight: 'bold',
        p: 1.5,
        ...sx,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({
  label,
  value,
  onChange,
  type = 'text',
  id,
  name,
  autoComplete,
  required = false,
  sx = {},
  ...props
}) => {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      sx={{
        '& label.Mui-focused': {
          color: '#014d5b',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#014d5b',
          },
          '&:hover fieldset': {
            borderColor: '#014d5b',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#014d5b',
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default CustomTextField;

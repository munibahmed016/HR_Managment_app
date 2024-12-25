import React from 'react';
import { Typography, Box } from '@mui/material';

const HRPage = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4, textAlign: 'center', boxShadow: 3 }}>
      <Typography variant="h3">Welcome HR</Typography>
      <Typography variant="body1">This is the HR dashboard.</Typography>
    </Box>
  );
};

export default HRPage
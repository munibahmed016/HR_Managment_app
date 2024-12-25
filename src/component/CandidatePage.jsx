import React from 'react';
import { Typography, Box } from '@mui/material';

const CandidatePage = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4, textAlign: 'center', boxShadow: 3 }}>
      <Typography variant="h3">Welcome Candidate</Typography>
      <Typography variant="body1">This is the Candidate dashboard.</Typography>
    </Box>
  );
};

export default CandidatePage;

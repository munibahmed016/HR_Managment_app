// Import necessary libraries
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, TextField, Box, Typography, Container, Card, CardContent } from '@mui/material';

// Theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: '#266CA9',
    },
    secondary: {
      main: '#ADE1FB',
    },
    background: {
      default: 'linear-gradient(135deg, #266CA9, #ADE1FB)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#ADE1FB',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

// Improved HR Page with gradient background and white form
const HRPage = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.background.default,
    }}
  >
    <Container maxWidth="sm" style={{ marginTop: '2rem', color: theme.palette.text.primary }}>
      <Card
        style={{
          padding: '1.5rem',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          borderRadius: '10px',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: theme.palette.primary.main, textAlign: 'center', marginBottom: '1rem' }}
          >
            Post a Job
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth margin="normal" label="Job Title" variant="outlined" color="primary" />
            <TextField fullWidth margin="normal" label="Description" variant="outlined" multiline rows={4} />
            <TextField fullWidth margin="normal" label="Location" variant="outlined" />
            <TextField fullWidth margin="normal" label="Pay" variant="outlined" />
            <TextField fullWidth margin="normal" label="Qualification" variant="outlined" />
            <TextField fullWidth margin="normal" label="Experience" variant="outlined" />
            <TextField
              fullWidth
              margin="normal"
              label="Job Type"
              variant="outlined"
              select
              SelectProps={{ native: true }}
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem', fontWeight: 'bold', padding: '0.8rem 0', borderRadius: '5px' }}
            >
              Post Job
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  </div>
);

export default HRPage;

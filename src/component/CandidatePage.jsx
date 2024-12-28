import React from 'react';
import {  createTheme } from '@mui/material/styles';
import { Button,  Typography, Container, Card, CardContent, Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#266CA9',
    },
    secondary: {
      main: '#ADE1FB',
    },
    background: {
      default: '#01082D',
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

const CandidatePage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
    <Typography
      variant="h4"
      gutterBottom
      style={{ textAlign: 'center', color: theme.palette.secondary.main, marginBottom: '1.5rem' }}
    >
      Available Jobs
    </Typography>
    <Grid container spacing={3}>
      {[1, 2, 3].map((job) => (
        <Grid item xs={12} sm={6} key={job}>
          <Card
            style={{
              padding: '1rem',
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" style={{ color: theme.palette.secondary.main }}>
                Job Title {job}
              </Typography>
              <Typography variant="body1" style={{ margin: '0.5rem 0' }}>
                Description for job {job}...
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '1rem' }}>
                Location: City {job}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ fontWeight: 'bold', padding: '0.5rem 1rem' }}
              >
                Apply
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default CandidatePage;

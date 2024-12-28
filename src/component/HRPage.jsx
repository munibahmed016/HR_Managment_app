// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { Button, Typography, Container, Card, CardContent, Grid, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, postJob } from '../Slice/jobSlice';

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

const HRHomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: 'center', color: theme.palette.secondary.main, marginBottom: '1.5rem' }}
      >
        My Posted Jobs
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/hr/post-job')}
        style={{ marginBottom: '1rem', fontWeight: 'bold' }}
      >
        Add Job
      </Button>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job.id}>
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
                  {job.title}
                </Typography>
                <Typography variant="body1" style={{ margin: '0.5rem 0' }}>
                  {job.description}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '1rem' }}>
                  Location: {job.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


const HRPostJobPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    pay: '',
    qualification: '',
    experience: '',
    jobType: 'Full-Time',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postJob(formData));
    navigate('/hr');
  };

  return (
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
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="normal"
                label="Job Title"
                variant="outlined"
                color="primary"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Location"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Pay"
                variant="outlined"
                name="pay"
                value={formData.pay}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Qualification"
                variant="outlined"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Experience"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Job Type"
                variant="outlined"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
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
                type="submit"
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
};

export { HRHomePage, HRPostJobPage };

// Import necessary libraries
import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { Button, Typography, Container, Card, CardContent, Grid, Collapse } from '@mui/material';

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

// Static data for jobs
const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'We are looking for a skilled frontend developer with experience in React.',
    location: 'New York, NY',
    pay: '$120,000/year',
    jobType: 'Full-Time',
    details: 'Responsibilities include designing and developing UI components, collaborating with backend developers, and ensuring responsive designs.',
    experience: '3+ years',
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Join our team as a backend developer to build robust APIs.',
    location: 'San Francisco, CA',
    pay: '$140,000/year',
    jobType: 'Full-Time',
    details: 'You will work on database schemas, create RESTful services, and optimize server performance.',
    experience: '5+ years',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    description: 'We need a creative UI/UX designer for web and mobile applications.',
    location: 'Remote',
    pay: '$100,000/year',
    jobType: 'Part-Time',
    details: 'Tasks include creating wireframes, user flows, and working closely with developers to implement designs.',
    experience: '2+ years',
  },
];

const CandidatePage = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleExpand = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

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
        {jobData.map((job) => (
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
                <Typography variant="body2" style={{ marginBottom: '0.5rem' }}>
                  Location: {job.location}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '0.5rem' }}>
                  Pay: {job.pay}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '0.5rem' }}>
                  Job Type: {job.jobType}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontWeight: 'bold', padding: '0.5rem 1rem', marginBottom: '1rem' }}
                  onClick={() => toggleExpand(job.id)}
                >
                  {expandedJob === job.id ? 'Show Less' : 'Show More'}
                </Button>
                <Collapse in={expandedJob === job.id} timeout="auto" unmountOnExit>
                  <Typography variant="body2" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                    Description: {job.details}
                  </Typography>
                  <Typography variant="body2" style={{ marginBottom: '1rem' }}>
                    Experience Required: {job.experience}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ fontWeight: 'bold' }}
                  >
                    Apply Now
                  </Button>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CandidatePage;

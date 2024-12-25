// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, FormControlLabel, RadioGroup, Radio, Typography, Box } from '@mui/material';
// import signupImage from '../assets/signup-image.png'; // Add an image file to the assets folder

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    position: '',
    organization: '',
    cv: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSignup = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await axios.post('/api/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f7f7f7' }}>
      <Box sx={{ maxWidth: 1200, display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <Box sx={{ flex: 1, backgroundColor: '#ff4081', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
          {/* <img src={signupImage} alt="Signup" style={{ width: '80%', maxWidth: '400px' }} /> */}
        </Box>
        <Box sx={{ flex: 1, padding: 4 }}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>Save Your Account Now</Typography>
          <Typography variant="body2" style={{ marginBottom: '20px', color: '#777' }}>
            Get unlimited types of forms, questions, and responses, free forever
          </Typography>
          <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} fullWidth margin="normal" />
          <TextField label="Phone No" name="phone" value={formData.phone} onChange={handleInputChange} fullWidth margin="normal" />
          <Typography variant="body1" gutterBottom>Role</Typography>
          <RadioGroup row name="role" value={formData.role} onChange={handleInputChange}>
            <FormControlLabel value="HR" control={<Radio />} label="HR" />
            <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
            <FormControlLabel value="Candidate" control={<Radio />} label="Candidate" />
          </RadioGroup>
          {formData.role === 'Employee' && (
            <>
              <TextField label="Department" name="department" value={formData.department} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="Position" name="position" value={formData.position} onChange={handleInputChange} fullWidth margin="normal" />
            </>
          )}
          {formData.role === 'Candidate' && (
            <>
              <Typography variant="body1" gutterBottom>Upload CV</Typography>
              <input type="file" name="cv" onChange={handleFileChange} />
            </>
          )}
          <TextField label="Organization Name" name="organization" value={formData.organization} onChange={handleInputChange} fullWidth margin="normal" />
          <Button variant="contained" style={{ backgroundColor: '#ff4081', color: '#fff', marginTop: '20px' }} fullWidth onClick={handleSignup}>Sign Up</Button>
          <Typography variant="body2" style={{ marginTop: '10px', color: '#777' }}>
            Already have an account? <span style={{ color: '#ff4081', cursor: 'pointer' }} onClick={() => navigate('/login')}>Login</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
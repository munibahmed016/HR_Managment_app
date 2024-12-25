import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, FormControlLabel, RadioGroup, Radio, Typography, Box } from '@mui/material';

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
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Registration Page</Typography>
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
      <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>Register</Button>
    </Box>
  );
};

export default Signup;
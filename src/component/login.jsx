import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box } from '@mui/material';

const Login = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) navigate(`/${role.toLowerCase()}`);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Welcome Back</Typography>
      <TextField label="Username" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Employee">Employee</MenuItem>
          <MenuItem value="Candidate">Candidate</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login Now</Button>
      <Typography variant="body2" mt={2}>Don't have an account? <Button onClick={() => navigate('/signup')}>Sign Up</Button></Typography>
    </Box>
  );
};

export default Login;

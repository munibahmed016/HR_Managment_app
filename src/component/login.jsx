import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Box } from '@mui/material';
// import loginImage from '../assets/login-image.png'; // Add an image file to the assets folder

const Login = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) navigate(`/${role.toLowerCase()}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f7f7f7' }}>
      <Box sx={{ maxWidth: 1200, display: 'flex', flexDirection: 'row', alignItems: 'center', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <Box sx={{ flex: 1, backgroundColor: '#ff4081', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
          {/* <img src={loginImage} alt="Login" style={{ width: '80%', maxWidth: '400px' }} /> */}
        </Box>
        <Box sx={{ flex: 1, padding: 4 }}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>Welcome Back</Typography>
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
          <Button variant="contained" style={{ backgroundColor: '#ff4081', color: '#fff', marginTop: '20px' }} fullWidth onClick={handleLogin}>Login Now</Button>
          <Typography variant="body2" style={{ marginTop: '10px', color: '#777' }}>
            Don&apos;t have an account? <span style={{ color: '#ff4081', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
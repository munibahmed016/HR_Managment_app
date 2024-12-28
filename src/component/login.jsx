import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../Slice/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const result = await dispatch(loginUser(formData));
    if (result.payload) {
      navigate(`/${result.payload.role.toLowerCase()}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "100%",
          background: "#fff",
          padding: 4,
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#041D56" }}>
          Welcome Back
        </Typography>
        <TextField
          name="username"
          label="Username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleInputChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#266CA9",
            color: "#fff",
            mt: 2,
            "&:hover": { backgroundColor: "#0F2573" },
          }}
        >
          Login Now
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

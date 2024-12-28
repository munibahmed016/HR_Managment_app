import React, { useState } from "react";
import { TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    hr_profile: {
      Name: "",
      OrganizationName: "",
    },
    employee_profile: {
      Department: "",
      Position: "",
      OrganizationName: "",
    },
    candidate_profile: {
      uploadCV: null,
      Name: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setFormData((prev) => ({ ...prev, role: e.target.value }));
  };

  const handleProfileChange = (profileType, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [profileType]: {
        ...prev[profileType],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Form Data:", formData);
    // Add your backend API call here
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
          maxWidth: 600,
          width: "100%",
          background: "#fff",
          padding: 4,
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#041D56" }}>
          Create an Account
        </Typography>

        {/* Common Fields */}
        <TextField
          name="username"
          label="Username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          value={formData.email}
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
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        {/* Role Selection */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="role-label">Select Role</InputLabel>
          <Select
            labelId="role-label"
            value={formData.role}
            onChange={handleRoleChange}
            label="Select Role"
          >
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
            <MenuItem value="Candidate">Candidate</MenuItem>
          </Select>
        </FormControl>

        {/* Conditional Role-Specific Fields */}
        {formData.role === "HR" && (
          <>
            <TextField
              name="Name"
              label="Full Name"
              fullWidth
              margin="normal"
              value={formData.hr_profile.Name}
              onChange={(e) =>
                handleProfileChange("hr_profile", "Name", e.target.value)
              }
            />
            <TextField
              name="OrganizationName"
              label="Organization Name"
              fullWidth
              margin="normal"
              value={formData.hr_profile.OrganizationName}
              onChange={(e) =>
                handleProfileChange("hr_profile", "OrganizationName", e.target.value)
              }
            />
          </>
        )}

        {formData.role === "Employee" && (
          <>
            <TextField
              name="Department"
              label="Department"
              fullWidth
              margin="normal"
              value={formData.employee_profile.Department}
              onChange={(e) =>
                handleProfileChange("employee_profile", "Department", e.target.value)
              }
            />
            <TextField
              name="Position"
              label="Position"
              fullWidth
              margin="normal"
              value={formData.employee_profile.Position}
              onChange={(e) =>
                handleProfileChange("employee_profile", "Position", e.target.value)
              }
            />
            <TextField
              name="OrganizationName"
              label="Organization Name"
              fullWidth
              margin="normal"
              value={formData.employee_profile.OrganizationName}
              onChange={(e) =>
                handleProfileChange("employee_profile", "OrganizationName", e.target.value)
              }
            />
          </>
        )}

        {formData.role === "Candidate" && (
          <>
            <TextField
              name="Name"
              label="Full Name"
              fullWidth
              margin="normal"
              value={formData.candidate_profile.Name}
              onChange={(e) =>
                handleProfileChange("candidate_profile", "Name", e.target.value)
              }
            />
            <Button
              variant="contained"
              component="label"
              sx={{
                mt: 2,
                backgroundColor: "#266CA9",
                "&:hover": { backgroundColor: "#0F2573" },
              }}
            >
              Upload CV
              <input
                type="file"
                hidden
                onChange={(e) =>
                  handleProfileChange("candidate_profile", "uploadCV", e.target.files[0])
                }
              />
            </Button>
          </>
        )}

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#266CA9",
            color: "#fff",
            mt: 2,
            "&:hover": { backgroundColor: "#0F2573" },
          }}
        >
          Sign Up
        </Button>

        {/* Login Redirect */}
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: "#777" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#266CA9", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
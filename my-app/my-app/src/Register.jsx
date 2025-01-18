import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container } from "@mui/material";

function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
    recheckPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "First Name is required.";
    if (!formData.lname.trim()) newErrors.lname = "Last Name is required.";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (!formData.recheckPassword.trim())
      newErrors.recheckPassword = "Recheck Password is required.";
    if (formData.password && formData.password !== formData.recheckPassword)
      newErrors.recheckPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleRegister = () => {
    const validationErrors = validateFields();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Creating account with", formData);
      alert("Account created successfully!");
    }
  };

  document.body.style.backgroundImage =
    "radial-gradient(circle, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb)";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container maxWidth="xs">
        <Box
          textAlign="center"
          boxShadow="0px 8px 18px rgba(0, 0, 0, .3)"
          backgroundColor="#ffe6e1"
          border={1}
          borderRadius={2}
          p={3}
          borderColor="grey.400"
        >
          <Typography variant="h4">Create Account</Typography>
          <Box mt={3}>
            <TextField
              variant="standard"
              label="First Name"
              name="fname"
              fullWidth
              margin="normal"
              value={formData.fname}
              onChange={handleInputChange}
              error={!!errors.fname}
              helperText={errors.fname}
            />
            <TextField
              variant="standard"
              label="Last Name"
              name="lname"
              fullWidth
              margin="normal"
              value={formData.lname}
              onChange={handleInputChange}
              error={!!errors.lname}
              helperText={errors.lname}
            />
            <TextField
              variant="standard"
              label="Mobile"
              name="mobile"
              fullWidth
              margin="normal"
              value={formData.mobile}
              onChange={handleInputChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
            />
            <TextField
              variant="standard"
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              variant="standard"
              label="Recheck Password"
              name="recheckPassword"
              type="password"
              fullWidth
              margin="normal"
              value={formData.recheckPassword}
              onChange={handleInputChange}
              error={!!errors.recheckPassword}
              helperText={errors.recheckPassword}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
              Create Account
            </Button>
            <Box mt={2}>
              <Typography>
                Already have an account?{" "}
                <Link href="/loginpage">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Register;

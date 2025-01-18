import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!formData.newPassword.trim() || !formData.confirmPassword.trim()) {
      setError("Both fields are required.");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError(""); // Clear errors if validation passes
    console.log("New Password:", formData.newPassword);
    alert("Password has been reset successfully!");
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
          backgroundColor="#ffe6e1"
          boxShadow="0px 8px 18px rgba(0, 0, 0, 0.3)"
          border={1}
          borderRadius={2}
          p={3}
          borderColor="grey.400"
        >
          <Typography variant="h5" gutterBottom>
            Reset Password
          </Typography>
          <TextField
            id="new-password"
            variant="standard"
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.newPassword}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
          />
          <TextField
            id="confirm-password"
            variant="standard"
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;

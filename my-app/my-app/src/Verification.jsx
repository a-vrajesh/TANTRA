import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container } from "@mui/material";
import img from "./images/back1.jpg";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    setError(""); // Clear errors if validation passes
    console.log("Resetting password for", email);
    alert("Verification email sent!");
  };

  document.body.style.backgroundImage =
    "radial-gradient(circle, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb)";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";

  return (
    <Box
    sx={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
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
          <Typography variant="h4">Verification</Typography>
          <Box mt={3}>
            <TextField
              id="email"
              variant="standard"
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleResetPassword}
            >
              Verify
            </Button>
            <Box mt={2}>
              <Link href="/loginpage">Back to Login</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ForgotPassword;

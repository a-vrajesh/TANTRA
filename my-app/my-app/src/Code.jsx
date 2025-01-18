import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const CodeVerification = () => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    setIsResendDisabled(true);
    // Add logic to resend the verification code here
    console.log("Resending verification code...");
  };

  const handleSubmit = () => {
    if (!code.trim()) {
      setError("Verification code is required.");
      return;
    }
    setError(""); // Clear errors if validation passes
    console.log("Verification Code:", code);
    alert("Verification successful!");
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
            Verify Your Code
          </Typography>
          <TextField
            id="verification-code"
            variant="standard"
            label="Verification Code"
            fullWidth
            margin="normal"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Resend Code in {timer}s
          </Typography>
          <Button
            variant="text"
            color="primary"
            disabled={isResendDisabled}
            onClick={handleResend}
          >
            Resend Code
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CodeVerification;

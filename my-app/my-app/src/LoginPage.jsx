import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import img1 from "./images/side.jpg";

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ emailOrUsername: "", password: "" });

  const handleLogin = () => {
    let isValid = true;
    const newErrors = { emailOrUsername: "", password: "" };

    // Validate email/username
    if (!emailOrUsername.trim()) {
      newErrors.emailOrUsername = "Username or Email is required.";
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Logging in with", emailOrUsername, password);
      // Proceed with login logic
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f1", // Light gray background
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "800px", // Fixed width for the entire container
          height: "400px", // Fixed height for the container
          boxShadow: "0px 0px 10px 0.5px rgba(0, 0, 0, 0.6)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            width: "50%",
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        {/* Right Side Login Box */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              margin: "30px",
            }}
          >
            <Typography sx={{margin: "0px"}} variant="h4" gutterBottom>
              Login
            </Typography>
            <Box mt={3}>
              <TextField
                id="username-or-email"
                variant="standard"
                label="Username or Email"
                fullWidth
                margin="normal"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                error={!!errors.emailOrUsername}
                helperText={errors.emailOrUsername}
              />
              <TextField
                id="password"
                variant="standard"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                sx={{ marginTop: "16px" }}
              >
                Login
              </Button>
              <Box mt={2}>
                <Link href="/Verification">Forgot Password?</Link>
              </Box>
              <Box mt={2}>
                <Typography>
                  Don&#39;t have an account?{" "}
                  <Link href="/register">Create Account</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

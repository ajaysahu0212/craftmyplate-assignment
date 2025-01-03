// React State
import { useState } from "react";

// MUI Components
import { TextField, Button, Box, Typography, Alert, Card } from "@mui/material";

// Imported images
import bgImage from "../../assets/login_bg_img.jpg";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function LoginPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Both fields are required!");
      return;
    }
    setError("");
    enqueueSnackbar("Login successful!", { variant: "success" }); 
    navigate("/dashboard/home");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <NavBar />

      {/* Login Form */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "64px", // Offset for the AppBar height
        }}
      >
        <Card
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            padding: 3,
            borderRadius: 2,
            m: 2,
            boxShadow: "0px 8px 15px rgba(80, 0, 162, 0.3)",
            width: { xs: "90%", sm: "400px" }, // Responsive width
            maxWidth: "400px", // Prevent card from exceeding 400px width
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}
          >
            Please Sign In
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          {/* Email Field */}
          <TextField
            fullWidth
            size="small"
            label="User Id"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          {/* Password Field */}
          <TextField
            fullWidth
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              textTransform: "none",
              letterSpacing: 1,
              backgroundColor: "#5000A2",
              "&:hover": {
                backgroundColor: "#6A33C5",
              },
            }}
          >
            Sign In
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

export default LoginPage;

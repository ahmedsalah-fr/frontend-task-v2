import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useSignIn from "../hooks/sign-in.hook";

const SignIn = ({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (value: boolean) => void;
}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    handlePasswordVisibility,
    handleSignIn,
    error,
    isMobile,
    isTablet,
  } = useSignIn(setIsAuthenticated);

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" align="center" sx={{ color: "white", mb: 4 }}>
        Sign In
      </Typography>

      <Box
        sx={{
          width: isMobile ? "100%" : isTablet ? "80%" : "40%",
          backgroundColor: "#1e1e1e",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <TextField
            fullWidth
            label="Email Address"
            placeholder="username@example.com"
            margin="normal"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            sx={{ input: { color: "white" }, label: { color: "white" } }}
          />

          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            margin="normal"
            variant="standard"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePasswordVisibility}
                    edge="end"
                    sx={{ color: "white" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ input: { color: "white" }, label: { color: "white" } }}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              mt: 3,
              backgroundColor: "#1E3A8A",
              borderRadius: "50px",
              color: "white",
            }}
          >
            Sign In
          </Button>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "white", mt: 1 }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              backgroundColor: "transparent",
              color: "white",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;

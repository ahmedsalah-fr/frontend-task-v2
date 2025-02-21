import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  TextareaAutosize,
  InputAdornment,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import useScreenSize from "../../hooks/screen-size.hook";
import useSignUp from "../../hooks/sign-up.hook";
import { genders } from "../../constants";
import {
  Person,
  Email,
  LocationOn,
  CalendarMonth,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const SignUp = () => {
  const {
    profilePic,
    setFullName,
    fullName,
    setEmail,
    email,
    setPhone,
    phone,
    setLocation,
    location,
    setGender,
    gender,
    setDateOfBirth,
    dateOfBirth,
    setLinkedIn,
    linkedIn,
    setInstagram,
    instagram,
    setApproach,
    approach,
    setJourney,
    journey,
    setFindOutAnswer,
    findOutAnswer,
    handleImageUpload,
    handleSubmit,
  } = useSignUp();

  const { isMobile } = useScreenSize();
  const { isTablet } = useScreenSize();

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="left" sx={{ width: "100%" }}>
        Sign Up
      </Typography>

      <Box
        sx={{
          width: isMobile ? "100%" : isTablet ? "80%" : "50%",
        }}
      >
        <Box textAlign="center" mb={2}>
          <Avatar
            src={profilePic as string}
            sx={{ width: 120, height: 120, margin: "auto" }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="avatar-upload"
          />
          <label htmlFor="avatar-upload">
            <Typography
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  cursor: "pointer",
                },
                color: "white",
                mt: 1,
              }}
            >
              Upload photo
            </Typography>
          </label>
        </Box>

        <TextField
          fullWidth
          label="Full Name"
          placeholder="Ahmed Salah"
          margin="normal"
          variant="standard"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: "white" }, label: { color: "white" } }}
        />

        <TextField
          fullWidth
          label="Email Address"
          placeholder="username@hotmail.com"
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

        <Box sx={{ my: 2 }}>
          <PhoneInput
            country={"eg"}
            value={phone}
            specialLabel="Phone Number"
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              width: "100%",
              height: "56px",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.42)",
              borderRadius: "0",
            }}
            dropdownStyle={{
              backgroundColor: "#1e1e1e",
              color: "white",
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.42)",
              borderRadius: "0",
            }}
          />
        </Box>

        <TextField
          fullWidth
          label="Location"
          placeholder="Address"
          margin="normal"
          variant="standard"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: "white" }, label: { color: "white" } }}
        />

        <FormControl fullWidth margin="normal">
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            displayEmpty
            sx={{
              color: "white",
              backgroundColor: "#1e1e1e",
              "& .MuiSvgIcon-root": { color: "white" },
            }}
          >
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Date of Birth"
          placeholder="MM/DD/YYYY"
          margin="normal"
          variant="standard"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonth sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: "white" }, label: { color: "white" } }}
        />

        <Typography variant="body2" mt={2}>
          Social Profile (at least 1 profile is required)
        </Typography>

        <TextField
          fullWidth
          placeholder="LinkedIn Username"
          margin="normal"
          variant="standard"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedIn sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: "white" } }}
        />

        <TextField
          fullWidth
          placeholder="Instagram Username"
          margin="normal"
          variant="standard"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ input: { color: "white" } }}
        />

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend" sx={{ color: "white" }}>
            How do you approach life right now?
          </FormLabel>
          <RadioGroup
            value={approach}
            onChange={(e) => setApproach(e.target.value)}
          >
            <FormControlLabel
              value="Ambitious & driven"
              control={<Radio sx={{ color: "white" }} />}
              label="Ambitious & driven"
            />
            <FormControlLabel
              value="Easygoing & relaxed"
              control={<Radio sx={{ color: "white" }} />}
              label="Easygoing & relaxed"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend" sx={{ color: "white" }}>
            Where are you on your journey?
          </FormLabel>
          <RadioGroup
            value={journey}
            onChange={(e) => setJourney(e.target.value)}
          >
            <FormControlLabel
              value="Established & comfortable"
              control={<Radio sx={{ color: "white" }} />}
              label="Established & comfortable"
            />
            <FormControlLabel
              value="Exploring & figuring things out"
              control={<Radio sx={{ color: "white" }} />}
              label="Exploring & figuring things out"
            />
          </RadioGroup>
        </FormControl>

        <Typography variant="body2" mt={2}>
          How did you find out about 27 Circle?
        </Typography>
        <TextareaAutosize
          minRows={3}
          placeholder="Type here..."
          value={findOutAnswer}
          onChange={(e) => setFindOutAnswer(e.target.value)}
          style={{
            width: "100%",
            marginTop: "8px",
            borderRadius: "4px",
            padding: "10px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "1px solid #444",
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#1E3A8A",
            borderRadius: "50px",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;

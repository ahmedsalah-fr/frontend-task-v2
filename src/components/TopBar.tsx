import {
  Box,
  TextField,
  Autocomplete,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search, KeyboardArrowDown, Notifications } from "@mui/icons-material";
import { americanStates } from "../constants";
import logo from "../assets/images/logo/logo.png";
import { useNavigate } from "react-router-dom";

export const TopBar = ({
  search,
  setSearch,
  isMobile,
  menuAnchor,
  openMenu,
  closeMenu,
  handleLogout,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 8,
      }}
    >
      {!isMobile && (
        <Box
          sx={{ display: "flex", gap: 1, alignItems: "center", width: "33%" }}
        >
          <img src={logo} alt="logo" width="50" />
          <Typography variant="h6" fontSize={14}>
            Small Group Experiences
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          width: isMobile ? "100%" : "33%",
          display: "flex",
        }}
      >
        <Autocomplete
          freeSolo
          options={americanStates}
          value={search}
          onChange={(_, newValue) => setSearch(newValue || "")}
          onInputChange={(_, newValue) => setSearch(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search location"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: "5%",
                input: { color: "white" },
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.23)",
                  },
                },
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <Search
                      sx={{
                        width: "25px",
                        height: "25px",
                        color: "white",
                        backgroundColor: "#396270",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
          sx={{
            width: "100%",
            "& .MuiAutocomplete-listbox": {
              backgroundColor: "#1e1e1e",
              color: "white",
            },
            "& .MuiAutocomplete-option": {
              "&:hover": {
                backgroundColor: "#396270",
              },
            },
          }}
        />
      </Box>
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "33%",
            justifyContent: "flex-end",
          }}
        >
          <Badge badgeContent={2} color="error">
            <Notifications sx={{ color: "white" }} />
          </Badge>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Avatar alt="User" onClick={openMenu} sx={{ cursor: "pointer" }} />
            <KeyboardArrowDown
              sx={{
                color: "black",
                fontSize: 16,
                transform: menuAnchor ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "50%",
                ml: -2.5,
                mt: 3,
              }}
            />
          </Box>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "black",
                color: "white",
                width: "200px",
                mt: 1,
                ml: -1,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/home");
                closeMenu();
              }}
            >
              Home
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

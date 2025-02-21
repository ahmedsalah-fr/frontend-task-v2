import {
  Box,
  Typography,
  TextField,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
  InputAdornment,
  Avatar,
  Badge,
  Divider,
  Autocomplete,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search,
  Notifications,
  Star,
  KeyboardArrowDown,
} from "@mui/icons-material";
import logo from "../assets/images/logo/logo.png";
import { americanStates } from "../constants/index";
import { mobileNavBar } from "../hooks/home.hook";
import { useHome } from "../hooks/home.hook";
import { TopBar } from "../components/TopBar";
import { EventCards } from "../components/EventCards";
import { MobileNavBar } from "../components/MobileNavBar";

const HomePage = () => {
  const {
    search,
    setSearch,
    isMobile,
    isTablet,
    filteredEvents,
    menuAnchor,
    openMenu,
    closeMenu,
  } = useHome();

  return (
    <Box
      sx={{
        px: isMobile ? 2 : isTablet ? 6 : 16,
        color: "white",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <TopBar
        search={search}
        setSearch={setSearch}
        isMobile={isMobile}
        menuAnchor={menuAnchor}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      <MobileNavBar isMobile={isMobile} />

      <EventCards filteredEvents={filteredEvents} isMobile={isMobile} />
    </Box>
  );
};

export default HomePage;

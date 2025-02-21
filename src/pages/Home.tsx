import { Box } from "@mui/material";
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

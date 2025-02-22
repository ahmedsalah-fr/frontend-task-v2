import { Box } from "@mui/material";
import { useHome } from "../hooks/home.hook";
import { DesktopNavBar } from "../components/DesktopNavBar";
import { EventCards } from "../components/EventCards";
import { MobileNavBar } from "../components/MobileNavBar";

interface HomePageProps {
  setIsAuthenticated: (value: boolean) => void;
}

const HomePage = ({ setIsAuthenticated }: HomePageProps) => {
  const {
    search,
    setSearch,
    isMobile,
    isTablet,
    filteredEvents,
    menuAnchor,
    openMenu,
    closeMenu,
    handleLogout,
  } = useHome(setIsAuthenticated);

  return (
    <Box
      sx={{
        px: isMobile ? 2 : isTablet ? 6 : 16,
        color: "white",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <DesktopNavBar
        search={search}
        setSearch={setSearch}
        isMobile={isMobile}
        menuAnchor={menuAnchor}
        openMenu={openMenu}
        closeMenu={closeMenu}
        handleLogout={handleLogout}
      />

      <MobileNavBar isMobile={isMobile} />

      <EventCards filteredEvents={filteredEvents} isMobile={isMobile} />
    </Box>
  );
};

export default HomePage;

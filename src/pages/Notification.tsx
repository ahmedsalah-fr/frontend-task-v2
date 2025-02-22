import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { notifications } from "../constants/index";
import { DesktopNavBar } from "../components/DesktopNavBar";
import { useHome } from "../hooks/home.hook";
import { MobileNavBar } from "../components/MobileNavBar";

interface NotificationsProps {
  setIsAuthenticated: (value: boolean) => void;
}

export const Notifications = ({ setIsAuthenticated }: NotificationsProps) => {
  const {
    search,
    setSearch,
    isMobile,
    isTablet,
    menuAnchor,
    openMenu,
    closeMenu,
    handleLogout,
  } = useHome(setIsAuthenticated);

  return (
    <Box
      sx={{
        color: "white",
        minHeight: "100vh",
        px: isMobile ? 2 : isTablet ? 6 : 16,
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
        hideTitle={true}
        hideSearch={true}
      />

      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          p: 2.5,
          mt: 5,
          borderRadius: 2,
          width: isTablet ? "65%" : isMobile ? "100%" : "25%",
          marginLeft: "auto",
          marginRight: "20%",
          maxHeight: "70vh",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Notifications
        </Typography>

        <List
          sx={{
            maxHeight: "calc(70vh - 80px)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
          }}
        >
          {notifications.map((notification) => (
            <ListItem key={notification.id} sx={{ mb: 0.5 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#888" }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ color: "white" }}>
                    {notification.message}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: "#324cab" }}>
                    {notification.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <MobileNavBar isMobile={isMobile} />
    </Box>
  );
};

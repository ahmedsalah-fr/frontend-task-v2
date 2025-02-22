import { Box, IconButton, Typography } from "@mui/material";
import { Notifications, Person, Circle, Home } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MobileNavBar = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();

  const mobileNavBar = [
    {
      icon: (
        <Home
          onClick={() => navigate("/home")}
          sx={{ color: "white", cursor: "pointer" }}
        />
      ),
      label: "Home",
    },
    { icon: <Circle sx={{ color: "white" }} />, label: "Circles" },
    {
      icon: (
        <Badge
          onClick={() => navigate("/notification")}
          badgeContent={2}
          color="error"
        >
          <Notifications sx={{ color: "white" }} />
        </Badge>
      ),
      label: "Notifications",
    },
    { icon: <Person sx={{ color: "white" }} />, label: "Profile" },
  ];

  if (!isMobile) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#1e1e1e",
        p: 1,
        borderTop: "1px solid #444",
      }}
    >
      {mobileNavBar.map((item) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20%",
            height: "20%",
          }}
        >
          <IconButton sx={{ display: "flex", flexDirection: "column" }}>
            {item.icon}
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "0.7rem" }}
            >
              {item.label}
            </Typography>
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

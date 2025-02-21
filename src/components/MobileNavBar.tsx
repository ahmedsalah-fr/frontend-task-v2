import { Box, IconButton, Typography } from "@mui/material";
import { mobileNavBar } from "../hooks/home.hook";

export const MobileNavBar = ({ isMobile }: { isMobile: boolean }) => {
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

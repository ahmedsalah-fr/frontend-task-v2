import { useState } from "react";
import { Notifications, Person, Explore, Circle } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { events } from "../constants";
import useScreenSize from "./screen-size.hook";
import { useNavigate } from "react-router-dom";

export const mobileNavBar = [
  { icon: <Explore sx={{ color: "white" }} />, label: "Explore" },
  { icon: <Circle sx={{ color: "white" }} />, label: "Circles" },
  {
    icon: (
      <Badge badgeContent={2} color="error">
        <Notifications sx={{ color: "white" }} />
      </Badge>
    ),
    label: "Notifications",
  },
  { icon: <Person sx={{ color: "white" }} />, label: "Profile" },
];

export const useHome = (setIsAuthenticated: (value: boolean) => void) => {
  const [search, setSearch] = useState("");
  const { isMobile, isTablet } = useScreenSize();
  const navigate = useNavigate();

  const filteredEvents = events.filter((event) => {
    if (!search) return true;
    return event.location.toLowerCase().includes(search.toLowerCase());
  });

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
      navigate("/signin", { replace: true });
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return {
    search,
    setSearch,
    isMobile,
    isTablet,
    filteredEvents,
    menuAnchor,
    openMenu,
    closeMenu,
    handleLogout,
  };
};

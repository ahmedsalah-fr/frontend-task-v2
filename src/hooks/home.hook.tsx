import { useState } from "react";
import { events } from "../constants";
import useScreenSize from "./screen-size.hook";
import { useNavigate } from "react-router-dom";

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

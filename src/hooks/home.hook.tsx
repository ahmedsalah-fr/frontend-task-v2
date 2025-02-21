import { useState } from "react";
import { Notifications, Person, Explore, Circle } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { events } from "../constants";
import useScreenSize from "./screen-size.hook";

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

export const useHome = () => {
  const [search, setSearch] = useState("");
  const { isMobile, isTablet } = useScreenSize();

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

  return {
    search,
    setSearch,
    isMobile,
    isTablet,
    filteredEvents,
    menuAnchor,
    openMenu,
    closeMenu,
  };
};

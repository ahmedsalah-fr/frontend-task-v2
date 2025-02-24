import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import {
  ArrowBack,
  Lock,
  Group,
  Handshake,
  Star,
  EmojiEvents,
  Shield,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DesktopNavBar } from "../components/DesktopNavBar";
import { useHome } from "../hooks/home.hook";

const friendsList = [
  { id: 1, name: "Jacob", location: "Cairo, Egypt" },
  { id: 2, name: "Jacob", location: "Cairo, Egypt" },
  { id: 3, name: "Jacob", location: "Cairo, Egypt" },
  { id: 4, name: "Jacob", location: "Cairo, Egypt" },
  { id: 5, name: "Jacob", location: "Cairo, Egypt" },
];

interface ProfileProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Profile = ({ setIsAuthenticated }: ProfileProps) => {
  const { isMobile, isTablet, menuAnchor, openMenu, closeMenu, handleLogout } =
    useHome(setIsAuthenticated);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: isMobile ? 2 : isTablet ? 6 : 16,
        color: "white",
        py: 6,
      }}
    >
      <DesktopNavBar
        isMobile={isMobile}
        menuAnchor={menuAnchor}
        openMenu={openMenu}
        closeMenu={closeMenu}
        handleLogout={handleLogout}
        hideSearch={true}
      />
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            alignSelf: "flex-start",
          }}
        >
          <ArrowBack
            onClick={() => navigate("/home")}
            sx={{ cursor: "pointer" }}
          />
          <Typography variant="h5">Private Dashboard</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: isMobile ? 2 : 4 }}>
          <Box>
            <Card
              sx={{ backgroundColor: "#1e1e1e", borderRadius: 2, mb: 3 }}
              elevation={3}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Primary Trio
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    position: "relative",
                    mt: 2,
                    height: "120px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "60%",
                      borderLeft: "2px solid gray",
                      borderRight: "2px solid gray",
                      borderBottom: "2px solid gray",
                      bottom: "50px",
                      zIndex: 0,
                    }}
                  />
                  <Avatar
                    alt="Mark"
                    src="/images/mark.jpg"
                    sx={{
                      width: 60,
                      height: 60,
                      border: "2px solid white",
                      zIndex: 1,
                      mt: 4,
                    }}
                  />
                  <Avatar
                    alt="Adam"
                    src="/images/adam.jpg"
                    sx={{
                      width: 80,
                      height: 80,
                      border: "2px solid white",
                      mx: 2,
                      zIndex: 1,
                    }}
                  />
                  <Avatar
                    alt="Jacob"
                    src="/images/jacob.jpg"
                    sx={{
                      width: 60,
                      height: 60,
                      border: "2px solid white",
                      zIndex: 1,
                      mt: 4,
                    }}
                  />
                </Box>
                <Typography variant="body2" align="center" mt={1}>
                  Mark • Adam • Jacob
                </Typography>
              </CardContent>
            </Card>

            {/* Trio Slots */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {[1, 2].map((slot) => (
                <Box key={slot} sx={{ width: "50%" }}>
                  <Card
                    sx={{ backgroundColor: "#1e1e1e", borderRadius: 2 }}
                    elevation={3}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="gray"
                      >
                        Name your Trio
                      </Typography>
                      <Avatar
                        alt="Adam"
                        src="/images/adam.jpg"
                        sx={{
                          width: 50,
                          height: 50,
                          border: "2px solid white",
                          my: 1,
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        <Avatar sx={{ width: 40, height: 40, bgcolor: "#555" }}>
                          <Lock />
                        </Avatar>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: "#555" }}>
                          <Lock />
                        </Avatar>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              {[1, 2, 3, 4].map((stat) => (
                <Box key={stat} sx={{ width: "25%" }}>
                  <Card
                    sx={{ backgroundColor: "#1e1e1e", textAlign: "center" }}
                    elevation={3}
                  >
                    <CardContent>
                      {stat === 1 && <Group sx={{ color: "#FFD700" }} />}
                      {stat === 2 && <Shield sx={{ color: "#FFD700" }} />}
                      {stat === 3 && <Star sx={{ color: "#FFD700" }} />}
                      {stat === 4 && <Handshake sx={{ color: "#FFD700" }} />}
                      <Typography>
                        {stat === 1
                          ? "Friends"
                          : stat === 2
                          ? "Reliability"
                          : stat === 3
                          ? "Trios Formed"
                          : "Friendships"}
                      </Typography>
                      <Typography variant="h6">
                        {stat === 1
                          ? "2/15"
                          : stat === 2
                          ? "86%"
                          : stat === 3
                          ? "1"
                          : "25"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Friends List */}
          <Box sx={{ width: "33%" }}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 2,
                height: "100%",
              }}
              elevation={3}
            >
              <CardContent>
                <Typography variant="h6">Friends</Typography>
                <List sx={{ maxHeight: 500, overflowY: "auto" }}>
                  {friendsList.map((friend) => (
                    <ListItem
                      key={friend.id}
                      sx={{
                        backgroundColor: "black",
                        borderBottom: "1px solid #333",
                        borderRadius: 2,
                        border: "1px solid gray",
                        mb: 1,
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#888" }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography sx={{ color: "white" }}>
                            {friend.name}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: "#888" }}>
                            {friend.location}
                          </Typography>
                        }
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <IconButton>
                          <Handshake />
                        </IconButton>
                        <IconButton>
                          <Group />
                        </IconButton>
                        <IconButton>
                          <Lock />
                        </IconButton>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

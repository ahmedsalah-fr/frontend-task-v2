import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Star } from "@mui/icons-material";

export const EventCards = ({
  filteredEvents,
  isMobile,
}: {
  filteredEvents: any[];
  isMobile: boolean;
}) => {
  return (
    <Grid container spacing={isMobile ? 2 : 3} mb={isMobile ? 8 : 0}>
      {filteredEvents.map((event) => (
        <Grid item xs={6} sm={6} md={4} key={event.id}>
          <Card
            sx={{
              color: "white",
              borderRadius: 5,
            }}
          >
            <CardMedia
              component="img"
              height={isMobile ? "250" : "300"}
              image={event.image}
              alt={event.title}
              sx={{ borderRadius: "12px" }}
            />
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle2">{event.title}</Typography>
                {!isMobile && (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Star sx={{ color: "white", fontSize: "16px", mr: 0.5 }} />
                    <Typography variant="body2">{event.rating}</Typography>
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography variant="caption" sx={{ color: "#808080" }}>
                  {event.location}
                </Typography>
                <Typography variant="caption" sx={{ color: "#808080" }}>
                  {event.ageRange} • {event.gender} • {event.category}
                </Typography>

                <Typography variant="caption" sx={{ color: "#808080" }}>
                  {event.date}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {event.discountedPrice ? (
                    <>
                      <span style={{ textDecoration: "line-through" }}>
                        {event.price}
                      </span>{" "}
                      <span>{event.discountedPrice}</span>
                    </>
                  ) : (
                    event.price
                  )}
                </Typography>

                {isMobile && (
                  <>
                    {event.reviews && (
                      <Typography
                        variant="body2"
                        sx={{ mt: 0.5, alignSelf: "end" }}
                      >
                        <Star
                          sx={{ color: "white", fontSize: "14px", mr: 0.5 }}
                        />{" "}
                        {event.rating} ({event.reviews})
                      </Typography>
                    )}
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

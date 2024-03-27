import { Box, Button, Typography } from "@mui/material";
import { FaMapMarked } from "react-icons/fa";

const Main = () => {
  return (
    <Box sx={{ flex: "1", p: "2rem" }}>
      <Typography variant="subtitle1" gutterBottom>
        New Message
      </Typography>
      <Typography variant="h4" gutterBottom>
        It looks like there is an allergy outbreak in your area
      </Typography>
      <Typography variant="body2" gutterBottom>
        Dear Dan,
        <br />
        <br />
        We wanted inform you that we detected allergy outbreak in your area.
        <br />
        Looks like the season is starting early.
        <br />
        We want to make sure you are safe and stocked with all that you need.
      </Typography>
      <br />
      <br />
      <Typography variant="h5" gutterBottom>
        Here is what the map looks like:
      </Typography>
      <Button
        sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
        variant="contained"
        endIcon={<FaMapMarked />}
      >
        See the map
      </Button>
      <br />
      <br />
      <Typography variant="h5" gutterBottom>
        Medications that you might need
      </Typography>
    </Box>
  );
};

export default Main;

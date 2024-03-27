import { Box, Button, Typography } from "@mui/material";
import { FaMapMarked } from "react-icons/fa";
import Prescriptions from "../Presciptions/Prescriptions";
import EmailDisclaimer from "../EmailDisclaimer/EmailDisclaimer";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <Box sx={{ flex: "1", p: "2rem" }}>
      <Typography variant="subtitle1" gutterBottom>
        New Message
      </Typography>
      <Typography variant="h4" gutterBottom>
        It looks like the allergy season is starting early
      </Typography>
      <Typography variant="body2" gutterBottom>
        Dear Dan,
        <br />
        <br />
        We wanted inform you that we detected that allergy season is starting
        earlier this year.
        <br />
        Our trends shows that a lot of people are experiencing allergy symptoms.
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
        onClick={() => history.push("/sneezemap")}
      >
        See the map
      </Button>
      <br />
      <br />
      <Typography variant="h5" gutterBottom>
        Medications that you might need
      </Typography>
      <Prescriptions />
      <EmailDisclaimer />
    </Box>
  );
};

export default Main;

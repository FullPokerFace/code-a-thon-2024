import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  useTheme,
} from "@mui/material";
import img from "./symptoms.jpg";

const AllergySymptomsCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: "30%", margin: theme.spacing(2) }}>
      <CardMedia
        component="img"
        height="350"
        image={img}
        alt="Allergy Symptoms"
        sx={{ padding: "1rem" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Allergy Symptoms
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Common symptoms include sneezing, itching, watery eyes, and runny
          nose. Severe cases can lead to rashes, swelling, asthma, and
          anaphylaxis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://aafa.org/allergies/allergy-symptoms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AllergySymptomsCard;

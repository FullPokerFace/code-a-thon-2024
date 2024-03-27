import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  useTheme,
} from "@mui/material";
import img from "./img.jpg";

const WhoIsAtRiskCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: "30%", margin: theme.spacing(2) }}>
      <CardMedia
        component="img"
        height="350"
        image={img}
        alt="Who is at Risk"
        sx={{ padding: "1rem" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Who is at Risk?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Individuals with a family history of allergies, young children,
          residents of high pollution areas, and those with related conditions
          such as asthma are at higher risk.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://aafa.org/asthma/asthma-facts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default WhoIsAtRiskCard;

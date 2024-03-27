import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import img from "./prevention.jpg";

const AllergyPreventionBlock = () => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: "30%", margin: theme.spacing(2) }}>
      <CardMedia
        component="img"
        height="350"
        image={img}
        alt="Allergy Prevention"
        sx={{ padding: "1rem" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Allergy Prevention
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Limit outdoor activities during days with high pollen counts to
          minimize exposure and keep windows closed to prevent pollen from
          entering your home.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://aafa.org/allergies/prevent-allergies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AllergyPreventionBlock;

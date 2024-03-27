import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { HFlex } from "../../shared/Layout/Flex/Flex";

const prescriptions = [
  {
    name: "Tylenol",
    description: "Pain reliever and fever reducer.",
    lastOrdered: "March 10, 2023",
    lastDaySupply: 30,
    orderLink: "https://www.express-scripts.com/",
  },
  {
    name: "Tums",
    description: "Used to treat heartburn and indigestion.",
    lastOrdered: "March 15, 2023",
    lastDaySupply: 60,
    orderLink: "https://www.express-scripts.com/",
  },
];

const Prescriptions = () => {
  return (
    <HFlex>
      {prescriptions.map((prescription, index) => (
        <Card key={index} sx={{ maxWidth: 345, mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <Link href={prescription.orderLink} underline="hover">
                {prescription.name}
              </Link>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {prescription.description}
            </Typography>
            <Typography variant="body2">
              Last ordered: {prescription.lastOrdered}
            </Typography>
            <Typography variant="body2">
              Last day supply: {prescription.lastDaySupply}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={prescription.orderLink}>
              Order Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </HFlex>
  );
};

export default Prescriptions;

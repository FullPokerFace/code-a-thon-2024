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
    name: "Montelukast",
    description:
      "Prevent asthma attacks and treat allergic rhinitis by blocking substances that cause inflammation.",
    lastOrdered: "March 10, 2023",
    lastDaySupply: 30,
    orderLink: "https://www.express-scripts.com/",
  },
  {
    name: "Fluticasone",
    description:
      "Reduces inflammation and is used in treating allergic reactions, asthma, and nasal congestion.",
    lastOrdered: "March 15, 2023",
    lastDaySupply: 60,
    orderLink: "https://www.express-scripts.com/",
  },
  {
    name: "Antihistamine",
    description:
      "Relieve allergy symptoms by blocking histamine action, a substance involved in allergic reactions.",
    lastOrdered: "March 22, 2023",
    lastDaySupply: 90,
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
              <Link
                href={prescription.orderLink}
                underline="hover"
                target="_blank"
                rel="noopener"
              >
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
            <Button
              size="small"
              href={prescription.orderLink}
              target="_blank"
              rel="noopener"
            >
              Order Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </HFlex>
  );
};

export default Prescriptions;

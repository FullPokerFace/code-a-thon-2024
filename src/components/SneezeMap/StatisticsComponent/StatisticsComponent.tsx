/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Box, Paper, useTheme } from "@mui/material";
import LocationButton from "../SeeMyLocation/SeeMyLocation";

const StatisticsComponent = ({ setLat, setLng }: any) => {
  const theme = useTheme();

  const data = [
    { label: "Rign now", value: "142,000" },
    {
      label: "Last year",
      value: "85,000",
    },
    {
      label: "Historical max",
      value: "185,000",
    },
    {
      label: "Historical average",
      value: "130,000",
    },
    { label: "Weather Conditions", value: "Sunny, 65F" },
  ];

  return (
    <Paper elevation={4} sx={{ padding: theme.spacing(3), width: "20%" }}>
      <Typography variant="h5" gutterBottom>
        Statistics
      </Typography>

      {data.map((item, index) => (
        <Box key={index} sx={{ marginBottom: theme.spacing(2) }}>
          <Typography variant="body1" fontWeight="bold">
            {item.label}
          </Typography>
          <Typography variant="body2">{item.value}</Typography>
        </Box>
      ))}
      <LocationButton setLat={setLat} setLng={setLng} />
    </Paper>
  );
};

export default StatisticsComponent;

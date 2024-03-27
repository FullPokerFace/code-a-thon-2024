/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Box, Paper, useTheme } from "@mui/material";
import LocationButton from "../../SneezeMap/SeeMyLocation/SeeMyLocation";
import RollNumber from "../../SneezeMap/ChagingNumbers/RollNumber";
// import { fetchNearestCity } from "../utils/utils";
// import { useEffect, useState } from "react";

const StatisticsComponent = ({
  setLat,
  setLng,
  count,
  availableInStock,
}: // lat, lng
any) => {
  const theme = useTheme();

  // const [lastCity, setLastCity] = useState("N/A");

  // useEffect(() => {
  //   fetchNearestCity(lat, lng).then((result) => console.log(result));
  // }, [lat, lng]);

  const data = [
    { label: "Reports so Far", value: <RollNumber number={count} /> },
    {
      label: "Last reported in",
      value: "St. Louis",
    },
    {
      label: "Nearest dispensing point",
      value: "1 Express Way, Saint Louis, MO 63121",
    },
    {
      label: "Available to dispsense",
      value: <RollNumber number={availableInStock} />,
    },
    {
      label: "Forecasted dosses neede",
      value: "120,000",
    },
    { label: "Need to order more?", value: "No" },
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

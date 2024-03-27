/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Box, Paper, useTheme } from "@mui/material";
import LocationButton from "../SeeMyLocation/SeeMyLocation";
import RollNumber from "../ChagingNumbers/RollNumber";
// import { fetchNearestCity } from "../utils/utils";
// import { useEffect, useState } from "react";

const StatisticsComponent = ({
  setLat,
  setLng,
  count,
}: // lat, lng
any) => {
  const theme = useTheme();

  // const [lastCity, setLastCity] = useState("N/A");

  // useEffect(() => {
  //   fetchNearestCity(lat, lng).then((result) => console.log(result));
  // }, [lat, lng]);

  const data = [
    { label: "Cases so Far", value: <RollNumber number={count} /> },
    {
      label: "Last reported in",
      value: "St. Louis",
    },
    {
      label: "Last year",
      value: "115,000",
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

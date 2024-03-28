import { Paper, Typography, Box, useTheme } from "@mui/material";
import BizMap from "./BizMap";
import { HFlex, VFlex } from "../shared/Layout/Flex/Flex";
import GoBackButton from "../BeeMail/GoBack/GoBack";
import styles from "./BizMap.module.scss";
import StatisticsComponent from "./StatisticsComponent/StatisticsComponent";
import { useState } from "react";

const BizMapContainer = () => {
  const theme = useTheme();

  const [lat, setLat] = useState(38.627);
  const [lng, setLng] = useState(-90.1994);
  const [count, setCount] = useState(0);

  const initialInStock = 15000;

  return (
    <VFlex className={styles.BizMap}>
      <GoBackButton />
      <Paper
        elevation={4}
        sx={{ padding: theme.spacing(3), position: "relative" }}
      >
        <Typography variant="h4" gutterBottom>
          Biz Map
        </Typography>
        <HFlex>
          <BizMap lat={lat} lng={lng} setCount={setCount} />
          <StatisticsComponent
            setLat={setLat}
            setLng={setLng}
            count={count}
            lat={lat}
            lng={lng}
            availableInStock={initialInStock - count}
          />
        </HFlex>

        {/* Legend */}
        <Box sx={{ display: "flex", gap: theme.spacing(2) }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box sx={{ width: 15, height: 15, backgroundColor: "red" }}></Box>
            <Typography variant="body2">High Sneeze Area</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{ width: 15, height: 15, backgroundColor: "yellow" }}
            ></Box>
            <Typography variant="body2">Medium Sneeze Area</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box sx={{ width: 15, height: 15, backgroundColor: "blue" }}></Box>
            <Typography variant="body2">Low Sneeze Area</Typography>
          </Box>
        </Box>
      </Paper>
    </VFlex>
  );
};

export default BizMapContainer;

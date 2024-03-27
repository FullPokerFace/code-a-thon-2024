import { Paper, Typography, Box, useTheme } from "@mui/material";
import SneezeMap from "./SneezeMap";
import AllergyPreventionBlock from "./AllergyPreventionBlock/AllergyPreventionBlock";
import { HFlex, VFlex } from "../shared/Layout/Flex/Flex";
import GoBackButton from "../BeeMail/GoBack/GoBack";
import AllergySymptomsCard from "./AllergySymptoms/AllergySymptoms";
import styles from "./SneezeMapContainer.module.scss";
import WhoIsAtRiskCard from "./WhoIsAtRisk/WhoIsAtRisk";
import StatisticsComponent from "./StatisticsComponent/StatisticsComponent";
import { useState } from "react";

const SneezeMapContainer = () => {
  const theme = useTheme();

  const [lat, setLat] = useState(38.627);
  const [lng, setLng] = useState(-90.1994);

  return (
    <VFlex className={styles.sneezeMapContainer}>
      <GoBackButton />
      <Paper
        elevation={4}
        sx={{ padding: theme.spacing(3), position: "relative" }}
      >
        <Typography variant="h4" gutterBottom>
          Sneeze Map
        </Typography>
        <HFlex>
          <SneezeMap lat={lat} lng={lng} />
          <StatisticsComponent setLat={setLat} setLng={setLng} />
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
      <Typography variant="h4" gutterBottom>
        Useful Resources
      </Typography>
      <HFlex>
        <AllergyPreventionBlock />
        <AllergySymptomsCard />
        <WhoIsAtRiskCard />
      </HFlex>
    </VFlex>
  );
};

export default SneezeMapContainer;

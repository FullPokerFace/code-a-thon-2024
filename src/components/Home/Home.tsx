import * as React from "react";
import { useHistory } from "react-router-dom";
import { Button, Box, Typography, Stack } from "@mui/material";
import { FaUser, FaBusinessTime } from "react-icons/fa";

const HomePage: React.FC = () => {
  const history = useHistory();
  const handleUserLoginClick = () => {
    history.push("/beemail");
  };
  const handleBusinessLogin = () => {
    history.push("/bizmap");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Welcome to Allergy Beacon
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<FaUser />}
          onClick={handleUserLoginClick}
        >
          User Login (BeeMail)
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FaBusinessTime />}
          onClick={handleBusinessLogin}
        >
          Business Login
        </Button>
      </Stack>
    </Box>
  );
};

export default HomePage;

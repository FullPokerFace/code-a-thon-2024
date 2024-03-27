import { Button } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const GoBackButton = () => {
  const history = useHistory();

  return (
    <Button
      variant="contained"
      startIcon={<IoArrowBack />}
      onClick={() => history.push("/")}
    >
      Go Back to Home Page
    </Button>
  );
};

export default GoBackButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";

const LocationButton = ({ setLat, setLng }: any) => {
  const getLocation = () => {
    console.log("Gettin geolocation");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
        break;
    }
  };

  return (
    <Button variant="contained" onClick={getLocation}>
      See My Location
    </Button>
  );
};

export default LocationButton;

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchNearestCity = async (lat: any, lng: any) => {
  if (!lat || !lng) return "N/A";
  const username = "Trilodi";
  const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=${username}`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.geonames && data.geonames.length > 0) {
      console.log(data.geonames[0].name);
      return data.geonames[0];
    } else {
      return "No nearby place found";
    }
  } catch (error) {
    return "";
  }
};

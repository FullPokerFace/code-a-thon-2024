/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  radius: 0.3,
  maxOpacity: 0.5,
  // scales the radius based on map zoom
  scaleRadius: true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  useLocalExtrema: true,
  // which field name in your data represents the latitude - default "lat"
  latField: "lat",
  // which field name in your data represents the longitude - default "lng"
  lngField: "lng",
  // which field name in your data represents the data value - default "value"
  valueField: "count",
};

const SneezeMap = ({ lat, lng }: any) => {
  useEffect(() => {
    const testData = {
      max: 200,
      data: [
        { lat: 38.627, lng: -90.1394, count: 50 },
        { lat: 38.627, lng: -90.1995, count: 50 },
        { lat: 39.627, lng: -90.1994, count: 30 },
      ],
    };

    const baseLayer = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18,
      }
    );

    const heatmapLayer = new HeatmapOverlay(cfg);

    const map: any = new L.Map("map", {
      center: new L.LatLng(lat, lng),
      zoom: 10,
      layers: [baseLayer, heatmapLayer],
    });

    heatmapLayer.setData(testData as any);
    return () => (map as any).remove();
  }, [lat, lng]);
  return (
    <>
      <div id="map" style={{ height: "500px", width: "80%" }}></div>
    </>
  );
};

export default SneezeMap;

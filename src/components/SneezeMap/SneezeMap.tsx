/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

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

const SneezeMap = ({ lat, lng, setCount }: any) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCount = Math.floor(Math.random() * 200 + 1);
      const randomLat = Number(`38.${Math.floor(Math.random() * 999)}`);
      const randomLngFull = Math.floor(Math.random() * 4 + 1);
      const randomLng = Number(
        `-${87 + randomLngFull}.${Math.floor(Math.random() * 999)}`
      );
      setData((prev: any) => [
        ...prev,
        { lat: randomLat, lng: randomLng, count: randomCount },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let newCount = 0;
    data.forEach((dataPoint: any) => {
      newCount += dataPoint?.count;
    });
    setCount(newCount);
  }, [data, setCount]);

  useEffect(() => {
    const testData = {
      max: 200,
      data,
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
      zoom: 8,
      layers: [baseLayer, heatmapLayer],
    });

    heatmapLayer.setData(testData as any);
    return () => (map as any).remove();
  }, [lat, lng, data]);
  return (
    <>
      <div id="map" style={{ height: "500px", width: "80%" }}></div>
    </>
  );
};

export default SneezeMap;

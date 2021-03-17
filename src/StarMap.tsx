import React from "react";
import { useEffect } from "react";

declare class SkySphere {
  constructor(id: string, data: any);
  addCustomObject(coordinate1: number, coordinate2: number, data: any): void;
  drawSky(): void;
}

const StarMap: React.FC = () => {
  useEffect(() => {
    const sky = new SkySphere("sky", {
      width: 800,
      height: 400,
      customOnClick: function (data: any) {
        console.log("REEE", data);
      },
    });
    sky.addCustomObject(5.5, 1.6441374, { radius: "5", clickData: "Orion" });
    sky.addCustomObject(430, 433, { radius: "5", clickData: "Cepheus" });
    sky.addCustomObject(400, 433, { radius: "5", clickData: "Ursa Minor" });
    sky.addCustomObject(409, 423, { radius: "5", clickData: "Cassiopeia" });
    sky.addCustomObject(48, 30, { radius: "5", clickData: "Pegasus" });
    sky.drawSky();
  }, []);

  return (
    <div className="StarMap">
      <canvas id="sky"></canvas>
    </div>
  );
};

export default StarMap;

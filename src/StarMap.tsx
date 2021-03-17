import React from "react";
import { useEffect } from "react";

declare class SkySphere {
  constructor(id: string, data: any);
  addCustomObject(coordinate1: number, coordinate2: number, data: any): void;
  drawSky(): void;
}

type MapProps = {
  displayConstInfo: (name: string) => void;
};

const StarMap: React.FC<MapProps> = ({ displayConstInfo }: MapProps) => {
  useEffect(() => {
    const sky = new SkySphere("sky", {
      width: 0,
      height: 0,
      customOnClick: function (data: any) {
        displayConstInfo(data.name);
      },
    });
    sky.addCustomObject(5.5, 1.6441374, { radius: "5", name: "Orion" });
    sky.addCustomObject(430, 433, { radius: "5", name: "Cepheus" });
    sky.addCustomObject(400, 433, { radius: "5", name: "Ursa Minor" });
    sky.addCustomObject(409, 423, { radius: "5", name: "Cassiopeia" });
    sky.addCustomObject(48, 30, { radius: "5", name: "Pegasus" });
    sky.drawSky();
  }, []);

  return (
    <div className="starMap">
      <canvas id="sky"></canvas>
    </div>
  );
};

export default StarMap;

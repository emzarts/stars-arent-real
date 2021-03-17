import React, { useState } from "react";
import StarMap from "../StarMap";

const ConstellationMap: React.FC = () => {
  const [constellation, setConstellation] = useState("");
  const displayConstellationInfo = (name: string) => {
    setConstellation(name);
  };
  return (
    <div className="constellationMap">
      <h1>Constellation Map</h1>
      <p>
        Click the red dots on each constellation to see their name and
        information
      </p>
      {constellation ? <h2>This constellation is {constellation}</h2> : ""}
      <StarMap displayConstInfo={displayConstellationInfo} />
    </div>
  );
};

export default ConstellationMap;

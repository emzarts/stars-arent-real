import "./constellationMap.css";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import StarMap from "../StarMap";

const ConstellationMap: React.FC = () => {
  const [constellation, setConstellation] = useState("");
  const displayConstellationInfo = (name: string) => {
    setConstellation(name);
  };
  return (
    <div className="constellationMap">
      <PageHeader />
      <h1>Constellation Map</h1>
      <p>
        Click the red dots on each constellation to see their name and
        information
      </p>
      <StarMap displayConstInfo={displayConstellationInfo} />
      {constellation ? <h2>This constellation is {constellation}</h2> : ""}
    </div>
  );
};

export default ConstellationMap;

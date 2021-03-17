import "./constellationMap.css";

import React, { useState } from "react";

import PageHeader from "../../components/PageHeader/PageHeader";
import StarMap from "../../components/StarMap";

const ConstellationMap: React.FC = () => {
  const [constellation, setConstellation] = useState("");
  const displayConstellationInfo = React.useCallback((name: string) => {
    setConstellation(name);
  }, []);
  return (
    <div className="constellationMap">
      <PageHeader pageName="Constellation Map" />
      <div className="pageContent">
        <p>
          Click the red dots on each constellation to see their name and
          information
        </p>
        <StarMap displayConstInfo={displayConstellationInfo} />
      </div>

      {constellation ? <h2>This constellation is {constellation}</h2> : ""}
    </div>
  );
};

export default ConstellationMap;

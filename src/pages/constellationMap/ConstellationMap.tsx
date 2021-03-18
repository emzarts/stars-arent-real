import "./constellationMap.css";

import React, { useState } from "react";
import ConstellationInfoContainer from "../constellationInfo/constellationInfoContainer/ConstellationInfoContainer";
import Modal from "../../components/Modal/Modal";
import PageHeader from "../../components/PageHeader/PageHeader";
import StarMap from "../../components/StarMap";

const ConstellationMap: React.FC = () => {
  const [constellation, setConstellation] = useState("");
  const displayConstellationInfo = React.useCallback((name: string) => {
    setConstellation(name);
  }, []);
  const closeConstellation = () => {
    setConstellation("");
  };
  const constellationInfo = (
    <div>
      <Modal
        closeModal={closeConstellation}
        contents={
          <ConstellationInfoContainer
            name={constellation}
          ></ConstellationInfoContainer>
        }
      />
    </div>
  );
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

      {constellation ? constellationInfo : ""}
    </div>
  );
};

export default ConstellationMap;

import "./ConstellationInfo.css";

import React from "react";
import { useParams } from "react-router-dom";
import ConstellationInfoModal from "./constellationInfoModal/ConstellationInfoContainer";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  return <ConstellationInfoModal name={name} />;
};

export default ConstellationInfo;

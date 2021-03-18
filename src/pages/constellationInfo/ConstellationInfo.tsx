import "./ConstellationInfo.css";

import React from "react";
import { useParams } from "react-router-dom";
import ConstellationInfoContainer from "./constellationInfoContainer/ConstellationInfoContainer";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  return <ConstellationInfoContainer name={name} />;
};

export default ConstellationInfo;

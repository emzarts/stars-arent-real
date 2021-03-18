import ConstellationInfoContainer from "./constellationInfoContainer/ConstellationInfoContainer";
import React from "react";
import { useParams } from "react-router-dom";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  return <ConstellationInfoContainer name={name} />;
};

export default ConstellationInfo;

import ConstellationInfoContainer from "./constellationInfoContainer/ConstellationInfoContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import React from "react";
import { useParams } from "react-router-dom";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  return (
    <div>
      <PageHeader pageName={`About: ${name}`} />
      <ConstellationInfoContainer name={name} />
    </div>
  );
};

export default ConstellationInfo;

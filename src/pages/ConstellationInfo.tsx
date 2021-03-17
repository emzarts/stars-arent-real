import "./ConstellationInfo.css";

import React from "react";
import { useParams } from "react-router-dom";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string | undefined>>();

  return (
    <div className="learnPage">
      <div className="PageName">About: {name}</div>
      <div className="PageContent">
        Lorem ipsum dolor sit amet wikipedia goes here
      </div>
    </div>
  );
};

export default ConstellationInfo;

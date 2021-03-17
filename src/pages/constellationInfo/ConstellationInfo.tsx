import "./ConstellationInfo.css";

import React from "react";
import { useParams } from "react-router-dom";
import { useWikiInfo } from "../../utils/wiki";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  const { summary, info } = useWikiInfo(name);
  console.log(info);

  return (
    <div className="learnPage">
      <div className="PageName">About: {name}</div>
      <div className="PageContent">{summary}</div>
      {info ? (
        <>
          <br />
          <div className="BrightestStarName">
            Brightest Star Name: {info.general.brighteststarname}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ConstellationInfo;

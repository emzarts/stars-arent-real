import "../ConstellationInfo.css";

import React from "react";
import { useWikiInfo } from "../../../utils/wiki";

type ConstellationInfoProps = {
  name: string;
};

const ConstellationInfoModal: React.FC<ConstellationInfoProps> = ({
  name,
}: ConstellationInfoProps) => {
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

export default ConstellationInfoModal;

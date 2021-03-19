import "./ConstellationInfoContainer.css";

import React from "react";
import { useWikiInfo } from "../../../utils/wiki";

type ConstellationInfoProps = {
  name: string;
};

const ConstellationInfoContainer: React.FC<ConstellationInfoProps> = ({
  name,
}: ConstellationInfoProps) => {
  const { summary, info } = useWikiInfo(name);
  console.log(info);

  return (
    <div className="constellationInfoContainer">
      <div className="PageContent">{summary}</div>
      {info ? (
        <>
          <br />
          <div className="PageContent BrightestStar">
            Brightest Star Name: {info.general.brighteststarname}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ConstellationInfoContainer;

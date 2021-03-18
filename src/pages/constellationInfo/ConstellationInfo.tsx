import "./ConstellationInfo.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import React from "react";
import { useParams } from "react-router-dom";
import { useWikiInfo } from "../../utils/wiki";

const ConstellationInfo: React.FC = () => {
  const { name } = useParams<Record<string, string>>();

  const { summary, info } = useWikiInfo(name);
  console.log(info);

  return (
    <div className="learnPage">
      <PageHeader pageName={`About: ${name}`} />
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

export default ConstellationInfo;

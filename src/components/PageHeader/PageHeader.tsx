import "./pageHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import history from "../../utils/history";

const PageHeader: React.FC = () => {
  return (
    <div className="pageHeader">
      <div className="headerSection">
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
      </div>
      <div className="headerSection"></div>
      <div className="headerSection"></div>
    </div>
  );
};

export default PageHeader;

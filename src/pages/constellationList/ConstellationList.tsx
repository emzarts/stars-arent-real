import "../learnPage.css";

import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import constellations from "../../utils/constellations.json";

const listList = constellations.map((names) => {
  return (
    <div key={names.latinName}>
      <Link to={`/${names.latinName}`}>
        <button className="listButton">{names.latinName}</button>
      </Link>
    </div>
  );
});

const ConstellationList: React.FC = () => {
  return (
    <div className="constellationList learnPage">
      <PageHeader pageName={"Constellation List"} />
      <div>{listList}</div>
    </div>
  );
};

export default ConstellationList;

import "./ConstellationList.css";

import { Link } from "react-router-dom";
import constellations from "../utils/constellations.json";

const listList = constellations.map((names) => {
  return (
    <div key={names.latinName}>
      <Link to={`/${names.latinName}`}>
        <button className="Button">{names.latinName}</button>
      </Link>
    </div>
  );
});

const ConstellationList: React.FC = () => {
  return (
    <div className="ConstellationList">
      <div className="PageName">Constellation List</div>
      <div>{listList}</div>
    </div>
  );
};

export default ConstellationList;

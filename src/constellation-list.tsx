import "./constellation-list.css";
import constellations from "./constellations.json";

const listList = constellations.map((names) => {
  return (
    <div>
      <button className="Button">{names.englishName}</button>
    </div>
  );
});

const ConstellationList = () => {
  return (
    <div className="ConstellationList">
      <div className="PageName">Constellation List</div>
      <div>{listList}</div>
    </div>
  );
};

export default ConstellationList;

import constellations from "./constellations.json";

const listList = constellations.map((names) => {
  return <div>{names.englishName}</div>;
});

const ConstellationList = () => {
  return (
    <div className="ConstellationList">
      <h1>WORDS</h1>
      <div>{listList}</div>
    </div>
  );
};

export default ConstellationList;

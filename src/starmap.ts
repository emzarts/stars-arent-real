import * as d3 from "d3";

const width = 954 + 28;
const height = width;
const scale = (width - 120) * 0.5;

console.log("THis File");

d3.csv(
  "https://static.observableusercontent.com/files/525e817e18867207108c9ba84d419ee1848791043df9ba6b4ba9f407300d8dd00b5bd706a9280c5172f83f34bf0953290158e402183a70998e8054a426546d24?response-content-disposition=attachment;filename*=UTF-8''stars.csv"
).then(
  function (value) {
    console.log("success", value);
  },
  function (error) {
    console.log("error", error);
  }
);

const data = d3
  .csvParse("stars.csv", (d) => {
    d3.autoType(d);
    console.log(d);
    // d[0] = (d.RA_hour + d.RA_min / 60 + d.RA_sec / 3600) * 15; // longitude
    // d[1] = d.dec_deg + d.dec_min / 60 + d.dec_sec / 3600; // latitude
    return d;
  })
  .sort((a, b) => d3.ascending(a.magnitude, b.magnitude));

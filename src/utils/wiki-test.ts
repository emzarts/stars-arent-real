import wiki from "wikijs";

export const exampleSearch = () => {
  // This returns the general quizable information for the Sirius constellation
  return wiki()
    .page("Sirius")
    .then((page) => page.fullInfo())
    .then(console.log);
};

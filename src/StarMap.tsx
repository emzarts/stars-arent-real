import React from "react";
import { useEffect } from "react";

const StarMap = () => {
  useEffect(() => {
    // add the script tag to the HTML after component is rendered
    // otherwise the canvas with id sky is not found and the image won't show up
    if (document.getElementById("skySphereScript") === null) {
      const skySphere = document.createElement("script");
      skySphere.setAttribute("id", "skySphereScript");
      skySphere.src = "../public/sky-sphere.min.js";
      skySphere.async = true;
      skySphere.setAttribute("type", "text/html");
      document.body.appendChild(skySphere);
      const renderSkySphere = document.createElement("script");
      renderSkySphere.innerHTML =
        " const sky = new SkySphere('sky', { " +
        "width: 800," +
        "height: 400," +
        "customOnClick: function (data) {" +
        "console.log('REEE', data);" +
        "}," +
        "});" +
        "sky.addCustomObject(5.5,1.6441374, { radius: '5', clickData: 'Orion' });" +
        "sky.drawSky();";

      document.body.appendChild(skySphere);
      document.body.appendChild(renderSkySphere);
    }
  }, []);
  return (
    <div className="StarMap">
      <canvas id="sky"></canvas>
    </div>
  );
};

export default StarMap;

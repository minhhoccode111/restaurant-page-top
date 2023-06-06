import "./css/style.css";
import Background from "./image/643.png";
import Bee from "./image/bee.svg";
import Dripping from "./image/dripping.png";
import Honeycomb from "./image/honeycomb.svg";

window.addEventListener("DOMContentLoaded", () => {
  document.body.textContent = "Hello World from webpack!";
  document.body.classList.add("hello");
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${Background})`;
  const myBee = document.createElement("div");
  const myBeeImage = new Image();
  myBeeImage.src = Bee;
  myBee.appendChild(myBeeImage);
  html.appendChild(myBee);
  const myDrippingImage = new Image();
  myDrippingImage.src = Dripping;
  myBee.appendChild(myDrippingImage);
  const myHoneycombImage = new Image();
  myHoneycombImage.src = Honeycomb;
  myBee.appendChild(myHoneycombImage);
});

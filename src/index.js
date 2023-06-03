import "./css/style.css";
import Background from "./image/643.png";
import Bee from "./image/bee.svg";
import Dripping from "./image/dripping.png";
import Honeycomb from "./image/honeycomb.svg";

window.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  const myBg = new Image();
  myBg.src = Background;
  html.style.background = `var(--yellow_1) url(${myBg.src}) no-repeat center center fixed`;
});

import "./css/styles.css";
import "./js/main.js";

import createHomeSection from "./js/home.js";
import About from "./js/about.js";
import Service from "./js/service.js";
import Menu from "./js/menu.js";
import createAppSection from "./js/app.js";
import Contact from "./js/contact.js";

// import About from "./img/about.jpg";
// import App1 from "./img/app1.png";
// import App2 from "./img/app2.png";
// import Dish from "./img/dish.svg";
// import Home from "./img/home.png";
// import Movil_app from "./img/movil-app.png";
// import Pizza from "./img/pizza.svg";
// import Plate1 from "./img/plate1.png";
// import Plate2 from "./img/plate2.png";
// import Plate3 from "./img/plate3.png";
// import Truck from "./img/truck.svg";

window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main.l-main");
  main.innerHTML = createHomeSection() + createAppSection();
});

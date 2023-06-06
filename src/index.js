import "./css/styles.css";
import "./js/main.js";

import { homeSection } from "./js/home.js";
import { aboutSection } from "./js/about.js";
import { serviceSection } from "./js/service.js";
import { menuSection } from "./js/menu.js";
import { appSection } from "./js/app.js";
import { contactSection } from "./js/contact.js";

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

const main = document.querySelector("main.l-main");

const PAGE = (function () {
  const clearMain = () => {
    main.innerHTML = "";
  };

  const initLoad = () => {
    main.appendChild(homeSection);
    main.appendChild(appSection);
  };

  const homeLoad = () => {
    clearMain();
    main.appendChild(homeSection);
    main.appendChild(appSection);
  };

  const aboutLoad = () => {
    clearMain();
    main.appendChild(aboutSection);
    main.appendChild(appSection);
  };

  const serviceLoad = () => {
    clearMain();
    main.appendChild(serviceSection);
    main.appendChild(appSection);
  };

  const menuLoad = () => {
    clearMain();
    main.appendChild(menuSection);
    main.appendChild(appSection);
  };

  const contactLoad = () => {
    clearMain();
    main.appendChild(contactSection);
    main.appendChild(appSection);
  };

  return {
    initLoad,
    homeLoad,
    aboutLoad,
    serviceLoad,
    menuLoad,
    contactLoad,
  };
})();

(() => {
  const home = document.querySelector(`a[href="#home"]`);
  const about = document.querySelector(`a[href="#about"]`);
  const service = document.querySelector(`a[href="#services"]`);
  const menu = document.querySelector(`a[href="#menu"]`);
  const contact = document.querySelector(`a[href="#contact"]`);

  window.addEventListener("DOMContentLoaded", () => {
    PAGE.initLoad();
  });

  home.addEventListener("click", () => {
    PAGE.homeLoad();
  });

  about.addEventListener("click", () => {
    PAGE.aboutLoad();
  });

  service.addEventListener("click", () => {
    PAGE.serviceLoad();
  });

  menu.addEventListener("click", () => {
    PAGE.menuLoad();
  });

  contact.addEventListener("click", () => {
    PAGE.contactLoad();
  });
})();

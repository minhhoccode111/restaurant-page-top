import Dish from "./img/dish.svg";
import Pizza from "./img/pizza.svg";
import Truck from "./img/truck.svg";

function createServiceSection() {
  //create section element
  let section = document.createElement("section");
  section.className = "services section bd-container";
  section.id = "services";

  //create span element with class "section-subtitle"
  let span = document.createElement("span");
  span.className = "section-subtitle";
  span.textContent = "Offering";

  //create h2 element with class "section-title"
  let h2 = document.createElement("h2");
  h2.className = "section-title";
  h2.textContent = "Our amazing services";

  //create div element with class "services__container bd-grid"
  let divContainer = document.createElement("div");
  divContainer.className = "services__container bd-grid";

  //create div element with class "services__content"
  let divContent0 = document.createElement("div");
  divContent0.className = "services__content";

  //create an image element with class "services__img"
  let imgDish = document.createElement("img");
  imgDish.className = "services__img";
  imgDish.src = Dish;

  //create a h3 element with class "services__title"
  let h3Excellent = document.createElement("h3");
  h3Excellent.className = "services__title";
  h3Excellent.textContent = "Excellent food";

  //create a p element with class "services__description"
  let pExcellent = document.createElement("p");
  pExcellent.className = "services__description";
  pExcellent.textContent =
    "We offer our clients excellent quality services for many years, with the best and delicious food in the city.";

  //Append to divContent0
}

const serviceSection = createServiceSection();

export default serviceSection;

import App1 from "./../img/app1.png";
import App2 from "./../img/app2.png";
import Movil_app from "./../img/movil-app.png";

export default function createAppSection() {
  // Create the section element
  const section = document.createElement("section");
  section.className = "app section bd-container";

  // Create the div element for app container
  const containerDiv = document.createElement("div");
  containerDiv.className = "app__container bd-grid";
  section.appendChild(containerDiv);

  // Create the div element for app data
  const dataDiv = document.createElement("div");
  dataDiv.className = "app__data";
  containerDiv.appendChild(dataDiv);

  // Create the span element for section subtitle
  const subtitleSpan = document.createElement("span");
  subtitleSpan.className = "section-subtitle app__initial";
  subtitleSpan.textContent = "App";
  dataDiv.appendChild(subtitleSpan);

  // Create the h2 element for section title
  const titleH2 = document.createElement("h2");
  titleH2.className = "section-title app__initial";
  titleH2.textContent = "App is available";
  dataDiv.appendChild(titleH2);

  // Create the p element for app description
  const descriptionP = document.createElement("p");
  descriptionP.className = "app__description";
  descriptionP.textContent =
    "Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.";
  dataDiv.appendChild(descriptionP);

  // Create the div element for app stores
  const storesDiv = document.createElement("div");
  storesDiv.className = "app__stores";
  dataDiv.appendChild(storesDiv);

  // Create the first link for app store 1
  const storeLink1 = document.createElement("a");
  storeLink1.href = "#";
  storesDiv.appendChild(storeLink1);

  // Create the img element for app store 1
  const storeImg1 = document.createElement("img");
  storeImg1.src = App1;
  storeImg1.alt = "";
  storeImg1.className = "app__store";
  storeLink1.appendChild(storeImg1);

  // Create the second link for app store 2
  const storeLink2 = document.createElement("a");
  storeLink2.href = "#";
  storesDiv.appendChild(storeLink2);

  // Create the img element for app store 2
  const storeImg2 = document.createElement("img");
  storeImg2.src = App2;
  storeImg2.alt = "";
  storeImg2.className = "app__store";
  storeLink2.appendChild(storeImg2);

  // Create the img element for app image
  const img = document.createElement("img");
  img.src = Movil_app;
  img.alt = "";
  img.className = "app__img";
  containerDiv.appendChild(img);

  return section;
}

// const appSection = createAppSection();

// export default appSection;

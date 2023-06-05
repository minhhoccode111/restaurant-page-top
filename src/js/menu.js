import Plate1 from "./../img/plate1.png";
import Plate2 from "./../img/plate2.png";
import Plate3 from "./../img/plate3.png";

function createMenuSection() {
  // Create the section element
  const section = document.createElement("section");
  section.className = "menu section bd-container";
  section.id = "menu";

  // Create the span element for section subtitle
  const subtitleSpan = document.createElement("span");
  subtitleSpan.className = "section-subtitle";
  subtitleSpan.textContent = "Special";
  section.appendChild(subtitleSpan);

  // Create the h2 element for section title
  const titleH2 = document.createElement("h2");
  titleH2.className = "section-title";
  titleH2.textContent = "Menu of the week";
  section.appendChild(titleH2);

  // Create the div element for menu container
  const containerDiv = document.createElement("div");
  containerDiv.className = "menu__container bd-grid";
  section.appendChild(containerDiv);

  // Create and append menu items
  const menuItems = [
    {
      imgSrc: Plate1,
      name: "Barbecue salad",
      detail: "Delicious dish",
      price: "$22.00",
    },
    {
      imgSrc: Plate2,
      name: "Salad with fish",
      detail: "Delicious dish",
      price: "$12.00",
    },
    {
      imgSrc: Plate3,
      name: "Spinach salad",
      detail: "Delicious dish",
      price: "$9.50",
    },
  ];

  for (const item of menuItems) {
    // Create the div element for menu content
    const contentDiv = document.createElement("div");
    contentDiv.className = "menu__content";
    containerDiv.appendChild(contentDiv);

    // Create the img element
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = "";
    img.className = "menu__img";
    contentDiv.appendChild(img);

    // Create the h3 element for menu name
    const nameH3 = document.createElement("h3");
    nameH3.className = "menu__name";
    nameH3.textContent = item.name;
    contentDiv.appendChild(nameH3);

    // Create the span element for menu detail
    const detailSpan = document.createElement("span");
    detailSpan.className = "menu__detail";
    detailSpan.textContent = item.detail;
    contentDiv.appendChild(detailSpan);

    // Create the span element for menu price
    const priceSpan = document.createElement("span");
    priceSpan.className = "menu__preci";
    priceSpan.textContent = item.price;
    contentDiv.appendChild(priceSpan);

    // Create the a element for menu button
    const buttonLink = document.createElement("a");
    buttonLink.href = "#";
    buttonLink.className = "button menu__button";
    contentDiv.appendChild(buttonLink);

    // Create the i element for cart icon
    const cartIcon = document.createElement("i");
    cartIcon.className = "bx bx-cart-alt";
    buttonLink.appendChild(cartIcon);
  }

  return section;
}

const menuSection = createMenuSection();

export default menuSection;

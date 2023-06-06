function createContactSection() {
  // Create the section element
  const section = document.createElement("section");
  section.className = "contact section bd-container";
  section.id = "contact";

  // Create the div element for contact container
  const containerDiv = document.createElement("div");
  containerDiv.className = "contact__container bd-grid";
  section.appendChild(containerDiv);

  // Create the div element for contact data
  const dataDiv = document.createElement("div");
  dataDiv.className = "contact__data";
  containerDiv.appendChild(dataDiv);

  // Create the span element for section subtitle
  const subtitleSpan = document.createElement("span");
  subtitleSpan.className = "section-subtitle contact__initial";
  subtitleSpan.textContent = "Let's talk";
  dataDiv.appendChild(subtitleSpan);

  // Create the h2 element for section title
  const titleH2 = document.createElement("h2");
  titleH2.className = "section-title contact__initial";
  titleH2.textContent = "Contact us";
  dataDiv.appendChild(titleH2);

  // Create the p element for contact description
  const descriptionP = document.createElement("p");
  descriptionP.className = "contact__description";
  descriptionP.textContent =
    "If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.";
  dataDiv.appendChild(descriptionP);

  // Create the div element for contact button
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "contact__button";
  containerDiv.appendChild(buttonDiv);

  // Create the a element for contact button
  const buttonLink = document.createElement("a");
  buttonLink.href = "#";
  buttonLink.className = "button";
  buttonLink.textContent = "Contact us now";
  buttonDiv.appendChild(buttonLink);

  return section;
}

export const contactSection = createContactSection();

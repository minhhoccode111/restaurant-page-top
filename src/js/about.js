import About from "./../img/about.jpg";

function createAboutSection() {
  // Create the section element
  let section = document.createElement("section");
  section.className = "about section bd-container";
  section.id = "about";

  // Create the div element with the class "about__container" and "bd-grid"
  let divContainer = document.createElement("div");
  divContainer.className = "about__container bd-grid";

  // Create the div element with the class "about__data"
  let divData = document.createElement("div");
  divData.className = "about__data";

  // Create the span element with the class "section-subtitle about__initial" and set its text content
  let span = document.createElement("span");
  span.className = "section-subtitle about__initial";
  span.textContent = "About us";

  // Create the h2 element with the class "section-title about__initial" and set its text content
  let h2 = document.createElement("h2");
  h2.className = "section-title about__initial";
  h2.innerHTML = "We cook the best <br /> tasty food";

  // Create the p element with the class "about__description" and set its text content
  let p = document.createElement("p");
  p.className = "about__description";
  p.textContent =
    "We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.";

  // Create the a element with the class "button", set its href attribute, and text content
  let a = document.createElement("a");
  a.className = "button";
  a.href = "#";
  a.textContent = "Explore history";

  // Append the span, h2, p, and a elements to the divData element
  divData.appendChild(span);
  divData.appendChild(h2);
  divData.appendChild(p);
  divData.appendChild(a);

  // Create the img element with the class "about__img", set its src and alt attributes
  let img = document.createElement("img");
  img.className = "about__img";
  img.src = About;
  img.alt = "";

  // Append the divData and img elements to the divContainer element
  divContainer.appendChild(divData);
  divContainer.appendChild(img);

  // Append the divContainer element to the section element
  section.appendChild(divContainer);

  return section;
}

// Call the createAboutSection function to create the section
let aboutSection = createAboutSection();

export default aboutSection;

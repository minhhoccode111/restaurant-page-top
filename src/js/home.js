import Home from "./../img/home.png";

function createHomeSection() {
  // Create the section element
  let section = document.createElement("section");
  section.className = "home";
  section.id = "home";

  // Create the div element with the class "home__container" and "bd-container bd-grid"
  let divContainer = document.createElement("div");
  divContainer.className = "home__container bd-container bd-grid";

  // Create the div element with the class "home__data"
  let divData = document.createElement("div");
  divData.className = "home__data";

  // Create the h1 element with the class "home__title" and set its text content
  let h1 = document.createElement("h1");
  h1.className = "home__title";
  h1.textContent = "Tasty food";

  // Create the h2 element with the class "home__subtitle" and set its text content
  let h2 = document.createElement("h2");
  h2.className = "home__subtitle";
  h2.innerHTML = "Try the best food of <br /> the week.";

  // Create the a element with the class "button", set its href attribute, and text content
  let a = document.createElement("a");
  a.className = "button";
  a.href = "#";
  a.textContent = "View Menu";

  // Append the h1, h2, and a elements to the divData element
  divData.appendChild(h1);
  divData.appendChild(h2);
  divData.appendChild(a);

  // Create the img element with the class "home__img", set its src and alt attributes
  let img = document.createElement("img");
  img.className = "home__img";
  img.src = Home;
  img.alt = "";

  // Append the divData and img elements to the divContainer element
  divContainer.appendChild(divData);
  divContainer.appendChild(img);

  // Append the divContainer element to the section element
  section.appendChild(divContainer);

  return section;
}

// Call the createHomeSection function to create the section
let homeSection = createHomeSection();

export default homeSection;

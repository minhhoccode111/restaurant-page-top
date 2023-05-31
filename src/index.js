import "./style.css";
import "./home.js";
import "./menu.js";
import "./contact.js";

window.addEventListener("DOMContentLoaded", () => {
  //The only div in index.html
  const content = document.getElementById("content");
  content.textContent = "Hello World";
});

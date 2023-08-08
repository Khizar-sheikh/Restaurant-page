import footer from "./footer";
import contact from "./contact";
import home from "./home";
import menu from "./menu";
import header from "./header";

import "./style/contact.css";
import "./style/header.css";
import "./style/menu.css";

const app = document.createElement("div");
app.setAttribute("id", "content");
document.body.appendChild(app);

app.appendChild(header());
app.appendChild(home());
app.appendChild(footer());

const homeLink = document.getElementsByClassName("homelink");
const menuLink = document.getElementsByClassName("menulink");
const contactLink = document.getElementsByClassName("contactlink");

homeLink.addEventListener("click", toggelHome);
menuLink.addEventListener("click", toggelMenu);
contactLink.addEventListener("click", toggelContact);

function toggelHome() {
  app.innerHTML = "";
  app.appendChild(header());
  app.appendChild(home());
  app.appendChild(footer());

  const homeLink = document.getElementsByClassName("homelink");
  const menuLink = document.getElementsByClassName("menulink");
  const contactLink = document.getElementsByClassName("contactlink");

  homeLink.addEventListener("click", toggelHome);
  menuLink.addEventListener("click", toggelMenu);
  contactLink.addEventListener("click", toggelContact);
}
function toggelMenu() {
  app.innerHTML = "";
  app.appendChild(header());
  app.appendChild(menu());
  app.appendChild(footer());

  const homeLink = document.getElementsByClassName("homelink");
  const menuLink = document.getElementsByClassName("menulink");
  const contactLink = document.getElementsByClassName("contactlink");

  homeLink.addEventListener("click", toggelHome);
  menuLink.addEventListener("click", toggelMenu);
  contactLink.addEventListener("click", toggelContact);
}

function toggelContact() {
  app.innerHTML = "";
  app.appendChild(header());
  app.appendChild(contact());
  app.appendChild(footer());

  const homeLink = document.getElementsByClassName("homelink");
  const menuLink = document.getElementsByClassName("menulink");
  const contactLink = document.getElementsByClassName("contactlink");

  homeLink.addEventListener("click", toggelHome);
  menuLink.addEventListener("click", toggelMenu);
  contactLink.addEventListener("click", toggelContact);
}

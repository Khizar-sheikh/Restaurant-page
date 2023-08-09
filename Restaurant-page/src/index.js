import footer from "./footer";
import contact from "./contact";
import home from "./home";
import openMenu from "./menu";
import header from "./header";

import "./style/contact.css";
import "./style/header.css";
import "./style/menu.css";

function addListenersToNavLink() {
  const homeLink = document.querySelector(".homelink");
  const menuLink = document.querySelector(".menulink");
  const contactLink = document.querySelector(".contactlink");

  homeLink.addEventListener("click", toggelHome);
  menuLink.addEventListener("click", toggelMenu);
  contactLink.addEventListener("click", toggelContact);
}

const app = document.createElement("div");
app.setAttribute("id", "content");
document.body.appendChild(app);

app.appendChild(header());
app.appendChild(home());
app.appendChild(footer());

addListenersToNavLink();

function toggelHome() {
  app.innerHTML = "";
  app.appendChild(header());
  app.appendChild(home());
  app.appendChild(footer());

  addListenersToNavLink();
}
function toggelMenu() {
  app.innerHTML = "";
  app.appendChild(header());
  const menuContent = openMenu();
  app.appendChild(menuContent);
  app.appendChild(footer());

  addListenersToNavLink();
}

function toggelContact() {
  app.innerHTML = "";
  app.appendChild(header());
  app.appendChild(contact());
  app.appendChild(footer());

  addListenersToNavLink();
}

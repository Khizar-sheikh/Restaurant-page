

import logoimg from "./image/logo.png";
import contactimg from "./image/contact.png";


export default function createHeader() {
  const header = document.createElement("header");

  const logoDiv = document.createElement("div");

  logoDiv.classList.add("logo");
  const logoImg = document.createElement("img");
  logoImg.src = logoimg;
  logoImg.alt = "";
  logoDiv.appendChild(logoImg);

  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");
  const homeLink = document.createElement("a");
  homeLink.classList.add('homelink')
  homeLink.href = "#";
  homeLink.textContent = "Home";
  const menuLink = document.createElement("a");
  menuLink.classList.add('menulink');
  menuLink.href = "#";
  menuLink.textContent = "Menu";
  const contactLink = document.createElement("a");
  contactLink.classList.add('contactlink');
  contactLink.href = "#";
  contactLink.textContent = "Contact Us";
  navDiv.appendChild(homeLink);
  navDiv.appendChild(menuLink);
  navDiv.appendChild(contactLink);

  const callDiv = document.createElement("div");
  callDiv.classList.add("call");
  const callImg = document.createElement("img");
  callImg.src = contactimg;

  callImg.alt = "";
  callDiv.appendChild(callImg);

  // Append the logo, navigation, and call elements to the header
  header.appendChild(logoDiv);
  header.appendChild(navDiv);
  header.appendChild(callDiv);

  return header;
}


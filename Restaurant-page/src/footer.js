export default function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer'); 

    let p = document.createElement('p');
    p.textContent = "© Restaurant 2023. All rights reserved";
    footer.appendChild(p);
    return footer;
  }

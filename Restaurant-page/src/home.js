export default function createHome() {
    const Home = document.createElement('div');
    Home.classList.add("Home");
    
    const identity = document.createElement("div");
    identity.classList.add("identity");
    
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h1");
    
    h1.textContent = `"Savor Every Moment -`;
    h2.textContent = `Where Food, Family, and Memories Unite."`;
    
    identity.appendChild(h1);
    identity.appendChild(h2);
    Home.appendChild(identity);
    
    return Home; // Corrected the return statement
}
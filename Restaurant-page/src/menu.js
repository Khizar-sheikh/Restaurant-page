// Function to create a new element and set its attributes
function createElementWithAttributes(tag, attributes) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
}

// Function to create a menu item and add it to the specified container
function createMenuItem(container, className, title, description) {
  const menuItem = createElementWithAttributes("div", { class: className });
  const heading = createElementWithAttributes("h1", {});
  const descriptionPara = createElementWithAttributes("p", {});
  const headingText = document.createTextNode(title);
  const descriptionText = document.createTextNode(description);

  heading.appendChild(headingText);
  descriptionPara.appendChild(descriptionText);
  menuItem.appendChild(heading);
  menuItem.appendChild(descriptionPara);

  container.appendChild(menuItem);
}

export default function openMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const pizza = document.createElement("div");
  pizza.classList.add("pizza");

  const Pizzah1 = document.createElement("h1");
  Pizzah1.textContent = "Pizzas";

  pizza.appendChild(Pizzah1);

  const pizzaMenuContainer = createElementWithAttributes("div", {
    class: "pizzamenu",
  });
  createMenuItem(
    pizzaMenuContainer,
    "pizza1",
    "Pizza Margherita",
    "Pizza Margherita is a classic Neapolitan pizza topped with tomato sauce, fresh mozzarella cheese, and fresh basil leaves. It's a simple yet delicious choice that highlights the flavors of its ingredients."
  );
  createMenuItem(
    pizzaMenuContainer,
    "pizza2",
    "Pepperoni Pizza",
    "Pepperoni pizza is a popular American pizza topped with tomato sauce, mozzarella cheese, and slices of spicy pepperoni. It's a favorite for those who enjoy a bit of heat with their pizza."
  );
  createMenuItem(
    pizzaMenuContainer,
    "pizza3",
    "Hawaiian Pizza",
    "Hawaiian pizza features a combination of tomato sauce, mozzarella cheese, ham, and pineapple. It's a controversial choice, loved by some and debated by others for its sweet and savory mix."
  );
  createMenuItem(
    pizzaMenuContainer,
    "pizza4",
    "Mushroom Pizza",
    "Mushroom pizza is a delightful option for mushroom lovers. It includes tomato sauce, mozzarella cheese, and various types of mushrooms, such as button, shiitake, and portobello."
  );
  createMenuItem(
    pizzaMenuContainer,
    "pizza5",
    "Supreme Pizza",
    "Supreme pizza is a loaded pizza featuring a variety of toppings like pepperoni, sausage, bell peppers, onions, olives, and mushrooms. It's a flavorful and satisfying choice."
  );
  createMenuItem(
    pizzaMenuContainer,
    "pizza6",
    "BBQ Pizza",
    "BBQ chicken pizza is a unique twist on traditional pizza, combining sweet and savory flavors that make it a crowd-pleaser."
  );

  menu.appendChild(pizzaMenuContainer);

  const pastah1 = document.createElement("h1");
  pastah1.textContent = "Pastas";

  const pastaContainer = createElementWithAttributes("div", { class: "pasta" });
  const pastaMenuContainer = createElementWithAttributes("div", {
    class: "pastamenu",
  });
  createMenuItem(
    pastaMenuContainer,
    "pasta1",
    "Spaghetti Carbonara",
    "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta or guanciale, and black pepper. It's a creamy and flavorful delight."
  );
  createMenuItem(
    pastaMenuContainer,
    "pasta2",
    "Fettuccine Alfredo",
    "Fettuccine Alfredo is a rich and creamy pasta dish made with butter, heavy cream, and Parmesan cheese. It's a comfort food favorite."
  );
  createMenuItem(
    pastaMenuContainer,
    "pasta3",
    "Penne alla Vodka",
    "Penne alla Vodka is a tomato-based pasta dish with a creamy vodka sauce, often garnished with prosciutto or pancetta. It has a unique and indulgent flavor."
  );
  createMenuItem(
    pastaMenuContainer,
    "pasta4",
    "Lasagna",
    "Lasagna is a layered pasta dish with tomato sauce, cheese, and often includes meat or vegetables. It's a hearty and comforting Italian classic."
  );
  createMenuItem(
    pastaMenuContainer,
    "pasta5",
    "Pasta Primavera",
    "Pasta Primavera is a fresh and vibrant pasta dish loaded with seasonal vegetables, herbs, and a light sauce. It's perfect for a taste of spring."
  );
  createMenuItem(
    pastaMenuContainer,
    "pasta6",
    "Spaghetti Bolognese",
    "Spaghetti Bolognese is a hearty meat sauce served over spaghetti. It's a popular and comforting choice for pasta lovers."
  );

  pastaContainer.appendChild(pastah1);

  menu.appendChild(pizza);
  menu.appendChild(pizzaMenuContainer);

  menu.appendChild(pastaContainer);

  menu.appendChild(pastaMenuContainer);

  return menu;
}

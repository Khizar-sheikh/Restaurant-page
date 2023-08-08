/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithAttributes)
/* harmony export */ });
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
  
  function openMenu() {
    const menu = document.createElement("div");
    menu.classList.add('menu');
  
    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
  
    const Pizzah1 = document.createElement("h1");
    Pizzah1.textContent = "Pizzas"
  
    pizza.appendChild(Pizzah1);
  
    const pizzaMenuContainer = createElementWithAttributes("div", { class: "pizzamenu" });
    createMenuItem(pizzaMenuContainer, "pizza1", "Pizza Margherita", "Pizza Margherita is a classic Neapolitan pizza topped with tomato sauce, fresh mozzarella cheese, and fresh basil leaves. It's a simple yet delicious choice that highlights the flavors of its ingredients.");
    createMenuItem(pizzaMenuContainer, "pizza2", "Pepperoni Pizza", "Pepperoni pizza is a popular American pizza topped with tomato sauce, mozzarella cheese, and slices of spicy pepperoni. It's a favorite for those who enjoy a bit of heat with their pizza.");
    createMenuItem(pizzaMenuContainer, "pizza3", "Hawaiian Pizza", "Hawaiian pizza features a combination of tomato sauce, mozzarella cheese, ham, and pineapple. It's a controversial choice, loved by some and debated by others for its sweet and savory mix.");
    createMenuItem(pizzaMenuContainer, "pizza4", "Mushroom Pizza", "Mushroom pizza is a delightful option for mushroom lovers. It includes tomato sauce, mozzarella cheese, and various types of mushrooms, such as button, shiitake, and portobello.");
    createMenuItem(pizzaMenuContainer, "pizza5", "Supreme Pizza", "Supreme pizza is a loaded pizza featuring a variety of toppings like pepperoni, sausage, bell peppers, onions, olives, and mushrooms. It's a flavorful and satisfying choice.");
    createMenuItem(pizzaMenuContainer, "pizza6", "BBQ Pizza", "BBQ chicken pizza is a unique twist on traditional pizza, combining sweet and savory flavors that make it a crowd-pleaser.");
  
    pizza.appendChild(pizzaMenuContainer);
  
    const pastah1 = document.createElement("h1");
    pastah1.textContent = "Pastas";
  
    const pastaContainer = createElementWithAttributes("div", { class: "pasta" });
    const pastaMenuContainer = createElementWithAttributes("div", { class: "pastamenu" });
    createMenuItem(pastaMenuContainer, "pasta1", "Spaghetti Carbonara", "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta or guanciale, and black pepper. It's a creamy and flavorful delight.");
    createMenuItem(pastaMenuContainer, "pasta2", "Fettuccine Alfredo", "Fettuccine Alfredo is a rich and creamy pasta dish made with butter, heavy cream, and Parmesan cheese. It's a comfort food favorite.");
    createMenuItem(pastaMenuContainer, "pasta3", "Penne alla Vodka", "Penne alla Vodka is a tomato-based pasta dish with a creamy vodka sauce, often garnished with prosciutto or pancetta. It has a unique and indulgent flavor.");
    createMenuItem(pastaMenuContainer, "pasta4", "Lasagna", "Lasagna is a layered pasta dish with tomato sauce, cheese, and often includes meat or vegetables. It's a hearty and comforting Italian classic.");
    createMenuItem(pastaMenuContainer, "pasta5", "Pasta Primavera", "Pasta Primavera is a fresh and vibrant pasta dish loaded with seasonal vegetables, herbs, and a light sauce. It's perfect for a taste of spring.");
    createMenuItem(pastaMenuContainer, "pasta6", "Spaghetti Bolognese", "Spaghetti Bolognese is a hearty meat sauce served over spaghetti. It's a popular and comforting choice for pasta lovers.");
  
    pastaContainer.appendChild(pastah1);
    pastaContainer.appendChild(pastaMenuContainer);
  
    menu.appendChild(pizza);
    menu.appendChild(pastaContainer);
  
    
  }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0I7QUFDNUUsd0RBQXdEO0FBQ3hELCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLG9CQUFvQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsZ0JBQWdCO0FBQ2hGLG9FQUFvRSxvQkFBb0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBlbGVtZW50IGFuZCBzZXQgaXRzIGF0dHJpYnV0ZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKHRhZywgYXR0cmlidXRlcykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG1lbnUgaXRlbSBhbmQgYWRkIGl0IHRvIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyXHJcbiAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oY29udGFpbmVyLCBjbGFzc05hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZXMoXCJkaXZcIiwgeyBjbGFzczogY2xhc3NOYW1lIH0pO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhcImgxXCIsIHt9KTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYSA9IGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhcInBcIiwge30pO1xyXG4gICAgY29uc3QgaGVhZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0KTtcclxuICAgIGRlc2NyaXB0aW9uUGFyYS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpO1xyXG4gIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIFxyXG4gICAgY29uc3QgcGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpenphLmNsYXNzTGlzdC5hZGQoJ3BpenphJyk7XHJcbiAgXHJcbiAgICBjb25zdCBQaXp6YWgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgUGl6emFoMS50ZXh0Q29udGVudCA9IFwiUGl6emFzXCJcclxuICBcclxuICAgIHBpenphLmFwcGVuZENoaWxkKFBpenphaDEpO1xyXG4gIFxyXG4gICAgY29uc3QgcGl6emFNZW51Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKFwiZGl2XCIsIHsgY2xhc3M6IFwicGl6emFtZW51XCIgfSk7XHJcbiAgICBjcmVhdGVNZW51SXRlbShwaXp6YU1lbnVDb250YWluZXIsIFwicGl6emExXCIsIFwiUGl6emEgTWFyZ2hlcml0YVwiLCBcIlBpenphIE1hcmdoZXJpdGEgaXMgYSBjbGFzc2ljIE5lYXBvbGl0YW4gcGl6emEgdG9wcGVkIHdpdGggdG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGZyZXNoIGJhc2lsIGxlYXZlcy4gSXQncyBhIHNpbXBsZSB5ZXQgZGVsaWNpb3VzIGNob2ljZSB0aGF0IGhpZ2hsaWdodHMgdGhlIGZsYXZvcnMgb2YgaXRzIGluZ3JlZGllbnRzLlwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKHBpenphTWVudUNvbnRhaW5lciwgXCJwaXp6YTJcIiwgXCJQZXBwZXJvbmkgUGl6emFcIiwgXCJQZXBwZXJvbmkgcGl6emEgaXMgYSBwb3B1bGFyIEFtZXJpY2FuIHBpenphIHRvcHBlZCB3aXRoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBzbGljZXMgb2Ygc3BpY3kgcGVwcGVyb25pLiBJdCdzIGEgZmF2b3JpdGUgZm9yIHRob3NlIHdobyBlbmpveSBhIGJpdCBvZiBoZWF0IHdpdGggdGhlaXIgcGl6emEuXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0ocGl6emFNZW51Q29udGFpbmVyLCBcInBpenphM1wiLCBcIkhhd2FpaWFuIFBpenphXCIsIFwiSGF3YWlpYW4gcGl6emEgZmVhdHVyZXMgYSBjb21iaW5hdGlvbiBvZiB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEgY2hlZXNlLCBoYW0sIGFuZCBwaW5lYXBwbGUuIEl0J3MgYSBjb250cm92ZXJzaWFsIGNob2ljZSwgbG92ZWQgYnkgc29tZSBhbmQgZGViYXRlZCBieSBvdGhlcnMgZm9yIGl0cyBzd2VldCBhbmQgc2F2b3J5IG1peC5cIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShwaXp6YU1lbnVDb250YWluZXIsIFwicGl6emE0XCIsIFwiTXVzaHJvb20gUGl6emFcIiwgXCJNdXNocm9vbSBwaXp6YSBpcyBhIGRlbGlnaHRmdWwgb3B0aW9uIGZvciBtdXNocm9vbSBsb3ZlcnMuIEl0IGluY2x1ZGVzIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGFuZCB2YXJpb3VzIHR5cGVzIG9mIG11c2hyb29tcywgc3VjaCBhcyBidXR0b24sIHNoaWl0YWtlLCBhbmQgcG9ydG9iZWxsby5cIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShwaXp6YU1lbnVDb250YWluZXIsIFwicGl6emE1XCIsIFwiU3VwcmVtZSBQaXp6YVwiLCBcIlN1cHJlbWUgcGl6emEgaXMgYSBsb2FkZWQgcGl6emEgZmVhdHVyaW5nIGEgdmFyaWV0eSBvZiB0b3BwaW5ncyBsaWtlIHBlcHBlcm9uaSwgc2F1c2FnZSwgYmVsbCBwZXBwZXJzLCBvbmlvbnMsIG9saXZlcywgYW5kIG11c2hyb29tcy4gSXQncyBhIGZsYXZvcmZ1bCBhbmQgc2F0aXNmeWluZyBjaG9pY2UuXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0ocGl6emFNZW51Q29udGFpbmVyLCBcInBpenphNlwiLCBcIkJCUSBQaXp6YVwiLCBcIkJCUSBjaGlja2VuIHBpenphIGlzIGEgdW5pcXVlIHR3aXN0IG9uIHRyYWRpdGlvbmFsIHBpenphLCBjb21iaW5pbmcgc3dlZXQgYW5kIHNhdm9yeSBmbGF2b3JzIHRoYXQgbWFrZSBpdCBhIGNyb3dkLXBsZWFzZXIuXCIpO1xyXG4gIFxyXG4gICAgcGl6emEuYXBwZW5kQ2hpbGQocGl6emFNZW51Q29udGFpbmVyKTtcclxuICBcclxuICAgIGNvbnN0IHBhc3RhaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBwYXN0YWgxLnRleHRDb250ZW50ID0gXCJQYXN0YXNcIjtcclxuICBcclxuICAgIGNvbnN0IHBhc3RhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKFwiZGl2XCIsIHsgY2xhc3M6IFwicGFzdGFcIiB9KTtcclxuICAgIGNvbnN0IHBhc3RhTWVudUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhcImRpdlwiLCB7IGNsYXNzOiBcInBhc3RhbWVudVwiIH0pO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0ocGFzdGFNZW51Q29udGFpbmVyLCBcInBhc3RhMVwiLCBcIlNwYWdoZXR0aSBDYXJib25hcmFcIiwgXCJTcGFnaGV0dGkgQ2FyYm9uYXJhIGlzIGEgY2xhc3NpYyBJdGFsaWFuIHBhc3RhIGRpc2ggbWFkZSB3aXRoIGVnZ3MsIGNoZWVzZSwgcGFuY2V0dGEgb3IgZ3VhbmNpYWxlLCBhbmQgYmxhY2sgcGVwcGVyLiBJdCdzIGEgY3JlYW15IGFuZCBmbGF2b3JmdWwgZGVsaWdodC5cIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShwYXN0YU1lbnVDb250YWluZXIsIFwicGFzdGEyXCIsIFwiRmV0dHVjY2luZSBBbGZyZWRvXCIsIFwiRmV0dHVjY2luZSBBbGZyZWRvIGlzIGEgcmljaCBhbmQgY3JlYW15IHBhc3RhIGRpc2ggbWFkZSB3aXRoIGJ1dHRlciwgaGVhdnkgY3JlYW0sIGFuZCBQYXJtZXNhbiBjaGVlc2UuIEl0J3MgYSBjb21mb3J0IGZvb2QgZmF2b3JpdGUuXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0ocGFzdGFNZW51Q29udGFpbmVyLCBcInBhc3RhM1wiLCBcIlBlbm5lIGFsbGEgVm9ka2FcIiwgXCJQZW5uZSBhbGxhIFZvZGthIGlzIGEgdG9tYXRvLWJhc2VkIHBhc3RhIGRpc2ggd2l0aCBhIGNyZWFteSB2b2RrYSBzYXVjZSwgb2Z0ZW4gZ2FybmlzaGVkIHdpdGggcHJvc2NpdXR0byBvciBwYW5jZXR0YS4gSXQgaGFzIGEgdW5pcXVlIGFuZCBpbmR1bGdlbnQgZmxhdm9yLlwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKHBhc3RhTWVudUNvbnRhaW5lciwgXCJwYXN0YTRcIiwgXCJMYXNhZ25hXCIsIFwiTGFzYWduYSBpcyBhIGxheWVyZWQgcGFzdGEgZGlzaCB3aXRoIHRvbWF0byBzYXVjZSwgY2hlZXNlLCBhbmQgb2Z0ZW4gaW5jbHVkZXMgbWVhdCBvciB2ZWdldGFibGVzLiBJdCdzIGEgaGVhcnR5IGFuZCBjb21mb3J0aW5nIEl0YWxpYW4gY2xhc3NpYy5cIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShwYXN0YU1lbnVDb250YWluZXIsIFwicGFzdGE1XCIsIFwiUGFzdGEgUHJpbWF2ZXJhXCIsIFwiUGFzdGEgUHJpbWF2ZXJhIGlzIGEgZnJlc2ggYW5kIHZpYnJhbnQgcGFzdGEgZGlzaCBsb2FkZWQgd2l0aCBzZWFzb25hbCB2ZWdldGFibGVzLCBoZXJicywgYW5kIGEgbGlnaHQgc2F1Y2UuIEl0J3MgcGVyZmVjdCBmb3IgYSB0YXN0ZSBvZiBzcHJpbmcuXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0ocGFzdGFNZW51Q29udGFpbmVyLCBcInBhc3RhNlwiLCBcIlNwYWdoZXR0aSBCb2xvZ25lc2VcIiwgXCJTcGFnaGV0dGkgQm9sb2duZXNlIGlzIGEgaGVhcnR5IG1lYXQgc2F1Y2Ugc2VydmVkIG92ZXIgc3BhZ2hldHRpLiBJdCdzIGEgcG9wdWxhciBhbmQgY29tZm9ydGluZyBjaG9pY2UgZm9yIHBhc3RhIGxvdmVycy5cIik7XHJcbiAgXHJcbiAgICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YWgxKTtcclxuICAgIHBhc3RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhTWVudUNvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHBpenphKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGFzdGFDb250YWluZXIpO1xyXG4gIFxyXG4gICAgXHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
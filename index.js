const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
const pizzaIdInput = document.getElementById("pizzaIdInput");
const pizzaContainer = document.getElementById("pizzaContainer");
const buscarPizzaButton = document.getElementById("buscarPizza");

function renderPizza(pizza){
  pizzaContainer.innerHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}"/>
      <p>Ingredientes: ${pizza.ingredientes}</p>
      <p>Precio: $${pizza.precio}</p>
    </div>
  `
}

function renderError(message){
  pizzaContainer.innerHTML = <p class="error-message">${message}</p>
}

function buscarPizza(){
  const pizzaId = parseInt(pizzaIdInput.value);
  
  if(isNaN(pizzaId)){
    renderError("Por favor, ingrese un número válido");
    return;
  }

  const pizza = pizzas.find(p => p.id === pizzaId);

  if(pizza){
    renderPizza(pizza)
    localStorage.setItem("UltimaPizza", JSON.stringify(pizza));
  } else{
    renderError("No existe una pizza con ese ID");
  }
}

buscarPizzaButton.addEventListener("click", buscarPizza);

window.addEventListener("DOMContentLoaded", () => {
  const pizzaGuardada = localStorage.getItem("UltimaPizza");

  if(pizzaGuardada){
    const pizza = JSON.parse(pizzaGuardada);
    renderPizza(pizza);
  }
})


import { productoServicio } from "./productos-servicios.js";

const seleccionado = document.querySelector("body");
const cardContainer = document.querySelector(".card--container");
let card = "";
let salirBtn = "";
let img = document.querySelector(".emergente--img");
let div = document.querySelector(".emergente--div");

const mostrarProducto = (id, nombre, img, alt, precio, categoria, tamano) => {
  const card = document.createElement("a");
  card.href = "";
  card.id = id;
  card.classList.add("card");
  const contenido = `
  <div class="card--img--div card flex">
    <img  src="${img}"  alt=" ${alt} " class="card--img card" />
  </div>
  <p class="card--titulo card p1"> ${nombre} </p>
  <div class=" card--categoria--div card flex">
    <p class="card--categoria card p6">Categ.: ${categoria}</p>
    <p class="card--categoria card p6">Tam.: ${tamano}</p>
  </div>
  <p class="card--precio card p4">PRECIO: ${precio} </p>
  `;
  card.innerHTML = contenido;
  card.classList.add("card--item", "flex");
  card.addEventListener("click", descripcion);
  return card;
};

const mostrarSeleccionado = (id) => {
  const elemento = document.createElement("div");
  elemento.classList.add("card--emergente");
  const { arrayProductos } = productoServicio;
  arrayProductos.forEach((producto) => {
    if (producto.id == id) {
      const { id, nombre, img, alt, precio, categoria, tamano, descripcion } = producto;

      const contenido = `
      <div class="card--emergente flex" id="${id}">
          <div class="emergente--container flex">
            <img
              class="emergente--img"
              src="${img}"
              alt="${alt}"
            />
            <div class="emergente--div flex">
              <p class="emergente--titulo p5">${nombre} </p>
              <p class="emergente--descrip p4">${descripcion} </p>
              <div class="emergente--div--interno flex">
                <p class="emergente--categoria flex p4">CATEGORIA&nbsp;:&nbsp;&nbsp;<span> ${categoria}</span></p>
                <p class="emergente--tam flex p4">TAMAÑO&nbsp;:&nbsp;&nbsp; <span>${tamano} </span></p>
                <p class="emergente--precio flex p4">PRECIO&nbsp;:&nbsp;&nbsp; <span>${precio} </span></p>
              </div>
            </div>
            <button class="emergente--salir flex">
              <svg
                class="salir--interior"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      `;
      elemento.innerHTML = contenido;
      seleccionado.appendChild(elemento);
      emergente();
    }
  });
};

export const render = (selector) => {
  limpiar(cardContainer);
  selector.forEach((elemento) => {
    cardContainer.appendChild(
      mostrarProducto(
        elemento.id,
        elemento.nombre,
        elemento.img,
        elemento.alt,
        elemento.precio,
        elemento.categoria,
        elemento.tamano
      )
    );
  });
};

const descripcion = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("card")) {
    const seleccionado = e.target.closest("a");
    mostrarSeleccionado(seleccionado.id);
  }
};

function emergente() {
  img = document.querySelector(".emergente--img");
  div = document.querySelector(".emergente--div");
  cerrar(img, div);
  setTimeout(() => {
    img.classList.add("emergente");
    div.classList.add("emergente");
  }, 10);
}

function cerrar() {
  salirBtn = document.querySelector(".emergente--salir");
  card = document.querySelector(".card--emergente");
  // salirBtn.addEventListener("click", salir);
  card.addEventListener("click", salir);
}

function salir() {
  const emerger = document.querySelector(".emergente--container");
  emerger.classList.add("emergente--ocultar");
  img.classList.add("emergente--ocultar");
  div.classList.add("emergente--ocultar");
  setTimeout(() => {
    card.remove();
  }, 250);
}

function limpiar(borrar) {
  borrar.innerHTML = "";
}

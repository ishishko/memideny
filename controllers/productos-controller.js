import { productoServicio } from "../services/productos-servicios.js";

const mostrarProducto = (nombre, img, alt, precio, categoria, tamano) => {
  const card = document.createElement("div");
  const contenido = `
  <div class="card--img--div flex">
    <img  src="${img}"  alt=" ${alt} " class="card--img" />
  </div>
  <p class="card--titulo p1"> ${nombre} </p>
  <div class=" card--categoria--div flex">
    <p class="card--categoria p6">Categ.: ${categoria}</p>
    <p class="card--categoria p6">Tam.: ${tamano}</p>
  </div>
  <p class="card--precio p4">PRECIO: ${precio} </p>
  `;
  card.innerHTML = contenido;
  card.classList.add("card--item", "flex");
  return card;
};

export const render = async () => {
  try {
    const listaProductos = await productoServicio.arrayProductos;
    const cardContainer = document.querySelector(".card--container");
    limpiar();
    listaProductos.forEach((elemento) => {
      cardContainer.appendChild(
        mostrarProducto(
          elemento.nombre,
          elemento.img,
          elemento.alt,
          elemento.precio,
          elemento.categoria,
          elemento.tamano
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

function limpiar() {
  const selectorCards = document.querySelector(".card--container");
  selectorCards.innerHTML = "";
}

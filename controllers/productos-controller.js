import { productoServicio } from "../services/productos-servicios.js";

const nuevoProducto = (nombre, img, alt, precio, categoria, tamano) => {
  const card = document.createElement("div");
  const contenido = `
  <div class="card--img--div flex">
    <img  src="${img}"  alt=" ${alt} " class="card--img" />
  </div>
  <p class="card--titulo p1"> ${nombre} </p>
  <p class="card--precio p4">PRECIO: ${precio} </p>
  <div class=" card--categoria--div flex">
    <p class="card--categoria p4">Categoria: ${categoria} </p>
    <p class="card--categoria p4"> ${tamano} </p>
  </div>
            `;
  card.innerHTML = contenido;
  card.classList.add("card--item", "flex");
  return card;
};

const cardContainer = document.querySelector(".card--container");
console.log(cardContainer);

export const render = async () => {
  try {
    const listaProductos = await productoServicio.listaProductos();
    listaProductos.forEach((elemento) => {
      cardContainer.appendChild(
        nuevoProducto(
          elemento.nombre,
          elemento.img,
          elemento.alt,
          elemento.precio,
          elemento.categoria,
          elemento.minimalista
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

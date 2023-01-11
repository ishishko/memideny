import { productoServicio } from "./productos-servicios.js";

const input = document.querySelector(".input");
let productos = [];

setTimeout(() => {
  productos = productoServicio.arrayProductos;
  console.log(productos);
}, 1500);

export default function buscando() {
  //   console.log(input.value);
  //   console.log("estamos bien");
  productos.forEach((producto) => {
    const { categoria, id, nombre, descripcion } = producto;
    if (!categoria.includes(input.value)) {
      console.log("esta");
      if (document.getElementById(id)) {
        document.getElementById(id).remove();
      }
    }
  });
}

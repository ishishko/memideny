import { render } from "./productos-controller.js";
import { productoServicio } from "./productos-servicios.js";

const input = document.querySelector(".input");
let valor = "";
let productos = [];

setTimeout(() => {
  productos = productoServicio.arrayProductos;
}, 1500);

export default function buscando() {
  valor = input.value;
  valor = valor.toLowerCase();
  render(productos);
  productos.forEach((producto) => {
    let { categoria, id, nombre, descripcion } = producto;
    categoria = categoria.toLowerCase();
    nombre = nombre.toLowerCase();
    descripcion = descripcion.toLowerCase();
    if (!categoria.includes(valor) && !nombre.includes(valor) && !descripcion.includes(valor)) {
      console.log("esta");
      if (document.getElementById(id)) {
        console.log("BORRANDO");
        document.getElementById(id).remove();
      }
    }
  });
}

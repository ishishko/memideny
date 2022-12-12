import { render } from "../controllers/productos-controller.js";
import { productoServicio } from "../controllers/productos-servicios.js";

export default function navegadorUI() {
  const navInicio = document.querySelector(".nav__inicio");
  const navProductos = document.querySelector(".nav__productos");
  const navQuienes = document.querySelector(".nav__somos");
  const navContacto = document.querySelector(".nav__contacto");

  const slider = document.querySelector(".slider--container");
  const productos = document.querySelector(".productos--container");
  const quienes = document.querySelector(".quienes--container");
  const contacto = document.querySelector(".footer--container");
  let arrayProductos = [];
  setTimeout(() => {
    arrayProductos = productoServicio.arrayProductos;
  }, 1500);

  navInicio.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(slider, productos, quienes, contacto);
  });

  navProductos.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(productos, slider, quienes, contacto);
    render(arrayProductos);
  });

  navQuienes.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(quienes, productos, slider, contacto);
  });
  navContacto.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(contacto, quienes, productos, slider);
  });
}

function ocultar(ver, bloquear1, bloquear2, bloquear3) {
  if (ver.classList.contains("ocultar") || ver.classList.contains("ocultar2")) {
    ver.classList.remove("ocultar");
    ver.classList.remove("ocultar2");
    setTimeout(() => {
      ver.classList.add("visible");
    }, 250);
  }
  if (!bloquear1.classList.contains("ocultar2")) {
    bloquear1.classList.add("ocultar");
    setTimeout(() => {
      bloquear1.classList.add("ocultar2");
      bloquear1.classList.remove("visible");
    }, 250);
  }
  if (!bloquear2.classList.contains("ocultar2")) {
    bloquear2.classList.add("ocultar");
    setTimeout(() => {
      bloquear2.classList.add("ocultar2");
      bloquear2.classList.remove("visible");
    }, 250);
  }
  if (!bloquear3.classList.contains("ocultar2")) {
    bloquear3.classList.add("ocultar");
    setTimeout(() => {
      bloquear3.classList.add("ocultar2");
      bloquear3.classList.remove("visible");
    }, 250);
  }
}

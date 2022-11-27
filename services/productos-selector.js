const slider = document.querySelector(".slider--container");
const productos = document.querySelector(".productos--container");
const quienes = document.querySelector(".quienes--container");
const contacto = document.querySelector(".footer--container");

const letrasN = document.querySelector(".nav__letras");
const paperN = document.querySelector(".nav__paper");
const boxcN = document.querySelector(".nav__boxc");
const boxaN = document.querySelector(".nav__boxa");
const boxiN = document.querySelector(".nav__boxi");
const boxtN = document.querySelector(".nav__boxt");
const decoN = document.querySelector(".nav__deco");

const letrasP = document.querySelector(".producto__li1");
const paperP = document.querySelector(".producto__li2");
const boxcP = document.querySelector(".producto__li3");
const boxaP = document.querySelector(".producto__li4");
const boxiP = document.querySelector(".producto__li5");
const boxtP = document.querySelector(".producto__li6");
const decoP = document.querySelector(".producto__li7");

export default function productoUI() {
  letrasN.addEventListener("click", letras);
  letrasP.addEventListener("click", letras);

  paperN.addEventListener("click", paper);
  paperP.addEventListener("click", paper);

  boxcN.addEventListener("click", boxc);
  boxcP.addEventListener("click", boxc);

  boxaN.addEventListener("click", boxa);
  boxaP.addEventListener("click", boxa);

  boxiN.addEventListener("click", boxi);
  boxiP.addEventListener("click", boxi);

  boxtN.addEventListener("click", boxt);
  boxtP.addEventListener("click", boxt);

  decoN.addEventListener("click", deco);
  decoP.addEventListener("click", deco);
}

function letras(e) {
  e.preventDefault();
  selectProductos();
}

function paper(e) {
  e.preventDefault();
  selectProductos();
}
function boxc(e) {
  e.preventDefault();
  selectProductos();
}
function boxa(e) {
  e.preventDefault();
  selectProductos();
}
function boxi(e) {
  e.preventDefault();
  selectProductos();
}
function boxt(e) {
  e.preventDefault();
  selectProductos();
}
function deco(e) {
  e.preventDefault();
  selectProductos();
}

function selectProductos() {
  if (productos.classList.contains("ocultar2")) {
    vistaProductos();
  }
}

function vistaProductos() {
  productos.classList.remove("ocultar");
  productos.classList.remove("ocultar2");
  slider.classList.add("ocultar");
  quienes.classList.add("ocultar");
  contacto.classList.add("ocultar");
  setTimeout(() => {
    productos.classList.add("visible");
    slider.classList.remove("visible");
    quienes.classList.remove("visible");
    contacto.classList.remove("visible");
    slider.classList.add("ocultar2");
    quienes.classList.add("ocultar2");
    contacto.classList.add("ocultar2");
  }, 250);
}

export const movil = document.querySelector("html");

const logo = document.querySelector(".header--logo");
const menu = document.querySelector(".header--menu");
const inputcheck = document.querySelector("#check");
const check = document.querySelector(".bar");
const nav = document.querySelector(".header--container--nav");

const buscador = document.querySelector(".header--buscador");
const inicio = document.querySelector(".header--li__1");
const productos = document.querySelector(".header--li__2");
const quienes = document.querySelector(".header--li__3");
const contacto = document.querySelector(".header--li__4");
let error = 0;
let mostrarLogo = true;
let selec = [];

export function btncheck() {
  check.addEventListener("click", cargarMenu);
}

//Funcion de eventos pantalla chica
export function menuNav() {
  inicio.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(inicio, buscador, productos, quienes, contacto);
    inputcheck.checked = false;
  });
  buscador.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(buscador, inicio, productos, quienes, contacto);
    setTimeout(() => {
      document.querySelector(".mostrar__nav").classList.remove("mostrar__nav");
      buscador.classList.add("buscador__top");
    }, 150);
    inputcheck.checked = false;
  });
  productos.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(productos, inicio, buscador, quienes, contacto);
    inputcheck.checked = false;
  });
  quienes.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(quienes, inicio, buscador, productos, contacto);
    inputcheck.checked = false;
  });
  contacto.addEventListener("click", (e) => {
    e.preventDefault();
    ocultar(contacto, inicio, buscador, productos, quienes);
    inputcheck.checked = false;
  });
}

//Deja solo visible el menu seleccionado
function ocultar(ver, bloquear1, bloquear2, bloquear3, bloquear4) {
  mostrarLogo = false;
  selec = [ver, bloquear1, bloquear2, bloquear3, bloquear4];
  ver.classList.remove("ocultar", "ocultar2");
  bloquear1.classList.add("ocultar");
  bloquear2.classList.add("ocultar");
  bloquear3.classList.add("ocultar");
  bloquear4.classList.add("ocultar");
  setTimeout(() => {
    bloquear1.classList.add("ocultar2");
    bloquear2.classList.add("ocultar2");
    bloquear3.classList.add("ocultar2");
    bloquear4.classList.add("ocultar2");
    menu.classList.remove("mostar__menu__h");
    menu.classList.add("mostrar__nav");
    check.classList.remove("menu--btn__medio");
  }, 150);
}

//muestra el munu principal una ves elegido un item
function cargarMenu() {
  if (!mostrarLogo) {
    if (error === 0) {
      error++;
      if (!inputcheck.checked) {
        menuPrincipal();
        check.classList.add("menu--btn__medio");
      } else {
        if (!document.querySelector(".header--buscador").classList.contains("buscador__top")) {
          document.querySelector(".header--buscador").classList.add("buscador__top");
        }
        ocultar(selec[0], selec[1], selec[2], selec[3], selec[4]);
      }
    } else {
      error = 0;
    }
  } else {
    menuInicial();
  }
}

function menuPrincipal() {
  const mostrar = [quienes, inicio, buscador, productos, contacto];
  if (document.querySelector(".buscador__top")) {
    document.querySelector(".buscador__top").classList.remove("buscador__top");
  }
  mostrar.forEach((item) => {
    if (item.classList.contains("ocultar")) {
      item.classList.remove("ocultar2");
      setTimeout(() => {
        item.classList.remove("ocultar");
      }, 150);
    }
    menu.classList.add("mostar__menu__h");
  });
  /*if (!inputcheck.checked) {
    if (error === 0) {
      ocultar(selec[0], selec[1], selec[2], selec[3], selec[4]);
      error++;
      return;
    } else {
      error = 0;
    }
  }*/
}

function menuInicial() {
  if (error === 0) {
    if (!menu.classList.contains("mostar__menu__w")) {
      mostraMenu();
      error++;
      return;
    } else {
      ocultarMenu();
      error++;
    }
  } else {
    error = 0;
  }
}

//despliega el menu inicial desde boton menu
function mostraMenu() {
  logo.classList.add("oculta__w");
  menu.classList.add("mostar__menu__w");
  setTimeout(() => {
    check.classList.add("menu--btn__medio");
    logo.classList.add("ocultar2");
    menu.classList.add("mostar__menu__h");
  }, 200);
  setTimeout(() => {
    buscador.classList.add("mostrar");
    nav.classList.add("mostrar__nav");
  }, 300);
}

//oculta el menu inicial
function ocultarMenu() {
  setTimeout(() => {
    buscador.classList.remove("mostrar");
    nav.classList.remove("mostrar__nav");
    logo.classList.remove("ocultar2");
    menu.classList.remove("mostar__menu__h");
  }, 200);
  setTimeout(() => {
    check.classList.remove("menu--btn__medio");
    logo.classList.remove("oculta__w");
    menu.classList.remove("mostar__menu__w");
  }, 300);
}

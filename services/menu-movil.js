export const movil = document.querySelector("html");

const logo = document.querySelector(".header--logo");
const menu = document.querySelector(".header--menu");
const check = document.querySelector(".bar");
const buscador = document.querySelector(".header--buscador");
const nav = document.querySelector(".header--container--nav");
const li1 = document.querySelector(".header--li__1");
const li2 = document.querySelector(".header--li__2");
const li3 = document.querySelector(".header--li__3");
const li4 = document.querySelector(".header--li__4");
let error = 0;

export function btncheck() {
  check.addEventListener("click", () => {
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
    console.log(error);
  });
}

function mostraMenu() {
  logo.classList.add("oculta__w");
  menu.classList.add("mostar__menu__w");
  setTimeout(() => {
    logo.classList.add("ocultar2");
    menu.classList.add("mostar__menu__h");
  }, 200);
  setTimeout(() => {
    buscador.classList.add("mostrar");
    nav.classList.add("mostrar__nav");
  }, 300);
}

function ocultarMenu() {
  setTimeout(() => {
    buscador.classList.remove("mostrar");
    nav.classList.remove("mostrar__nav");
    logo.classList.remove("ocultar2");
    menu.classList.remove("mostar__menu__h");
  }, 200);
  setTimeout(() => {
    logo.classList.remove("oculta__w");
    menu.classList.remove("mostar__menu__w");
  }, 300);
}

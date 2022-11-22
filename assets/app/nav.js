export default function navegador() {
  const inicio = document.querySelector(".nav__inicio");
  const productos = document.querySelector(".nav__productos");
  const somos = document.querySelector(".nav__somos");
  const contacto = document.querySelector(".nav__contacto");
  const info = document.querySelector(".nav__info");

  inicio.addEventListener("click", () => location.reload());

  productos.addEventListener("click", (e) => {
    e.preventDefault();
    const slider = document.querySelector(".slider--container");
    slider.classList.add("ocultar");
  });

  somos.addEventListener("click", () => console.log("hice click"));
  contacto.addEventListener("click", () => console.log("hice click"));
  info.addEventListener("click", () => console.log("hice click"));
}

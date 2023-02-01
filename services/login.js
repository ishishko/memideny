import { loginData } from "../controllers/productos-servicios.js";

const btnLogin = document.querySelector(".button--usuario");
const loginSection = document.querySelector(".section--login");
const productoSection = document.querySelector(".section--productos");
let datosLogin = {};

if (localStorage.getItem("logueado")) {
  if (localStorage.getItem("logueado") == "true") {
    loginSection.classList.add("ocultar2");
    productoSection.classList.remove("ocultar2");
  }
}

export default function login() {
  setTimeout(() => {
    datosLogin = loginData;
  }, 1500);
  btnLogin.addEventListener("click", verificar);
}

function verificar() {
  const usuarioValue = document.querySelector(".input--usuario__user").value;
  const contrasenaValue = document.querySelector(".input--usuario__pass").value;
  if (usuarioValue === datosLogin.usuario && contrasenaValue === datosLogin.contrasena) {
    loginSection.classList.add("ocultar2");
    productoSection.classList.remove("ocultar2");
    localStorage.setItem("logueado", "true");
    console.log(localStorage.getItem("logueado"));
  }
}

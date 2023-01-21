const btnLogin = document.querySelector(".button--usuario");

export default function login() {
  btnLogin.addEventListener("click", () => {
    document.querySelector(".section--login").classList.add("ocultar2");
  });
}

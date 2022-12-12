spinCarga();

export function spinCarga() {
  const body = document.querySelector("body");
  const divSpin = document.createElement("div");
  divSpin.classList.add("loader-3");
  divSpin.innerHTML = `
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>`;
  body.appendChild(divSpin);
}

export default function cargaTerminada() {
  const spinner = document.querySelector(".loader-3");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  setTimeout(() => {
    header.classList.add("opacity");
    main.classList.add("opacity");
    footer.classList.add("opacity");
    spinner.remove();
  }, 1500);
}

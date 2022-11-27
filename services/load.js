spinCarga();

function spinCarga() {
  const body = document.querySelector("body");
  const divSpin = document.createElement("div");
  divSpin.classList.add("sk-circle");
  divSpin.innerHTML = `<div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>`;
  body.appendChild(divSpin);
}

export default function cargaTerminada() {
  const spinner = document.querySelector(".sk-circle");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  setTimeout(() => {
    header.classList.add("opacity");
    main.classList.add("opacity");
    footer.classList.add("opacity");
    spinner.remove();
  }, 1000);
}

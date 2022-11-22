import cargaTerminada from "./load.js";
import navegador from "./nav.js";

window.onload = () => events();

function events() {
  cargaTerminada();
  navegador();
}

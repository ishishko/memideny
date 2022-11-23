import cargaTerminada from "./load.js";
import navegadorUI from "./nav.js";

window.onload = () => events();

function events() {
  cargaTerminada();
  navegadorUI();
}

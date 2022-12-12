// import { db } from "../controllers/firebase.js";
import cargaTerminada from "./load.js";
import navegadorUI from "./nav.js";
import productoUI from "./productos-selector.js";

window.onload = () => events();

function events() {
  cargaTerminada();
  navegadorUI();
  productoUI();
}

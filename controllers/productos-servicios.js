import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  get,
  set,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCT_J8vxLS2jLSkAFWlPz-tN0M_dqq5e6o",
  authDomain: "memideny-1.firebaseapp.com",
  databaseURL: "https://memideny-1-default-rtdb.firebaseio.com",
  projectId: "memideny-1",
  storageBucket: "memideny-1.appspot.com",
  messagingSenderId: "673089789204",
  appId: "1:673089789204:web:c5c31983dbcf31694b7601",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const codigo = 123456555;
let listaProductos = [];
let arrayProductos = arrayCategoria("");
let arrayLetras = arrayCategoria("LETRAS 3D");
let arrayPapercraft = arrayCategoria("PAPERCRAFT");
let arrayBoxc = arrayCategoria("BOX CLASICO");
let arrayBoxa = arrayCategoria("BOX ACETATO");
let arrayBoxi = arrayCategoria("BOX INTERACTIVO");
let arrayBoxt = arrayCategoria("BOX TEMATICO");
let arrayDeco = arrayCategoria("DECORACIONES");

const getDB = () => {
  const dbref = ref(db);
  get(child(dbref, "producto/"))
    .then((productos) => {
      if (productos.exists()) {
        productos.forEach((producto) => {
          listaProductos.push(producto.val());
        });
      }
    })
    .then(() => {
      arrayProductos = arrayCategoria("");
      arrayLetras = arrayCategoria("LETRAS 3D");
      arrayPapercraft = arrayCategoria("PAPERCRAFT");
      arrayBoxc = arrayCategoria("BOX CLASICO");
      arrayBoxa = arrayCategoria("BOX ACETATO");
      arrayBoxi = arrayCategoria("BOX INTERACTIVO");
      arrayBoxt = arrayCategoria("BOX TEMATICO");
      arrayDeco = arrayCategoria("DECORACIONES");
      productoServicio = {
        arrayProductos,
        arrayLetras,
        arrayPapercraft,
        arrayBoxc,
        arrayBoxa,
        arrayBoxi,
        arrayBoxt,
        arrayDeco,
      };
    })
    .catch((error) => console.log(error));
};

const insertDB = () => {
  set(ref(db, "producto/" + codigo), {
    nombre: "3D SIMPLE mas",
    img: "https://static.wixstatic.com/media/dabb89_cb3ad1483f284dadb9cee540f0eb7788~mv2.jpg/v1/fill/w_764,h_764,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/dabb89_cb3ad1483f284dadb9cee540f0eb7788~mv2.jpg",
    alt: "imagen 3D Simple",
    precio: "15 usd",
    categoria: "LETRAS 3D",
    tamano: "14CM",
    descripcion: "Letras 3D Nombre completo o Inicial. En Papel 150gr hasta 2 capas con Impresion",
  });
  //   .them(() => alert("Datos Cargados"))
  //   .catch((error) => alert(error));
  // return set();
};

const updateData = (codigo) => {
  update(ref(db, "producto/" + codigo), {
    nombre: "3d Simple",
  });
};

const removeData = (codigo) => {
  remove(ref(db, "producto/" + codigo));
};

getDB();

export let productoServicio = {
  arrayProductos,
  arrayLetras,
  arrayPapercraft,
  arrayBoxc,
  arrayBoxa,
  arrayBoxi,
  arrayBoxt,
  arrayDeco,
};

function arrayCategoria(categoria) {
  let resultado = [];
  if (categoria === "") {
    listaProductos.forEach((producto) => {
      resultado.push(producto);
    });
    return resultado;
  }
  listaProductos.forEach((producto) => {
    if (producto.categoria == categoria) {
      resultado.push(producto);
    }
  });

  return resultado;
}

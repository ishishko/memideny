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

const edicion = document.querySelector(".main--admin");
const secProductos = document.querySelector(".productos--admin");

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

const insertDB = (codigo) => {
  set(ref(db, "producto/" + codigo), {
    nombre: "3D SIMPLE mas",
    img: "https://static.wixstatic.com/media/dabb89_cb3ad1483f284dadb9cee540f0eb7788~mv2.jpg/v1/fill/w_764,h_764,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/dabb89_cb3ad1483f284dadb9cee540f0eb7788~mv2.jpg",
    alt: "imagen 3D Simple",
    precio: "15 usd",
    categoria: "LETRAS 3D",
    tamano: "14CM",
    descripcion: "Letras 3D Nombre completo o Inicial. En Papel 150gr hasta 2 capas con Impresion",
  });
};

let updateData = (codigo, producto) => {
  const { alt, categoria, descripcion, id, img, nombre, precio, tamano } = producto;

  update(ref(db, "producto/" + codigo), {
    alt,
    categoria,
    descripcion,
    id,
    img,
    nombre,
    precio,
    tamano,
  })
    .then(() => alert("datos guardados"))
    .then(() => location.reload());
};

export const removeData = (codigo) => {
  remove(ref(db, "producto/" + codigo));
};

export default function editarEmergente(producto) {
  const { alt, categoria, descripcion, id, img, nombre, precio, tamano } = producto;

  const editar = document.createElement("div");
  editar.classList.add("admin-emergente");
  editar.classList.add("flex");

  editar.innerHTML = `<div class="card--admin--emergente flex" id="${id}">
    <div class="emergente--container flex">
        <div class="div--emergente--imagen flex">
            <img
                class="emergente--img"
                src="${img}"
                alt="${alt}"
            />
            <p class="p6">URL Imagen <input class="img--valor img--url" type="text" value="${img}" /></p>
            <p class="p6">ALT Imagen <input class="img--valor img--alt" type="text" value="${alt}" /></p>
        </div>
      <div class="emergente--div flex">
        <p class="emergente--titulo flex p5">TITULO <input class="editar--nombre" value="${nombre}" />  </p>
        <p class="emergente--descrip flex p4">Descripcion
        <textarea name="" id="descripcion" cols="45" rows="4" >${descripcion}</textarea>
        </p>
        <div class="emergente--div--interno flex">
          <p class="emergente--categoria flex p4">CATEGORIA&nbsp;:&nbsp;&nbsp;<input class="editar--categoria" type="text" value="${categoria}"/></p>
          <p class="emergente--tam flex p4">TAMAÑO&nbsp;:&nbsp;&nbsp; <input class="editar--tamano" type="text" value="${tamano}" /></p>
          <p class="emergente--precio flex p4">PRECIO&nbsp;:&nbsp;&nbsp; <input class="editar--precio" type="text" value="${precio}" /></p>
        </div>
      </div>
      <button class="editar--guardar p4 flex">
        GUARDAR
      </button>
      <button class="editar--cancelar p4 flex">
        CANCELAR
      </button>
    </div>
    </div>`;
  edicion.appendChild(editar);
  document.querySelector(".editar--guardar").addEventListener("click", guardar);
  document.querySelector(".editar--cancelar").addEventListener("click", cancelar);
}

function guardar() {
  const id = document.querySelector(".card--admin--emergente").id;
  const img = document.querySelector(".img--url").value;
  const alt = document.querySelector(".img--alt").value;
  const nombre = document.querySelector(".editar--nombre").value;
  const descripcion = document.querySelector("#descripcion").value;
  const categoria = document.querySelector(".editar--categoria").value;
  const tamano = document.querySelector(".editar--tamano").value;
  const precio = document.querySelector(".editar--precio").value;

  const producto = {
    id,
    img,
    alt,
    nombre,
    descripcion,
    categoria,
    tamano,
    precio,
  };
  updateData(producto.id, producto);
}

function cancelar() {
  const eliminar = document.querySelector(".admin-emergente");
  eliminar.remove();
}

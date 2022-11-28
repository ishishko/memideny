const url = "http://localhost:3000/producto";

const listaProductos = () => fetch(url).then((respuesta) => respuesta.json());

const arrayProductos = listaProductos();

export const productoServicio = {
  arrayProductos,
};

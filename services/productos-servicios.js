const url = "http://localhost:3000/producto";

const listaProductos = () => fetch(url).then((respuesta) => respuesta.json());

const arrayProductos = arrayCategoria("");

const arrayLetras = arrayCategoria("LETRAS 3D");
const arrayPapercraft = arrayCategoria("PAPERCRAFT");
const arrayBoxc = arrayCategoria("BOX CLASICO");
const arrayBoxa = arrayCategoria("BOX ACETATO");
const arrayBoxi = arrayCategoria("BOX INTERACTIVO");
const arrayBoxt = arrayCategoria("BOX TEMATICO");
const arrayDeco = arrayCategoria("DECORACIONES");

export const productoServicio = {
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
  listaProductos().then((productos) => {
    if (categoria === "") {
      productos.forEach((producto) => {
        resultado.push(producto);
      });
      return resultado;
    }

    productos.forEach((producto) => {
      if (producto.categoria == categoria) {
        resultado.push(producto);
      }
    });
  });
  return resultado;
}

//Constantes Globales
const cabeceraTop = document.getElementById("cabeceraTop");
const mainBody = document.getElementById("mainBody");
const cabeceraMid = document.getElementById("cabeceraMid");
const logoCompleto = document.getElementById("logoCompleto");
const footer = document.getElementById("footer");

const anchoMaximoDelMapa = 1150;

//Variables Globales

let anchoWindow = window.innerWidth;

//Funciones

function iniciar() {
  addEventListener("scroll", cabeceraTopEvent);
}

function cabeceraTopEvent() {
  let h = window.scrollY;

  if (h < 10) {
    cabeceraTopShow();
  } else if (h > 50) {
    cabeceraTopHide();
  } else {
  }
}

function cabeceraTopHide() {
  cabeceraTop.style.height = "0px";
  logoCompleto.style.padding = "4px 0";
  logoCompleto.style.height = "54px";
  cabeceraMid.style.backgroundColor = "#252950";

  iniciar();
}
function cabeceraTopShow() {
  cabeceraTop.style.height = "30px";
  logoCompleto.style.padding = "8px 0";
  logoCompleto.style.height = "76px";
  cabeceraMid.style.backgroundColor = "#252950de";

  iniciar();
}

function redimensionarImagenes() {
  let anchoPantalla = window.innerWidth;

  // Selecciona todas las imágenes que deseas redimensionar
  const imagenes = document.querySelectorAll(".imagenDinamica");
  const tarjetaComunNinja = document.querySelectorAll(".tarjetaComunNinja");

  if (anchoPantalla > anchoMaximoDelMapa) {
    anchoPantalla = anchoMaximoDelMapa - 450;
  }
  // Ajusta el tamaño de las imágenes según el ancho de la pantalla
  imagenes.forEach((imagen) => {
    // Por ejemplo, reduce el tamaño al 80% del ancho de la pantalla
    imagen.style.width = `${anchoPantalla * 0.3}px`;
  });
  tarjetaComunNinja.forEach((tarjetaComunNinja) => {
    // Por ejemplo, reduce el tamaño al 80% del ancho de la pantalla
    tarjetaComunNinja.style.width = `${anchoPantalla * 0.3}px`;
  });
}

window.addEventListener("load", iniciar);

//Constantes Globales
const cabeceraTop = document.getElementById("cabeceraTop")
const iconosSocialWrap = document.getElementById("iconosSocialWrap")
const mainBody = document.getElementById("mainBody")
const cabeceraMid = document.getElementById("cabeceraMid")
const logoCompleto = document.getElementById("logoCompleto")
const footer = document.getElementById("footer")

//Variables Globales




//Funciones

function iniciar() {


    addEventListener("scroll", cabeceraTopEvent)

}

function cabeceraTopEvent () {
    let h = window.scrollY;

    if (h < 10) {
        cabeceraTopShow();
    }
    else if (h > 50) {
        cabeceraTopHide();
    }
    else{

    }

}

function cabeceraTopHide () {
    
        cabeceraTop.style.height = "0px"
        logoCompleto.style.padding = "4px 0";
        logoCompleto.style.height = "54px";
        cabeceraMid.style.backgroundColor = "#252950"
    
    iniciar () 

}function cabeceraTopShow () {
      
    cabeceraTop.style.height = "30px"
    logoCompleto.style.padding = "8px 0";
    logoCompleto.style.height = "76px";
    cabeceraMid.style.backgroundColor = "#252950de"


    iniciar () 

}


window.addEventListener("load", iniciar)
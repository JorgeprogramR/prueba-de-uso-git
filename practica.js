import { barcelona, roma, paris, londres } from "./ciudades.js";

// obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento =document.getElementById('parrafo');
let precioElemento = document.getElementById('precio')


// Agregar un evento click al cada enlace

enlaces.forEach(function (enlace){
    enlace.addEventListener ('click', function(){
    // remover active  
    enlaces.forEach(function(enlace){
        enlace.classList.remove('active');
    })
    // Agregar el active al que corresponda
    this.classList.add('active')
    // obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
    })
    

    // traer la informacion del objeto correspondiente a la eleccion 

    // Mostrar el contenido en el Dom
});


// funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    }
    return contenido[enlace]
}

// /* 5:44:00 */               
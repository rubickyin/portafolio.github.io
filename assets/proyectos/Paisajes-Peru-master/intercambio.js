import { machu, lago, laguna, colores } from './descrip.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('li')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let imagenElemento = document.getElementById('imagen')

// Agregar un evento click a cada enlace 
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //Remover activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //Agregar active al que corresponda
        this.classList.add('active')

        //Traer la información del objeto correspondiendo a la elección
        let contenido = obtenerContenido(this.textContent)
        
        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        imagenElemento.innerHTML = contenido.imagen
    });
});

//Función para traer la información correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'MACHU PICCHU' : machu, 
        'LAGO TITICACA' : lago, 
        'LAGUNA HUMANTAY' : laguna, 
        'MONATAÑA 7 COLORES' : colores
    };
    return contenido[enlace];
}
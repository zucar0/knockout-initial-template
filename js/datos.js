// Se va a crear la función autoejecutable y se va a mandar como parámetro window.jjApp
(function(jjApp){
    'use strict'
    // Simulamos la recepción de una colección de elementos
    var arreglo = [{
        id: 1,
        numero: 1,
        nombre: 'Luis Malagón',
        posicion: 'Portero'
    },{
        id: 2,
        numero: 30,
        nombre: 'Rodolfo Cota',
        posicion: 'Portero'
    },{
        id: 3,
        numero: 40,
        nombre: 'Jonathan Estrada',
        posicion: 'Portero'
    },{
        id: 4,
        numero: 4,
        nombre: 'Sebastián Cáceres',
        posicion: 'Defensa'
    },{
        id: 5,
        numero: 29,
        nombre: 'Ramón Juárez',
        posicion: 'Defensa'
    },{
        id: 6,
        numero: 14,
        nombre: 'Néstor Araujo',
        posicion: 'Defensa'
    },{
        id: 7,
        numero: 18,
        nombre: 'Cristian Calderón',
        posicion: 'Defensa'
    },{
        id: 8,
        numero: 5,
        nombre: 'Kevín Álvarez',
        posicion: 'Defensa'
    },{
        id: 9,
        numero: 3,
        nombre: 'Israel Reyes',
        posicion: 'Defensa'
    },{
        id: 10,
        numero: 23,
        nombre: 'Emilio Lara',
        posicion: 'Defensa'
    },{
        id: 11,
        numero: 44,
        nombre: 'Iván Rodríguez',
        posicion: 'Medio'
    },{
        id: 12,
        numero: 6,
        nombre: 'Jonathan Dos Santos',
        posicion: 'Medio'
    },{
        id: 13,
        numero: 16,
        nombre: 'Santiago Naveda',
        posicion: 'Medio'
    },{
        id: 14,
        numero: 8,
        nombre: 'Álvaro Fidalgo',
        posicion: 'Medio'
    },{
        id: 15,
        numero: 20,
        nombre: 'Richard Sánchez',
        posicion: 'Medio'
    },{
        id: 16,
        numero: 90,
        nombre: 'ÉrickS Sánchez',
        posicion: 'Medio'
    },{
        id: 17,
        numero: 10,
        nombre: 'Diego Váldes',
        posicion: 'Medio'
    },{
        id: 18,
        numero: 7,
        nombre: 'Brian Rodríguez',
        posicion: 'Delantero'
    },{
        id: 19,
        numero: 17,
        nombre: 'Alejandro Zendejas',
        posicion: 'Delantero'
    },{
        id: 20,
        numero: 24,
        nombre: 'Javairô Dilrosu',
        posicion: 'Delantero'
    },{
        id: 21,
        numero: 21,
        nombre: 'Henry Martín',
        posicion: 'Delantero'
    },{
        id: 22,
        numero: 19,
        nombre: 'Illian Hernández',
        posicion: 'Delantero'
    }
]

//Se realiza una forma de exportación del arreglo para usarlo en el proyecto
jjApp.arreglo = arreglo;

}(window.jjApp)) 
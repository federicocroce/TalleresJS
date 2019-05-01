// const fn1 = () => console.log("fn1 se ejecuta dentro de la función 2");

// function fn1Cbk() {
//     console.log("fn1 se ejecuta dentro de la función 2");
// }

// function fn2(cbk) {
//     console.log("Antes de ejecutar el callback");
//     cbk && cbk();
//     console.log("Luego de ejecutar el callback");
// };

// fn2(fn1Cbk());

// fn2(function () { console.log("fn1 se ejecuta dentro de la función 2")});


// [1,2,3].map(function(ele){
//     console.log(ele);
// });



// const res = [1,2,3].filter(function(ele){
//     return ele > 2
// });

// console.log(res);


// function fn() {
//     return "Esto es un callback"
// }

// console.log(fn())

// function callbackTest(element){
//     console.log(element)
// }

// [1,2,3].forEach(function (element) {callbackTest(element)});



/**
 * 
Consigna: Crear una función (obtenerArrayPersonasNombresCompletos) que retorne un arreglo con los nombres completos de cada persona. la función obtenerArrayPersonasCompleta recibe como parámentros el array personas, un callback que obtiene el nombre y otro callback que obtiene el apellido.

EJ: obtenerArrayPersonasNombresCompletos(personas, obtenerNombre, obtenerApellido)  // [ 'Federico Croce', 'Pablo Radomski' ]
 */

const personas = [
    {
        nombre: "Federico",
        apellido: "Croce"
    },
    {
        nombre: "Pablo",
        apellido: "Radomski"
    }
]


function obtenerNombre(personaParam) {
    return personaParam.nombre
}

function obtenerApellido(personaParam) {
    return personaParam.apellido
}

function obtenerArrayPersonasNombresCompletos(arrayPersonas, cbObtenerNombre, cbObtenerApellido) {
    // let newArray = [];
    return arrayPersonas.map(function (persona) {
        return cbObtenerNombre(persona) + " " + cbObtenerApellido(persona)
    })
    // return newArray;
}


const  obtenerArrayPersonasNombresCompletos = (arrayPersonas, cbObtenerNombre, cbObtenerApellido) => 
arrayPersonas.map((persona) => cbObtenerNombre(persona) + " " + cbObtenerApellido(persona))



const resultado = obtenerArrayPersonasNombresCompletos(personas, obtenerNombre, obtenerApellido);


// console.log(resultado.join(" - "));



/** Una vez creado el arreglo personas:
 *
  const personas = [
    {
        nombre: "Federico",
        apellido: "Croce"
    },
    {
        nombre: "Pablo",
        apellido: "Radomski"
    }
];



*/

/************************************************************************************************** */

/** CLOUSURES */

// const personas = [
//     {
//         nombre: "Federico",
//         apellido: "Croce"
//     },
//     {
//         nombre: "Pablo",
//         apellido: "Radomski"
//     }
// ];

// function obtenerValorClousure(key) {
//     return function (obj) {
//         return obj[key]
//     }
// };


// function obtenerPersonaCompleta(arrayPersonas, cbObtenerNombre, cbObtenerApellido) {
//     let newArray = [];
//     arrayPersonas.map(function (persona) {
//         newArray.push(cbObtenerNombre(persona) + " " + cbObtenerApellido(persona))
//     })
//     return newArray;
// };


// console.log(obtenerPersonaCompleta(personas, obtenerValorClousure('nombre'), obtenerValorClousure('apellido')));



// const arrayPers = obtenerPersonaCompleta(personas, obtenerValorClousure('nombre'), obtenerValorClousure('apellido'))
// console.log(arrayPers.join(" - "))








function test(time) {
    setTimeout(function(){
        console.log("Fede")
    }, time)
}


console.log("Antes de llamar")
test(3000)
console.log("Luego de llamar")
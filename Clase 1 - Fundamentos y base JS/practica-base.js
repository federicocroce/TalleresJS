
// 1 - console.log de “Clase 1”;
console.log("Clase 1")

// 2- console.log de “Clase 1 Función” por medio de una función.
function fn2() {
    console.log("Clase 1 Función");
}
fn2();


// 3- Generar una función que retorne “Clase 1 return” y mostrarlo por consola.
function fn3() {
    return "Clase 1 return";
}
console.log(fn3());



// 4- Generar una función que reciba el parámetro “de JS”, que lo concatene “Clase 1” y que retorne el valor. Mostrarlo por consola.
function fn4(str) {
    return "Clase 1 " + str;
}
console.log(fn4("de JS"));


// 5- Convertir las  funciónes anteriores en arrow function.
const fnA2 = () => console.log("Clase 1 Arrow");
fnA2();

const fnA3 = () => "Clase 1 return Arrow";
console.log(fnA3());


const fnA4 = (str) => "Clase 1 " + str;
console.log(fnA4("de JS Arrow"));

/** Operaciones Aritméticas: */

// 1- Consigna. Operar con la variable resultado.

// sumar 10
// restar 4
// dividir 2;
// multiplicar 4;

// console.log(resultado);

let resultado = 0;
resultado = (10 - 4) / 2 * 4;
console.log(resultado)



// 2- Consigna - Con funciones

// sumar 10        
// restar 4
// dividir 2;
// multiplicar 4;

// console.log(resultadoF);
let resultadoF = 0;
const sumar = () =>  resultadoF += 10;
const restar = () => resultadoF -= 4;
const dividir = () => resultadoF /= 2;
const multiplicar = () => resultadoF *= 4;

sumar();
restar();
dividir();
multiplicar();
console.log(resultadoF)



// 3 - Consigna - Operación de dos variables como parámetros - Primer param el totalizador - Segundo param el valor aritmético.

// sumar 10        
// restar 4
// dividir 2;
// multiplicar 4;

// console.log(resultadoP);

let resultadoP = 0;

const sumarP = (res, value) =>  res += value;

function sumarFP(res, value){
   return res += value;
}
const restarP = (res, value) => res -= value;
const dividirP = (res, value) => res /= value;
const multiplicarP = (res, value) => res *= value;

resultadoP = sumarP(resultadoP, 10);
resultadoP = restarP(resultadoP, 4);
resultadoP = dividirP(resultadoP, 2);
resultadoP = multiplicarP(resultadoP, 4);


console.log(resultadoP);




//4 - Consigna - Repeticion

// Dado los números de 0 a 10 inclusive escribir por consola dicho número y si es par o impar:
// ej: El número 0 es par
//     El número 1 es impar

let resultadoFor = 0;

for (let index = 0; index < 11; index++) {
    const indexStr = "El número " + index;
    index % 2 == 0 ? console.log(indexStr + " es par") :  console.log(indexStr + " es impar") 
}



//     Flujo:

// 1 - Definir una función que reciba por parámetro el número del día y que devuelva el nombre del día. Escribirlo por consola.

//     Ejemplo: recibo: 0; retorno: “Lunes”;
// Ejemplo: recibo: 1; retorno: “Martes”;
// .
// .
// .





/** Por medio de index obtener el nombre del día */
const fn = value => {

    switch (value) {
        case 0:
            return "Lunes";
        case 1:
            return "Martes";
        case 2:
            return "Miercoles";
        case 3:
            return "Jueves";
        case 4:
            return "Viernes";
        case 5:
            return "Sabado";
        case 6:
            return "Domingo";
        default:
        return "Día fuera de rango";
    }
}

console.log(fn(1));
console.log(fn(4));
console.log(fn(-2));

/** Declaración: */

var a = "var Clase1 ";

let b = "let Clase 1";

const c = "const Clase 1";

/** */



/** Funciones (Anónimas, autoinvocadas)  y Arrow functions */

/** Función */
function fnTestNew() {
    console.log('fnTestNew');
};
fnTestNew();


/** Función asignada */
var fnTest = function () {
    console.log('fnTest');
};
fnTest();



/** Función anónima autoinvocada */

(function () {
    console.log('Esta función no tiene un nombre')
})()



(function algo (str) {
    console.log(str)
})("Auto");


( str => console.log(str))("Fede"); 


/** */

/** IF */

const testIf = true;

if(testIf) {
    console.log("if normal")
}
else{
    console.log("if normal es falso")
}

const testIfTernario = testIf ? "testIfTernario" : "testIfTernario es falso";
console.log(testIfTernario);

testIf && console.log("testIf simple");


const testVariable = testIf || "Esto es falso";

console.log(testVariable);




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




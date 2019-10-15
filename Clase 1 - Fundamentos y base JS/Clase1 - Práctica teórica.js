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





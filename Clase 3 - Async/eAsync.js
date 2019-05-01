function obtenerNombreDelDia(index) {
    const diasObject = { 0: "Lunes", 1: "Martes", 2: "Miércoles", 3: "Jueves", 4: "Viernes", 5: "Sábado", 6: "Domingo" };
    return new Promise(function (resolve, reject) {
 
        setTimeout(function () {
            if (diasObject[index]) {
                resolve(diasObject[index]);
            }
            else {
                reject("Rango de fecha inválido");
            };
        }, 1000)
 
    });
 };
 
 function esDiaDeSeamana(index) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(index >= 0 && index <= 4){
                resolve(" y es un día de semana")
            }
            else if(index == 5 || index <= 6){
                resolve(" y no es un día de semana")
            }
            else{
                reject("Rango de fecha inválido")
            }
        }, 1000)
 
    });
 };
 
 function convierteEnMayusculas(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(typeof(str) == "string"){
                resolve(str.toUpperCase())
            }
            else if(index == 5 || index <= 6){
                resolve("El parámetro no es un string")
            }
        }, 1000)
 
    });
 };
 
 const indexInicial = 5;
 
 Promise.all([obtenerNombreDelDia(indexInicial), esDiaDeSeamana(indexInicial)])
 .then(async function(resultado){
    resultadoFinal = await convierteEnMayusculas("El index " + indexInicial + " corresponde al " +  resultado[0] + resultado[1])
    console.log(resultadoFinal);
 }).catch(function(error){
    console.log(error);
 });


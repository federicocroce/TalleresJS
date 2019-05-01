

/** Crear una promesa simulando un servicio que devuelva el numbre del día al recibir por parámetro el número del día 
 *  Validar rango de fecha y determinar si es un día de semana o no con otra promesa.
 *  Convertir en Mayuscula con otra promesa.
 *  Mostrar: "El index " + {VALOR DE INDEX} + " corresponde al " + {NOMBRE DEL DÍA} + {ES O NO UN DÍA DE SEMANA}.
 */
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
            if (index >= 0 && index <= 4) {
                resolve(" y es un día de semana")
            }
            else if (index == 5 || index <= 6) {
                resolve(" y no es un día de semana")
            }
            else {
                reject("Rango de fecha inválido")
            }
        }, 1000)

    });
};

function convierteEnMausculas(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof (str) == "string") {
                resolve(str.toUpperCase())
            }
            else if (index == 5 || index <= 6) {
                reject("El parámetro no es un string")
            }
        }, 1000)

    });
};

const indexInicial = 6;

Promise.all([obtenerNombreDelDia(indexInicial), esDiaDeSeamana(indexInicial)])
    .then(function (resultado) {
        return convierteEnMausculas("El index " + indexInicial + " corresponde al " + resultado[0] + resultado[1])
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
    }).catch(function (error) {
        console.log(error)
    });

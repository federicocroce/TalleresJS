
/** Dado el arreglo primerAray generar una función que retorne el valor del index que recibe por parámetro: */
// const primerAray = ["Primer", "array", "que", "creamos"];

// const obtenerValor = index => index > 0 && index < primerAray.length ? primerAray[index] : "Rango incorrecto";

// console.log(obtenerValor(1));
// console.log(obtenerValor(10));
// console.log(obtenerValor(3));
// console.log(obtenerValor(4));
// console.log(obtenerValor(-1));






// 2 -


// const primerAray = ["Primer", "array", "que", "creamos"];

// const generarString = () => primerAray.join(" ");

// console.log(generarString()) 


// 3-

/** Unir todas las letras de su nombre con un - */
// console.log("Fede".join("-"));
// console.log("Fede")
// console.log([..."Fede"])
// console.log([..."Fede"].join("-"));

// const diasArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// const obtenerDiaArray = index => index > 0 && index < diasArray.length ? diasArray[index] : "Rango de día incorrecto";

// console.log(obtenerDiaArray(1));
// console.log(obtenerDiaArray(4));
// console.log(obtenerDiaArray(6));
// console.log(obtenerDiaArray(7));
// console.log(obtenerDiaArray(-5));



// /** Dado el objecto diasObject generar una función que retorne el nombre del día por medio del número - Validar si existe el dia: */
// const diasObject = { 0: "Lunes", 1: "Martes", 2: "Miércoles", 3: "Jueves", 4: "Viernes", 5: "Sábado", 6: "Domingo" };

// const obtenerDiaObject = key => key > 0 && key < Object.keys(diasObject).length ? diasObject[key] : "Rango de día incorrecto";


// console.log(obtenerDiaObject(1));
// console.log(obtenerDiaObject(4));
// console.log(obtenerDiaObject(6));
// console.log(obtenerDiaObject(7));
// console.log(obtenerDiaObject(-5));

// // console.log(Object.values(diasObject))



// /** Dado el array diasArrayRepetido generar una función que retorne un array sin repetición */
// const diasArrayRepetido = ["Lunes", "Lunes", "Lunes", "Martes", "Miércoles", "Jueves", "Jueves", "Jueves", "Jueves", "Viernes", "Sábado", "Domingo"];

// const eliminarRepeticiones = () => [...new Set(diasArrayRepetido)];

// console.log(eliminarRepeticiones());



// /** Dado el arreglo diasArray generar una función que retorne los dias que contienen la letra e */
// const diasArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// const contienenE = () => diasArray.filter(str => str.includes("e"));
// console.log(contienenE());


// /** Dado los arreglos a y b unirlos (sin repetición) (a ∪ b)*/
// const a = [1, 2, 3];
// const b = [4, 3, 2];

// let union = new Set([...a, ...b]);
// console.log(union);


// /** Dado los arreglos a y b buscar sus intersecciones (a ∩ b)*/
// const a = [1, 2, 3];
// const b = [4, 3, 2];
// let intersection = a.filter(x => b.indexOf(x) > -1);
// console.log(intersection);


// /** Dado los Set a y b buscar sus intersecciones (a ∩ b)*/
// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);

// let intersection = [...a].filter(x => b.has(x));
// console.log(intersection);

// // console.log(a)

/** Dado los Set a y b buscar sus diferencias (a ∩ b)*/
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let diferencia = [...a].filter(x => !b.has(x));
console.log(diferencia);
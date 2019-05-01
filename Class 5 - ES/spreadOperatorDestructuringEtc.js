
/** Marge Arrys */
const myArray = ["a", "b", "c"];
const myArray2 = ["e", "f", "g"];

const mergeArray = [...myArray, ...myArray2];

console.log(mergeArray);



/** Marge Object */
const myObject1 = {a: 1,b:2}
const myObject2 = {c: 1,d:2}

const mergeObject = {...myObject1, ...myObject2}

console.log(mergeObject);


/** Propagation of the elements of an array */
const myArray4 = [1, 2, 3];

function clfValueX(x, y, z) {
    console.log(x);
}

clfValueX(...myArray4);


/** Convert Set to Array */
const mySet = new Set([1,2,3]);

[...mySet].map(item => console.log(item));



/** Destructuring */
const myObject = {
    name: "Federico",
    surname: "Croce",
    child:{
        test:"child test"
    },
    age: 30
}

const {age} = myObject; /** Simple */
const {age: myAge} = myObject;  /** Rename */

const {child: {test}} = myObject; /** Nested objects */

console.log(age);
console.log(myAge);
console.log(test);


/** Destructuring in function's parameters */
const getCompleteName = ({name, surname}) => console.log(name + ' ' + surname );
getCompleteName(myObject)




/** Default params */
const testDefaultParams = (name = "Anónimo") => console.log(name);

testDefaultParams("Federico Croce");
testDefaultParams();







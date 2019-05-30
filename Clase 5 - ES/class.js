

/** Class Person example */

// class Person {
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }

//     completeName() {
//         return "Soy: " + this._name + ' ' + this._surname;
//     }

//     get surname() {
//         return this._name;
//     }

//     set surname(newSurname) {
//         return this._surname = newSurname;
//     }
// };

// const Fede = new Person("Federico", "Croce");

// console.log(Fede.completeName())
// console.log(Fede)
// console.log(Person.prototype.completeName)








/** The User Class extends of Class Person example */

class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    completeName() {
        return "Soy: " + this._name + ' ' + this._surname;
    }

    get surname() {
        return this._surname;
    }

    set surname(newSurname) {
        this._surname = newSurname;
    }
};

class User extends Person {
    constructor(name, internalID) {
        super(name);
        this._internalID = internalID;
    }
}


const Fede = new Person("Federico", "Croce");

const Pablo = new User("Pablo", "A127271");
Pablo.surname = "Radomski";


console.log(Fede.completeName())
console.log(Pablo.completeName())
console.log(Fede)
console.log(Pablo)
















// console.log(Fede.completeName());

// console.log(Person.prototype.completeName);








// Fede.name = 'Fede';

// console.log(Fede.name);
// console.log(Fede.completeName());



// console.log(Person.prototype.completeName);
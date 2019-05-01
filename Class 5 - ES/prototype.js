

/** The method in each new instance of Person */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.completeName = function(){
        return this.name + ' ' + this.surname
    } 
};

const Fede = new Person ("Federico", "Croce");
const Pablo = new Person ("Pablo", "Radomski");

console.log(Fede.completeName());
console.log(Pablo.completeName());

console.log(Fede);
console.log(Pablo);

console.log(Person.prototype);






/** The method in prototype Person */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};

Person.prototype.completeName = function(){
    return this.name + ' ' + this.surname;
} 

const Fede = new Person ("Federico", "Croce");
const Pablo = new Person ("Pablo", "Radomski");

console.log(Fede.completeName());
console.log(Pablo.completeName());

console.log(Fede);
console.log(Pablo);

console.log(Person.prototype);




/** Function example */
function clgName (name){
    console.log(name);
}

/** Arrow function example with single param */
const clgName = name => console.log(name);

/** Arrow function example with two params */
const returnCompleteName = (name, surname) => name + ' ' + surname;

/** Arrow function example with more than one sentence */
const returnCompleteName = (name, surname) => {
    const completeName = name + ' ' + surname;
    return completeName;
};





/** SetTimeOut example with arrow function, generate a new context context and write undefined undefined */
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.returnCompleteNameAfterTimeOut = function(){
        setTimeout(function() {
            console.log(this.name + ' ' + this.surname);
        }, 1000);
    } 
};

const Fede = new Person ("Federico", "Croce");
Fede.returnCompleteNameAfterTimeOut();




/** SetTimeOut example with arrow function, maintains the context and writes Federico Croce */
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.returnCompleteNameAfterTimeOut = () => setTimeout(() => console.log(this.name + ' ' + this.surname), 1000);
};

const Fede = new Person ("Federico", "Croce");
Fede.returnCompleteNameAfterTimeOut();

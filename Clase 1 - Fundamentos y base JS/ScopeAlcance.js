
function mifunc() {

    var a = 5;
    var b = 10;
 
    if (a === 5) {
        let a = 4; // El alcance es dentro del bloque if
        var b = 1; // El alcance es global
        const d = 7;
 
        c = 2;
 
        console.log(a);  // 4
        console.log(b);  // 1
        console.log(c);  // 2
        console.log(d);  // 7
 
    }
    console.log(a); // 5
    console.log(b); // 1
    console.log(c); // 2
 
 };
 
 mifunc();
 
 console.log(c); // 2
 
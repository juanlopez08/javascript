console.log('var, let y const')

var ejemplo = 5;
var ejemplo = 6; /*var si se puede inicializar varias veces y sobreescribir */
console.log(ejemplo);

let edad = 55;  /*let no se puede iniciar mas de 2 veces, si se sobreescribe */
edad = 60; /*se sobreescribe el valor con var*/

console.log(edad);

// diferencia principal
console.log("FOR con var");
for(var i=0; i<=5; i++){
    console.log(i);
}

console.log("i fuera del for");
console.log(i);

//LET solo declara variables dentro de ambientes
console.log("let j = 50");
let j = 50;

console.log("FOR con let");
for(let j=0; j<=5; j++){ // en este caso la j solo vive dentro del for
    console.log(j);
}

console.log("j fuera del for");
console.log(j); /*pinta la j de 50 ya que es la que esta definida para el ambiente de let fuera del for*/ 

console.log("Solo declaro una variable con let");
let k; /*muestra undefined en cosnola porque no tiene valor*/

//EJEMPLO
console.log("ejemplo del if");
let numero = 60;
if(true){
    let numero = 55
    console.log(numero);
}
console.log(numero); //coge el del ambiente fuera del if que vale 60


/*CONST */
console.log('CONST');
//no se pueden declarar dos veces ni reasignarle valores
const num = 44; // las constantes siempre tiene que iniciarse con un valor
console.log(num);

const numeros = [55, 60, 30]; //se pueden declarar constantes en forma de array
console.log(numeros);
numeros.push(10); //permite agregar valores 
console.log(numeros);
/*se pueden aniadir pero no reescribir*/
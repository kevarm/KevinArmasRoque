var numero1 = prompt ("Introduce el primer número");
console.log ("El primer número es " + numero1);
var numero2 = prompt ("Introduce el segundo número");
console.log ("El segundo número es " + numero2);

if (numero1 > numero2) {
    console.log ("El primer número es el mayor");
}
else if (numero1 == numero2) {
    console.log ("Ambos números son iguales");
}
else {
    console.log ("El segundo número es el mayor");
}

//Prueba esto:
// if (a==b) {
//     console.log("El número " + a + " y " + "el número " + b + " son iguales");
// }else if (a>b){
//     console.log("El primero es mayor.")
// } else if (b>a){
//     console.log("El segundo es mayor")
// }

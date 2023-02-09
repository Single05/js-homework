const mensaje = "Fin del Ejercicio";

let comida = "pera";
let objeto = "mueble";
let saludo = "hola";
let color = "azul";
let tiempo = "verano";

let result = comida + " " + objeto + " " + saludo + " " + color + " " + tiempo;
console.log(result);

let carne = 3.3;
let frutas = 6.7;
let verduras = 8.3;
let papelHigienico = 5.5;
let yerba = 5.8;
const aumento = 1.18;

let result1 = carne + frutas + verduras + papelHigienico + yerba;
console.log("La suma de toda la compra es " + result1);

let resultadoConAumento = result1 * aumento;
console.log("El resultado es " + resultadoConAumento);

let resultadoConCuotas = resultadoConAumento / 3;
console.log("Precio final con cuotas " + resultadoConCuotas);

let resultadoPagoMitadEfectivo = result1 / 2 + aumento;
console.log("Precio final sin cuotas " + resultadoPagoMitadEfectivo);

let precioFinalEnCuotas = resultadoPagoMitadEfectivo / 3;
console.log("Precio final en tres cuotas " + precioFinalEnCuotas);

let sueldoA = 5000;
let sueldoB = 7500;
let sueldoC = 8000;
let sueldoD = 9800;
let sueldoE = 14000;
let sueldoF = 3500;

let mayorQue = sueldoA > sueldoB;
console.log(mayorQue);
let menorQue = sueldoD < sueldoE;
console.log(menorQue);

let resultadoAND = sueldoB === 7500 && sueldoC === 8000;
console.log(resultadoAND);
let resultadoAND2 = sueldoE === 14000 && sueldoD === 9500;
console.log(resultadoAND2);
let resultadoAND3 = sueldoE === 14000 && sueldoD === 9800;
console.log(resultadoAND3);



let resultadoOR = sueldoF === 3500 || sueldoA === 5000;
console.log(resultadoOR);
let resultadoOR2 = sueldoB === 7500 || sueldoC === 8000;
console.log(resultadoOR2);
let resultadoOR3 = sueldoF === 3500 || sueldoE === 13000;
console.log(resultadoOR3);

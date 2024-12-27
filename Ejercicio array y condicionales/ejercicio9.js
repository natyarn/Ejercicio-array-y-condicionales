const numero = parseInt(prompt("Ingresa un número entero positivo:"));
const invertido = parseInt(numero.toString().split('').reverse().join(''));
console.log(`El número invertido es: ${invertido}`);

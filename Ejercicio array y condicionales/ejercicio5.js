const numeros = [23, 45, 12, 67, 34, 89, 21];
let max = numeros[0];
numeros.forEach(num => {
  if (num > max) {
    max = num;
  }
});
console.log(`El número más grande es ${max}.`);

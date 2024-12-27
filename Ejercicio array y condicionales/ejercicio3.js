const numero = parseInt(prompt("Ingresa un número del 1 al 100:"));
for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  if (resultado > 1000) break;
  console.log(`${numero} x ${i} = ${resultado}`);
}

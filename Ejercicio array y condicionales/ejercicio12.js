const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let adivinado = false;
while (!adivinado) {
  const intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
  if (intento === numeroSecreto) {
    console.log("¡Felicidades! Adivinaste el número.");
    adivinado = true;
  } else if (intento > numeroSecreto) {
    console.log("El número es menor.");
  } else {
    console.log("El número es mayor.");
  }
}

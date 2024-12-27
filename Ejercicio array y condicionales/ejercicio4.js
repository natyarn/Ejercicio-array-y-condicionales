const palabra = prompt("Ingresa una palabra:").toLowerCase();
let contadorVocales = 0;
for (const letra of palabra) {
  if ("aeiou".includes(letra)) {
    contadorVocales++;
  }
}
console.log(`La palabra tiene ${contadorVocales} vocales.`);

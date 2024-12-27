const palabras = prompt("Ingresa palabras separadas por comas:").split(",");
palabras.forEach(palabra => {
  const limpia = palabra.trim().toLowerCase();
  if (limpia === limpia.split("").reverse().join("")) {
    console.log(`${palabra} es palíndroma.`);
  }
});

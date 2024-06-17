// le mie Funzioni


// verificare se un numero è pari o dispari
function isPari(num) {
  return num % 2 === 0;
}

// Generare un numero casuale tra 1 e 5
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// le mie Funzioni


// verificare se un numero è pari o dispari
function isPari(num) {
  return num % 2 === 0;
}

// Generare un numero casuale tra 1 e 5
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per controllare i numeri inseriti dall'utente
function checkNumbers(randomNumbers, inputIds) {
  // Inizializza un contatore per i numeri corretti
  let correctNumbers = 0;

  // Controlla ciascuno dei numeri inseriti dall'utente
  for (let i = 0; i < randomNumbers.length; i++) {
      // Ottiene il numero inserito dall'utente
      let userInput = document.getElementById(inputIds[i]).value;

      // Se il numero inserito dall'utente è uguale al numero casuale, colora la casella di verde e incrementa il contatore
      if (userInput == randomNumbers[i]) {
          document.getElementById(inputIds[i]).className = 'correct';
          correctNumbers++;
      } else {
          // Se il numero inserito dall'utente non è uguale al numero casuale, colora la casella di rosso
          document.getElementById(inputIds[i]).className = 'incorrect';
      }
  }

  // Restituisce il numero di numeri corretti
  return correctNumbers;
}

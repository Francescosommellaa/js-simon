// Inizializza un array vuoto per memorizzare i numeri casuali
let randomNumbers = [];

// Genera 5 numeri casuali da 1 a 100
for (let i = 0; i < 5; i++) {
    // Genera un numero casuale e lo aggiunge all'array
    randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
    // Visualizza il numero casuale nella pagina web
    document.getElementById('randomNumbers').innerHTML += randomNumbers[i]+ ' ';
}

// Dopo 20 secondi, nasconde i numeri casuali e mostra le caselle di input
setTimeout(function() {
    document.getElementById('randomNumbers').style.display = 'none';
    document.getElementById('userInputs').style.display = 'block';
}, 20000);

// Aggiungi un evento di click al pulsante per invocare la funzione checkNumbers
document.getElementById('submit').addEventListener('click', function() {
    let inputIds = ['num1', 'num2', 'num3', 'num4', 'num5'];
    let correctNumbers = checkNumbers(randomNumbers, inputIds);

    // Se l'utente ha indovinato almeno 3 numeri, visualizza un messaggio di vittoria, altrimenti un messaggio di sconfitta
    if (correctNumbers >= 3) {
        document.getElementById('result').innerHTML = 'Hai vinto!';
    } else {
        document.getElementById('result').innerHTML = 'Hai perso!';
    }
});
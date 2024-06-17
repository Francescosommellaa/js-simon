// Inizializza un array vuoto per memorizzare i numeri casuali
let randomNumbers = [];

// Genera 5 numeri casuali da 1 a 100
for (var i = 0; i < 5; i++) {
    // Genera un numero casuale e lo aggiunge all'array
    randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
    // Visualizza il numero casuale nella pagina web
    document.getElementById('randomNumbers').innerHTML += randomNumbers[i] + ' ';
}

// Dopo 20 secondi, nasconde i numeri casuali e mostra le caselle di input
setTimeout(function() {
    document.getElementById('randomNumbers').style.display = 'none';
    document.getElementById('userInputs').style.display = 'block';
}, 20000);

// Funzione per controllare i numeri inseriti dall'utente
function checkNumbers() {
    // Inizializza un contatore per i numeri corretti
    var correctNumbers = 0;

    // Controlla ciascuno dei 5 numeri inseriti dall'utente
    for (var i = 0; i < 5; i++) {
        // Ottiene il numero inserito dall'utente
        var userInput = document.getElementById('num' + (i + 1)).value;

        // Se il numero inserito dall'utente è uguale al numero casuale, colora la casella di verde e incrementa il contatore
        if (userInput == randomNumbers[i]) {
            document.getElementById('num' + (i + 1)).className = 'correct';
            correctNumbers++;
        } else {
            // Se il numero inserito dall'utente non è uguale al numero casuale, colora la casella di rosso
            document.getElementById('num' + (i + 1)).className = 'incorrect';
        }
    }

    // Se l'utente ha indovinato almeno 3 numeri, visualizza un messaggio di vittoria, altrimenti un messaggio di sconfitta
    if (correctNumbers >= 3) {
        document.getElementById('result').innerHTML = 'Hai vinto!';
    } else {
        document.getElementById('result').innerHTML = 'Hai perso!';
    }
}


function tentaLaFortuna() {

    // tiro il dado per l'utente
    let punteggioUtente = Math.floor((Math.random() * 6) + 1);

    // tiro il dado per il computer
    let punteggioCPU = Math.floor((Math.random() * 6) + 1);

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if ( punteggioUtente > punteggioCPU ) {
        document.getElementById("risultato").innerHTML = `Hai Vinto!!!`;
    } else if ( punteggioUtente < punteggioCPU ) {
        document.getElementById("risultato").innerHTML = `Hai Perso, Ritenta`;
    } else {
        document.getElementById("risultato").innerHTML = `Hai Pareggiato`;
    }

    document.getElementById("punteggi").innerHTML = `il tuo punteggio è: ${punteggioUtente} / il punteggio della CPU è: ${punteggioCPU}`;
}

// gioca ai dadi sul click del bottone
document.getElementById("tiroDelDado").addEventListener("click", tentaLaFortuna);

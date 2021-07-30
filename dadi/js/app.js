
// salva lo score dei punteggi
const scorePunteggi = [0, 0]; // [0] => score utente -- [1] => score CPU

function tentaLaFortuna() {

    // tiro il dado per l'utente
    let punteggioUtente = Math.floor((Math.random() * 6) + 1);

    // tiro il dado per il computer
    let punteggioCPU = Math.floor((Math.random() * 6) + 1);

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if ( punteggioUtente > punteggioCPU ) {
        document.getElementById("risultato").innerHTML = `Hai Vinto!!!`;
        // incremento scoreTUO se vinci
        scorePunteggi[0]++;

    } else if ( punteggioUtente < punteggioCPU ) {
        document.getElementById("risultato").innerHTML = `Hai Perso, Ritenta`;
        // incremento scoreCPU se vince CPU
        scorePunteggi[1]++;

    } else {
        document.getElementById("risultato").innerHTML = `Hai Pareggiato`;
    }

    // stampa punteggi
    document.getElementById("punteggi").innerHTML = `il tuo punteggio è: ${punteggioUtente} / il punteggio della CPU è: ${punteggioCPU}`;

    // aggiorno lo score totale
    document.getElementById("scorePunteggi").innerHTML = `Lo score totale è: TU (${scorePunteggi[0]}) vs CPU (${scorePunteggi[1]})`;
}

// gioca ai dadi sul click del bottone
document.getElementById("tiroDelDado").addEventListener("click", tentaLaFortuna);


// Chiedi all’utente la sua email
const emailUtente = prompt("inserisci la tua email");

// creo la lista di email che possono accedere
const listaAccessoConsentito = ["gianni@gmail.com", "fabio@gmail.com", "chiara@gmail.com", "gigi@gmail.com", "dario@gmail.com"];

// controlla che sia nella lista di chi può accedere
let login = false;

for (let i = 0; i < listaAccessoConsentito.length; i++) {

    if ( emailUtente == listaAccessoConsentito[i] ) {
        login = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if ( login == true ) {
    alert("hai effettuato l'acccesso");
} else {
    alert("perfavore immetti la corretta email");
}

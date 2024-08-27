/*

Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto 
precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS 5:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo 
in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, 
indica quali e quanti numeri ci sono in comune tra i due array"

*/


//Visualizzare in pagina 5 numeri casuali.
//funzioni
function randomNumbers() {
    for (let i = 0; i < 5; i++) {
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;
        console.log(numeroCasuale);
    }
}



//Recupero elemniti dal dom
 const numberElement = document.getElementById('numberRandom')
 const n1 = document.getElementById('n1')
 const n2 = document.getElementById('n2')
 const n3 = document.getElementById('n3')
 const n4 = document.getElementById('n4')
 const n5 = document.getElementById('n5')
 const buttonPlay = document.querySelector('button')

 randomNumbers()

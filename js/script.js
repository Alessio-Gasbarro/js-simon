//Richieste esercizio
//Avviso ordine> avvio countdown
//Countdown da 20s
//Il sistema genera 5 numeri casuali da 10 a 100, salvati in un array e aggiunti alla number-list
//Aggiunta Timeout che trasferisce i numeri alla ul number-list dopo i 20s
//confronta numeri e stampa risultato

//SEZIONE VARIABILI
const numbers = [];
const answers = [];
const message = document.getElementById('message');
const button = document.querySelector('button');
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');

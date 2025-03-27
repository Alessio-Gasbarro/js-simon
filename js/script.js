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

//RANDOM NUMBERS GENERATOR
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//SMALL COUNTDOWN SCRIPT
let count = 10;
let interval = setInterval(() => {
    countdown.innerHTML = count;
    count--;
    if (count === 0){
        clearInterval(interval);
        countdown.innerHTML = count;
        document.querySelector('#answers-form').classList.remove('d-none');
    }
}, 1000);

//RANDOM NUMBERS-TO ARRAY SAVER
for (let i = 0; i < 5; i++){
    numbers.push(randomNumbers(0,99));
    numbersList.innerHTML += `<li>${numbers[i]}</li>`;
}
console.log(numbers);

//DESPAWN NUMBERS AFTER COUNTDOWN END SCRIPT;
setTimeout(() => {
    numbersList.innerHTML = '';
}, (count * 1000));

//ANSWERS COMPARISON SCRIPT
function answersComp(answers, numbers){
    let result = [];
    for (let i = 0; i < answers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(answers[i] === numbers[j]){
                result.push(answers[i]);
                numbers.splice(j, 1);
            }
        }
    }
    return result;
}
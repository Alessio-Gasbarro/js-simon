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
function RNG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// funzione comparazione risposte
function compareAnswers(answers, numbers){
    let result = [];
    for (let i = 0; i < answers.length; i++){
        for (let j = 0; j < numbers.length; j++){
            if (answers[i] == numbers[j]){
                result.push(answers[i]);
                numbers.splice(j, 1);
            }
        }
    }
    return result;
}

//TRUE COUNTDOWN
let count = 30;
let interval = setInterval(() => {
    count--;
    countdown.innerHTML = count;
    if (count === 0){
        clearInterval(interval);
        countdown.innerHTML = '';
        instructions.innerHTML = 'Inserisci i numeri!';
        document.querySelector('#answers-form').classList.remove('d-none');
    }
}, 1000);

//RANDOM NUMBERS-TO ARRAY SAVER
for (let i = 0; i < 5; i++){
    numbers.push(RNG(1, 50));
    for (let j = 0; j < i; j++){
        if (numbers[i] == numbers[j]){
            numbers.splice(i, 1);
            i--;
            break;
        }
    }

    numbersList.innerHTML += `<li>${numbers[i]}</li>`;
}

//NUMBERS DESPAWNER + COMPARER + SAVE-TO-ARRAY
setTimeout(() => {
    numbersList.innerHTML = '';
}, (count * 1000));

button.addEventListener('click', function(event){
    event.preventDefault();
    
    const answers = [];
    for (let i = 0; i < 5; i++){
        answers.push(document.querySelector(`input:nth-child(${i + 1})`).value);
    }

    for (let i = 0; i < answers.length; i++){
        if (isNaN(answers[i]) || answers[i] == ''){
            message.innerHTML = 'Inserisci solo numeri!';
            return;
        }
    }

    for (let i = 0; i < answers.length; i++){
        for (let j = i + 1; j < answers.length; j++){
            if (answers[i] == answers[j]){
                message.innerHTML = 'Inserisci numeri unici!';
                return;
            }
        }
    }

    console.log(`risposte inserite: ${answers}`);

    const result = compareAnswers(answers, numbers);
    if (result.length === 5){
        message.innerHTML = 'Tutti i numeri inseriti sono corretti';
    } else if (result.length > 0){
        message.innerHTML = `Hai inserito ${result.length} numeri corretti: ${result}`;
    } else {
        message.innerHTML = 'Nessun numero inserito correttamente';
    }
})
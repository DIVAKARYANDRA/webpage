const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const endgameElement = document.getElementById('end-game-container');
const settingBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
    'assistance',
    'assistant',
    'associate',
    'association',
    'assume',
    'assumption',
    'assure',
    'at',
    'athlete',
    'athletic',
    'atmosphere',
    'attach',
    'attack',
    'attempt',
    'attend',
    'barely',
    'barrel',
    'barrier',
    'base',
    'baseball',
    'basic',
    'basically',
    'basis',
    'basket',
    'basketball',
    'bathroom',
    'battery',
    'cancer',
    'candidate',
    'cap',
    'capability',
    'capable',
    'capacity',
    'capital',
    'captain',
    'capture',
    'car',
    'carbon',
    'drive',
    'driver',
    'drop',
    'drug',
    'dry',
    'due',
    'during',
    'dust',
    'duty',
    'each',
    'eager',
    'ear',
    'early',
    'earn',
    'earnings',
    'earth',
    'wrap',
    'write',
    'writer',
    'writing',
    'wrong',
    'yard',
    'yeah',
    'year',
    'yell',
    'yellow',
    'yes',
    'yesterday',
    'yet',
    'yield',
    'you',
    'young',
    'your',
    'yours',
    'yourself',
    'youth',
    'zone'
];

let randomWord ;

let score = 0;

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

let time = 10;

text.focus();

const timeInterval = setInterval(updateTime,1000);

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore(){

    score++;
    scoreElement.innerHTML = score;
}

function updateTime(){
    time--;
    timeElement.innerHTML = time + 's';

    if(time === 0){
        clearInterval(timeInterval);

        gameOver();
    }
}

function gameOver(){
    endgameElement.innerHTML = `<h1>Time ran out</h1><p>Your final score is ${score}</p><button onClick="location.reload()">Reload</button>`;
    endgameElement.style.display = 'flex';
}

addWordToDOM();

text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        e.target.value = '';

        if(difficulty === 'hard'){
            time+=2;
        }else if(difficulty === 'medium'){
            time += 3;
        }else{
            time += 5;
        }

        updateTime();
    }
});

settingBtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty',difficulty);
});
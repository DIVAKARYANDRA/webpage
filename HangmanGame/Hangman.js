const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-btn');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['java','python','tcs','accenture','application','encyclopaedia'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord(){
    wordElement.innerHTML = `${selectedWord.split('').map(letter=>`<span class="letter">${correctLetters.includes(letter) ? letter : '' }</span>`).join('')}`;

    const innerWord = wordElement.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You Won! 😃';
        popup.style.display = 'flex';
    }

}

function updateWrongLetters(){
    wrongLettersElement.innerHTML = `${wrongLetters.length > 0 ? '<p>Wrong</p>' : '' }${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;

    figureParts.forEach((part,index)=>{
        const errors = wrongLetters.length;

        if(index < errors){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }
    });

    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😟';
        popup.style.display = 'flex';
    }



}

function showNotification(){

    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    },2000);
}

window.addEventListener('keydown', e => {

    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                showNotification();
            }
        }
    } 
    
});

playAgainBtn.addEventListener('click',()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);


    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetters();

    popup.style.display = 'none';
});

displayWord();
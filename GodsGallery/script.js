// expanding cards & progress bar

const panels = document.querySelectorAll('.panel');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        updateProgressBar(index + 1);
    });
});

next.addEventListener('click', () => {
    let nextIndex = getActiveIndex() + 1;

    if (nextIndex > panels.length - 1) {
        nextIndex = panels.length - 1;
    }

    panels[nextIndex].click();
});

prev.addEventListener('click', () => {
    let prevIndex = getActiveIndex() - 1;

    if (prevIndex < 0) {
        prevIndex = 0;
    }

    panels[prevIndex].click();
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

function getActiveIndex() {
    let activeIndex = 0;
    panels.forEach((panel, index) => {
        if (panel.classList.contains('active')) {
            activeIndex = index;
        }
    });
    return activeIndex;
}

function updateProgressBar(index) {
    circles.forEach((circle, idx) => {
        if (idx < index) {
            circle.classList.add('activeProgress');
        } else {
            circle.classList.remove('activeProgress');
        }
    });

    const actives = document.querySelectorAll('.activeProgress');

    progress.style.width =
        (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (index === 1) {
        prev.disabled = true;
    } else if (index === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}



// search

const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const input = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active-search');
    input.focus();
})


// burryloading

document.addEventListener("DOMContentLoaded", function() {
    // Remove the 'blurred' class after a delay
    setTimeout(function() {
      document.body.style.filter = 'blur(0)'; // Set to no blur
    }, 3000); // Set the delay in milliseconds (3000ms = 3 seconds)
  });

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.loading-container')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// scroll animation


const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom  = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}


// sound-effects 

const sounds = ['om','hanuman','shiva','bhakthi','raghuNandan'];
let currentSound = null;

sounds.forEach(sound => {
    const soundBtn = document.createElement('button');
    soundBtn.classList.add('sound-btn');

    soundBtn.innerHTML = sound;

    soundBtn.addEventListener('click', ()=>{

        if (currentSound === sound) {
            stopSound(sound);
            currentSound = null;
        } else {
        stopSongs();
        document.getElementById(sound).play();
        currentSound = sound;
        }
    });


    document.getElementById('sound-buttons').appendChild(soundBtn);
})

function stopSongs() {
    sounds.forEach(sound => stopSound(sound));
}

function stopSound(sound) {    
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
}

// choice-picker

const choicetags = document.getElementById('choiceTags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = '';
        },10);

        randomSelect();
    }
});

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    choicetags.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerHTML = tag;
        choicetags.appendChild(tagElement);
    })
}

function randomSelect(){
    const times = 30;

    const interval = setInterval(()=>{

        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(()=>{

            unHighlightTag(randomTag);

        },100);

    },100);

    setTimeout(()=>{

        clearInterval(interval);

        setTimeout(()=>{
            const randomTag = pickRandomTag();

            highlightTag(randomTag);

        },100);

    },times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}

// nav-script

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click',()=>{
    nav.classList.toggle('active-nav');
});


// Automatic text

const textElement = document.getElementById('text');
const text = "God's Gallery";
let idx = 1;
let speed = 400;
writeText();

function writeText(){
    textElement.innerText = text.slice(0,idx);

    idx++;

    if(idx>text.length){
        idx = 1;
    }

    setTimeout(writeText,speed);
}

// Carousel images

// const imgs = document.getElementById('imgs');
// const leftBtnImg = document.getElementById('leftbtn');
// const rightBtnImg = document.getElementById('rightbtn');

// const img = document.querySelectorAll('#imgs img');

// let carouselidx = 0;
// let carouselinterval = setInterval(carouselRun,2000);

// function carouselRun(){
//     carouselidx++;
//     changeImage();
// }

// function changeImage(){
//     if(carouselidx > img.length - 1){
//         carouselidx = 0;
//     }else if(carouselidx < 0){
//         carouselidx = img.length - 1;
//     }

//     imgs.style.transform = `translateX(${-idx * 200}px)`;
// }

// function resetInterval(){
//     clearInterval(carouselinterval);
//     carouselinterval = setInterval(carouselRun,2000);
// }

// rightBtnImg.addEventListener('click',()=>{
//     carouselidx++;
//     changeImage();
//     resetInterval();
// });

// leftBtnImg.addEventListener('click',()=>{
//     carouselidx--;
//     changeImage();
//     resetInterval();
// })

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx1 = 0

let interval1 = setInterval(run, 3000)

function run() {
    idx1++
    changeImage()
}

function changeImage() {
    if(idx1 > img.length - 1) {
        idx1 = 0
    } else if(idx1 < 0) {
        idx1 = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx1 * 350}px)`
}

function resetInterval() {
    clearInterval(interval1);
    interval1 = setInterval(run, 5000)
}

rightBtn.addEventListener('click', () => {
    idx1++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', () => {
    idx1--;
    changeImage();
    resetInterval();
})

// hoverboard squares

const hoverboardsContainer = document.getElementById('hoverboard');
const colors = ['red','blue','green','yellow','pink','white','orange','#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
//const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 420;

for(let i=0; i < SQUARES;i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',() => setColor(square));
    //square.addEventListener('mouseout',() => removeColor(square));

    hoverboardsContainer.appendChild(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}


// function removeColor(element){
//     element.style.background = '#1d1d1d';
//     element.style.boxShadow = '0 0 2px #000';
// }

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

// bless-magic

const boxesContainer = document.getElementById('bless-boxes');
const magicBtn = document.getElementById('magicBtn');

magicBtn.addEventListener('click', () => boxesContainer.classList.toggle('bigboxes'));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('bless-box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

// quiz

const quizData = [

    {
        question:"Badrinath is situated on the bank of river?",
        a:"Ganga",
        b:"Alaknanda",
        c:"Saraswath",
        d:"Yamuna",
        correct:"b"
    },
    {
        question:"Yama, the God of death in Hinduism, uses what animal as his transport?",
        a:"Raven",
        b:"Elephant",
        c:"Camel",
        d:"Buffalo",
        correct:"d"

    },
    {
        question:"Who is the king of wealth?",
        a:"Vayu",
        b:"Indra",
        c:"Kubera",
        d:"Agni",
        correct:"c"

    },
    {
        question:"Where is Tirupati Balaji (Tirumala Venkateswara Temple) present?",
        a:"Chittor, Andhra Pradesh",
        b:"Vishakapatnam, Andhra Pradesh",
        c:"Kolkata, West Bengal",
        d:"Cuttack, Odisha",
        correct:"a"

    },
    {
        question:"“Dharma” means",
        a:"Higher Truth",
        b:"The right duty of a person",
        c:"Virtuous path",
        d:"All the above",
        correct:"e"

    }

];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitquiz = document.getElementById('submitquiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerElement => answerElement.checked = false);
}

function getSelected(){
    let answer;

    answerElements.forEach(answerElement => {
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });

    return answer;


}

submitquiz.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2 class="h2element">You answered correctly at ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})
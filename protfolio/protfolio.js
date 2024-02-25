document.querySelector('.hamburger-menu').addEventListener('click',()=>{
    document.querySelector('.nav-wrapper').classList.toggle('change');
});

let cutX = 0, bool = false, interval ;

const rotate = () => {
    const cutCubes = document.querySelectorAll('.cuttedcube');
    Array.from(cutCubes).forEach(cutCube => cutCube.style.transform = `rotateY(${cutX}deg)`);
}

const changePlayPause = () => {
    const i = document.querySelector('.cutCubePlayPause i');
    const cls = i.classList[0];
    if(cls === 'ri-play-fill'){
        i.classList.remove('ri-play-fill');
        i.classList.add('ri-pause-fill');
    }else{
        i.classList.remove('ri-pause-fill');
        i.classList.add('ri-play-fill');
    }

}

const playPause = () => {
    if(!bool){
        interval = setInterval(() => {
            cutX -= 90;
            rotate();
        }, 2000);
        changePlayPause();
        bool = true;
    }else{
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }
}

document.querySelector('.cutcubeLeftarrow').addEventListener('click',()=>{
    cutX += 90;
    rotate();
    if(bool){
        playPause();
    }
    
});


document.querySelector('.cutcubeLeftarrow').addEventListener('mouseover',()=>{
    cutX += 25;
    rotate();
    
});

document.querySelector('.cutcubeLeftarrow').addEventListener('mouseout',()=>{
    cutX -= 25;
    rotate();
    
});

document.querySelector('.cutcubeRightarrow').addEventListener('click',()=>{
    cutX -= 90;
    rotate();
    if(bool){
        playPause();
    }
});


document.querySelector('.cutcubeRightarrow').addEventListener('mouseover',()=>{
    cutX -= 25;
    rotate();
    
});

document.querySelector('.cutcubeRightarrow').addEventListener('mouseout',()=>{
    cutX += 25;
    rotate();
});

document.querySelector('.cutCubePlayPause').addEventListener('click',()=>{
    playPause();
})


const friendsHead = 'Meet My Friends Here 👇';
let friendIterator = 0;

const typing = () => {
    if(friendIterator < friendsHead.length){
        document.querySelector('.team-hd').innerHTML += friendsHead.charAt(friendIterator);
        friendIterator++;

        setTimeout(typing, 150);
    }
}

typing();


// birthday js

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');


const currentYear = new Date().getFullYear();

const birthdayTime = new Date(`August 19 ${currentYear} 00:00:00`);

year.innerText = currentYear;


function updateCountdown(){
    const currentTime = new Date();
    const diff = birthdayTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 % 60);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h ;
    minutes.innerHTML = m < 10 ? '0' + m : m ;
    seconds.innerHTML = s < 10 ? '0' + s : s ;
}

setInterval(updateCountdown, 1000);


// modal

const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => modal.classList.add('show-modal'));
closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);


// clock


const analogBtn = document.getElementById('analog-btn');
const analogHour = document.querySelector('.arr-hour');
const analogMinute = document.querySelector('.arr-minute');
const analogSecond = document.querySelector('.arr-second');
const analogClock = document.getElementById('clock-container');

analogBtn.addEventListener('click', () => analogClock.classList.toggle('show-clock'));
window.addEventListener('click', e => e.target == analogClock ? analogClock.classList.remove('show-clock') : false);


function setDate(){
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinute / 60) * 360;
    const hourDegree = (getHour / 12) * 360;


    analogSecond.style.transform = `rotate(${secondDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogHour.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(setDate, 1000);


const toggleTheme1 = document.getElementById('highlights');
const toggleTheme2 = document.getElementById('showall');

const changeTheme1 = document.querySelector('.game-container');
const changeTheme2 = document.querySelector('.center');

toggleTheme1.addEventListener('click', () => {

    changeTheme1.style.display = 'none';
    changeTheme2.style.display = 'block';

});

toggleTheme2.addEventListener('click', () => {

    changeTheme1.style.display = 'block';
    changeTheme2.style.display = 'none';

});
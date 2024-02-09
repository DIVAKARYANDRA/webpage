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

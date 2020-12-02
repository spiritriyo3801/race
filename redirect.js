var audio = document.createElement('audio');
audio.setAttribute('src','source/engine.mp3');
audio.loop=true;
//audio.play(); 

let counter = document.querySelector('hi');
let count = 1;
setInterval
    (() => {
        counter.innerText = count;
        count++
    },1000)
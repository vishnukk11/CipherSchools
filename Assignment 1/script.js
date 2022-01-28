let seconds = 00;
let tens = 00;

let outputSeconds = document.querySelector("#second");
let outputTens = document.querySelector("#tens");

let start = document.querySelector("#start");
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let interval;

start.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(startTime, 10);
});

stop.addEventListener('click', ()=>{
    clearInterval(interval);
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);
    tens='00';
    seconds='00';
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        outputTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + 0; 
    }
    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }

}
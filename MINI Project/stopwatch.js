let min = 0;
let sec = 0;
let miliSec = 0;
let timer;
function set1(){
document.getElementById("set").disabled = true;
min=parseInt(prompt("Enter the min"));
document.getElementById("timer").innerHTML=min + ":"+ sec +":"+miliSec;
sec=parseInt(prompt("Enter the Second"));
document.getElementById("timer").innerHTML=min + ":"+ sec +":"+miliSec;
if(isNaN(min) ||isNaN(sec) )
{
    alert("Enter the number only");
    set1();
}
if((min < 0 || min>59)||(sec<0 || sec>59))
{
    alert("number must be in between 0 to 60");
    set1();
}
}
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}


function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

function stop() {
    document.getElementById("set").disabled = false;
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}
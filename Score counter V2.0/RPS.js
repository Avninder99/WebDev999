var mainboxwidth = document.querySelector("#mainbox").offsetWidth;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1button = document.querySelector("#b1");
var p2button = document.querySelector("#b2");
var resetbutton = document.querySelector("#reset");
var input = document.querySelector("input");
var valuedisplay = document.querySelector("#valuedisplay");
var winner = document.querySelector("strong");
var scorelimit = 3;
var x = 0;
var p1score = 0;
var p2score = 0;
console.log(mainboxwidth);
p1button.addEventListener("click",function(){
    if (p1score < scorelimit && p2score < scorelimit && x === 0){
        p1score++;
        p1display.textContent = p1score;
        if (p1score === scorelimit){
            x = 1;
            p1display.classList.add("windisplay");
            winner.textContent = "WINNER IS PLAYER 1";
        }
    }
});
p2button.addEventListener("click",function(){
    if (p1score < scorelimit && p2score < scorelimit && x === 0){
        p2score++;
        p2display.textContent = p2score;
        if(p2score === scorelimit){
            x = 1;
            p2display.classList.add("windisplay");
            winner.textContent = "WINNER IS PLAYER 2";
        }
    }
});
resetbutton.addEventListener("click",function(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    x = 0;
    p1display.classList.remove("windisplay");
    p2display.classList.remove("windisplay");
    winner.textContent = "";
});
input.addEventListener("change",function(){
    valuedisplay.textContent = input.value;
    scorelimit = Number(input.value);
});
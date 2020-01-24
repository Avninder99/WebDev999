var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var hold = document.querySelector("#hold");
hold.addEventListener("click",function(){
    player1.classList.toggle(".active");
    player2.classList.toggle(".active");
    alert("btn pressed");
});
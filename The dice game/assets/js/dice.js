var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1current = document.querySelector("#p1current h1");
var p2current = document.querySelector("#p2current h1");
var p1total = document.querySelector("#p1total");
var p2total = document.querySelector("#p2total")
var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var hold = document.querySelector("#hold");
var roll = document.querySelector("#roll");
var newGame = document.querySelector("#newgame");
var turn = 1;
var c = 'p' + turn + 'current';
var t = "p" + turn + "total";

hold.addEventListener("click", function(){
	classToggler();
	if(turn === 1) {
		turn = 2;
		p1total.textContent = Number(p1total.textContent) + Number(p1current.textContent);
	}
	else { 
		turn = 1;
		p2total.textContent = Number(p2total.textContent) + Number(p2current.textContent);
	}
	p1current.textContent = 0;
	p2current.textContent = 0;
	return turn;
});

newGame.addEventListener("click", function(){
	reseter();
});

roll.addEventListener("click", function(){
	var random1 = randomizer1();
	var random2 = randomizer2();
	diceimgs(random1 , random2);
	if(random1 === 1 || random2 === 1){
		random1 = 0;
		random2 = 0;
		classToggler();
		if(turn === 1){
			p1current.textContent = 0;
			turn = 2;
		}
		else if (turn === 2){
			p2current.textContent = 0;
			turn = 1;
		}
	}
    if(turn === 1) {
		p1current.textContent = Number(p1current.textContent) + random1 + random2;
	}
	else if(turn === 2) {
		p2current.textContent = Number(p2current.textContent) + random1 + random2;
	}
});
function classToggler() {
	player1.classList.toggle("active");
	player2.classList.toggle("active");
}
function randomizer1() {
	var random1 = Math.floor(Math.random()*6 + 1);
	return random1;
}
function randomizer2() {
	var random2 = Math.floor(Math.random()*6 + 1);
	return random2;
}
function reseter() {
	p1current.textContent = "0";
	p2current.textContent = "0";
	p1total.textContent = "0";
	p2total.textContent = "0";
	player1.classList.add("active");
	player2.classList.remove("active");
	turn = 1;
}
function diceimgs(num1 , num2){
	img1.setAttribute("src","imgs/dice" + num1 + ".png");
	img2.setAttribute("src","imgs/dice" + num2 + ".png");
}
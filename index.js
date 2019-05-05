let numOfSquares=6;
let colors=generateRandomColors(numOfSquares);
const colorDisplay=document.getElementById("colorDis");
let pickedColor=pickColor();
const squares=document.querySelectorAll(".square");
const messageDsiplay=document.querySelector("#message");
const h1=document.querySelector("h1");
const resetBtn=document.querySelector("#reset");
const easyBtn=document.querySelector("#easyBtn");
const hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",easyMode);

function easyMode(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares=3;
	colors=generateRandomColors(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.innerHTML=`${pickedColor}`;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
}

hardBtn.addEventListener("click",hardMode);

function hardMode(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares=6;
	colors=generateRandomColors(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.innerHTML=`${pickedColor}`;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.backgroundColor=colors[i];
		
			squares[i].style.display="block";
		
	}
}

colorDisplay.innerHTML=`${pickedColor}`

//IMPORTANT POUR AUTRE PROJECT

function compareColor () {
	//grab color of clicked square
const clickedColor=this.style.backgroundColor;
// compare color to pickedColor
if(clickedColor===pickedColor){
	messageDsiplay.innerHTML="Correct";
	resetBtn.innerHTML="Play again ?"
	changeColors(clickedColor);
	h1.style.backgroundColor=clickedColor;
 }else{
 	this.style.backgroundColor="#232323";
 	messageDsiplay.innerHTML="Try again";
 }
}

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.backgroundColor=colors[i];
	//add click listeners to squres
	squares[i].addEventListener("click",compareColor)
}


function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	const random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
	//get random color and push to array
	arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	const r=Math.floor(Math.random()*256);
	const g=Math.floor(Math.random()*256);
	const b=Math.floor(Math.random()*256);
	return `rgb(${r}, ${g}, ${b})`
}

function resetColor(){
	//generate all new colors
	colors=generateRandomColors(numOfSquares)
	//pick anew random color from array
	pickedColor=pickColor();
	//change colorDisplay to match color
	colorDisplay.innerHTML=`${pickedColor}`
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDsiplay.innerHTML="";
	this.innerHTML="New colors";
}

resetBtn.addEventListener("click",resetColor)
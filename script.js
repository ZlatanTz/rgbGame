
let squaresNum;
let colorsArray = [];
let pickedColor;

const colorsContainer = document.querySelector(".colors");
const rgbElem = document.querySelector('.rgb-span');
const outcomeElem = document.querySelector('.outcome');
const titleClassElem = document.querySelector('.title-class')

const easyElem = document.querySelector('.easy');
const hardElem = document.querySelector('.hard');

document.querySelector('.new-colors')
   .addEventListener('click', () => {
      resetGame();
      displayColors();
   })


easyElem.addEventListener('click', () => {
   squaresNum = 3;
   resetGame();
   displayColors();
})

hardElem.addEventListener('click', () => {
   squaresNum = 6;
   resetGame();
   displayColors();
})
   

function displayColors(){
   generateColorArray(); // Returns an array of colors
   pickedColor = pickRandomColor();
   rgbElem.innerHTML = pickedColor;
   console.log(pickedColor);
   colorsArray.forEach(color => {
      let colorElem = document.createElement('div');
      colorElem.classList.add('color');
      colorElem.style.backgroundColor = color;
      colorsContainer.appendChild(colorElem);
      colorElem.addEventListener('click', function()  {
         guessColor.call(this);
      });
   })
}



function guessColor() {
   let userChosenColor = this.style.backgroundColor;
   if(userChosenColor === pickedColor){
      wonGame();
   }else{
      outcomeElem.innerHTML = "TRY AGAIN";
      this.style.backgroundColor = '#232323';
   }
}

function wonGame() {
   outcomeElem.innerHTML = "CORRECT";
   titleClassElem.style.backgroundColor = pickedColor;
   document.querySelectorAll('.color')
      .forEach(color => {
         color.style.backgroundColor = pickedColor;
      })
}


function pickRandomColor() {
   return colorsArray[Math.floor(Math.random() * squaresNum)]
}

function generateColorArray() {
   for(let i = 0; i < squaresNum; i++){
      colorsArray.push(generateRandomColor());
   }
   return colorsArray;
}

function generateRandomColor() {
   let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}



function resetGame() {
   colorsArray = [];
   colorsContainer.innerHTML = ' ';
   outcomeElem.innerHTML = ' ';
   titleClassElem.style.backgroundColor = '';
}
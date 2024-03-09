
let squaresNum = 6;
let colorsArray = [];

const colorsContainer = document.querySelector(".colors");

document.querySelector('.new-colors')
   .addEventListener('click', () => {
      displayColors();
      pickRandomColor()
   })


function displayColors(){
   colorsArray = [];
   colorsContainer.innerHTML = ' ';
   generateColorArray();
   colorsArray.forEach(color => {
      let colorElem = document.createElement('div');
      colorElem.classList.add('color');
      colorElem.style.backgroundColor = color;
      // colorElem.addEventListener('click', guessColor())
      colorsContainer.appendChild(colorElem);
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








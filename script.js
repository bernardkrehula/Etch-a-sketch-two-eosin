let colorValue = document.querySelector(".main input");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')
let eraser = document.querySelector('.eraser');
let divBlocks = document.querySelector('.blocks');
let menu = document.querySelector('.menu');
let randomMode = document.querySelector('.random-mode');

let color;

let sliderValue;

color = colorValue.value;

let row = slider.value;
let column = slider.value;

function makeRows(rows, cols) {
  divBlocks.style.setProperty('--grid-rows', rows);
  divBlocks.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    divBlocks.appendChild(cell).className = "grid-item";
  };
};
makeRows(row, column);
let divValue = document.querySelectorAll('.grid-item');
size.innerHTML = `${slider.value} X ${slider.value}`;

slider.addEventListener('input', (e) => {
    sliderValue = e.target.value;
    size.innerHTML = `${sliderValue} X ${sliderValue}`;
    row = sliderValue;
    column = sliderValue;
    divBlocks.innerHTML = '';
    makeRows(row, column);
  
    divValue = document.querySelectorAll('.grid-item');
    divValue.forEach((element) => {
        element.addEventListener('mouseover', () => handleMouseOver(element))
    })
    clear.addEventListener('click', clearDivs)
})


function handleColorValueUpdate() {
  color = colorValue.value;
} 

colorValue.addEventListener('change', handleColorValueUpdate)

function handleMouseOver(element) {
  element.style.backgroundColor = color;
  if(isRandomMode){
    color = generateRandomColor();
  }
}

divValue.forEach((element) => {
  element.addEventListener("mouseover", () => handleMouseOver(element));
});

randomMode.addEventListener('click', () => {
   isRandomMode = true;
});

colorMod.addEventListener('click', () => {
    color = colorValue.value;
    falseRandomMode()
})

eraser.addEventListener('click', () => {
    color = 'white';
    falseRandomMode()
})
function clearDivs () {
  divValue.forEach((element) => {
    element.style.backgroundColor = 'white';
    color = colorValue.value;
    falseRandomMode()
})
}

clear.addEventListener('click', clearDivs)

colorMod.classList.add("background");

btns.forEach((element) => {
  element.addEventListener("click", () => {
    btns.forEach((el) => el.classList.remove("background"));
    element.classList.add("background");
  });
});


let isRandomMode = false;
let ranColor;

function generateRandomColor() {
    if(isRandomMode === true) {
      let letters = '0123456789ABCDEF';
      let randomColor = '#';
      for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
      }
      ranColor = randomColor;
      return randomColor;
    }
  }
  function falseRandomMode() {
    isRandomMode = false;
  }







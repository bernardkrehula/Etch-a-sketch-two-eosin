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

size.innerHTML = `${slider.value} X ${slider.value}`;

slider.addEventListener('input', (e) => {
    sliderValue = e.target.value;
    size.innerHTML = `${sliderValue} X ${sliderValue}`;
    row = sliderValue;
    column = sliderValue;
    divBlocks.innerHTML = '';
    makeRows(row, column);
  
    let newDivs = document.querySelectorAll('.grid-item');
    divValue = newDivs;

    divValue.forEach((element) => {
        element.addEventListener('mouseover', () => {
          divElement = element;
          handleMouseOver()
        })
    })
    clear.addEventListener('click', clearDivs)
})
let divValue = document.querySelectorAll('.grid-item');

function handleColorValueUpdate() {
  color = colorValue.value;
} 

colorValue.addEventListener('change', handleColorValueUpdate)

function handleMouseOver() {
  divElement.style.backgroundColor = color;
  if(isRandomMode){
    color = generateRandomColor();
  }
}
let divElement;

divValue.forEach((element) => {
  element.addEventListener("mouseover", () => {
    divElement = element;
    handleMouseOver()
  });
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

//Na click dugmeta (eraser ili colorMod) uradi querrySelector sa liste trazi element sa classom background
//Ako takav element postoji makni mu classu background a dodaj kliknutom dugmetu

btns.forEach((element) => {
  element.addEventListener("click", () => {
    btns.forEach((el) => el.classList.remove("background"));
    element.classList.add("background");
  });
});


let isRandomMode = false;

function generateRandomColor() {
    if(isRandomMode === true) {
      let letters = '0123456789ABCDEF';
      let randomColor = '#';
      for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
      }
      return randomColor;
    }
  }
  function falseRandomMode() {
    isRandomMode = false;
  }







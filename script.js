let colorValue = document.querySelector(".main input");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')
let eraser = document.querySelector('.eraser');
let divBlocks = document.querySelector('.blocks');
let menu = document.querySelector('.menu');

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
})

let divValue = document.querySelectorAll('.grid-item');

colorValue.addEventListener('change', () => {
    color = colorValue.value;
})
divValue.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    e.target.classList.contains('grid-item')
    element.style.backgroundColor = color;
    console.log('hello');
  });
});

colorMod.addEventListener('click', () => {
    color = colorValue.value;
})

eraser.addEventListener('click', () => {
    color = 'white';
})

clear.addEventListener('click', () => {
    divValue.forEach((element) => {
        element.style.backgroundColor = 'white';
    })
})

colorMod.classList.add("background");
//Na click dugmeta (eraser ili colorMod) uradi querrySelector sa liste trazi element sa classom background
//Ako takav element postoji makni mu classu background a dodaj kliknutom dugmetu

btns.forEach((element) => {
  element.addEventListener("click", () => {
    btns.forEach((el) => el.classList.remove("background"));
    element.classList.add("background");
  });
});






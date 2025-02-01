let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')
let eraser = document.querySelector('.eraser');
let divBlocks = document.querySelector('.blocks');

let color;

let sliderValue;

color = colorValue.value;

colorValue.addEventListener('change', () => {
    color = colorValue.value;
})
divValue.forEach((element) => {
  element.addEventListener("mousemove", () => {
    element.style.backgroundColor = color;
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

size.innerHTML = `${slider.value} X ${slider.value}`;
slider.addEventListener('input', (e) => {
    sliderValue = e.target.value;
    size.innerHTML = `${sliderValue} X ${sliderValue}`;
    rows = sliderValue;

    makeRows(rows, cols);
})
let rows = slider.value;
let cols = slider.value;
console.log(rows)

const container = document.querySelector(".container");

function makeRows(rows, cols) {
  divBlocks.style.setProperty('--grid-rows', rows);
  divBlocks.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    divBlocks.appendChild(cell).className = "grid-item";
  };
};
makeRows(rows, cols);







/*function createDivs () {
  for(let i = 0; i < 20; i++){
    divBlocks.appendChild(document.createElement('div'));
  }
}
createDivs();
let divs = divBlocks.querySelectorAll('div');
let height;
let width;

divs.forEach((element) => {
  let elHeight = element.clientHeight;
  let elWidth = element.clientWidth;
  height = elHeight;
  width = elWidth;
  console.log(height)
})
  */
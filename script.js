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

/*for(let i = 0; i < 20; i++){
  div = divBlocks.appendChild(document.createElement('div'));
}*/
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
colorMod.click();

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
})




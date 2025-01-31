let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')
let eraser = document.querySelector('.eraser');
let divBlocks = document.querySelector('.blocks');
let div = document.createElement('div');

let color;

let sliderValue;

colorMod.addEventListener('click', () => {
  divValue.forEach((element) => {
    element.addEventListener("mousemove", () => {
      color = colorValue.value;
      element.style.backgroundColor = color;
      element.classList.remove('eraseColor');
    });
  });
})
eraser.addEventListener('click', () => {
  divValue.forEach((element) => {
    element.addEventListener("mousemove", () => {
      element.classList.add('eraseColor');
    });
  });
})

clear.addEventListener('click', () => {
    divValue.forEach((element) => {
        element.classList.add('eraseColor');
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
    createDiv()
    //console.log(div.style.height)
})
let number = 0;
function createDiv() {
    
   
    div.style.height;
    console.log(sliderValue)
}

for(let i = 0; i < 20; i++){
  let clone = div.cloneNode(true);
  divBlocks.appendChild(clone);
}



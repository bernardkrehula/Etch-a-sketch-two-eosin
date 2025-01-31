let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')
let eraser = document.querySelector('.eraser');

let color;

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
slider.addEventListener('input', () => {
    size.innerHTML = `${slider.value} X ${slider.value}`;
})

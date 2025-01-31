let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');
let size = document.querySelector('.menu h3');
let slider = document.querySelector('.menu input[type="range"]')

let color;

let activeIndex = 0;

color = colorValue.value;

divValue.forEach((element) => {
  element.addEventListener("mousemove", () => {
    element.style.backgroundColor = color;
  });
});

clear.addEventListener('click', () => {
    divValue.forEach((element) => {
        element.classList.remove("colorStylediv");
        element.classList.remove("eraseColor");
    })
})

colorMod.classList.add("background");
btns.forEach((element, index) => {
  element.addEventListener("click", () => {
    btns.forEach((el) => el.classList.remove("background"));
    element.classList.add("background");
    activeIndex = index;
  });
});

size.innerHTML = `${slider.value} X ${slider.value}`;
slider.addEventListener('input', () => {
    size.innerHTML = `${slider.value} X ${slider.value}`;
})

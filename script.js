let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");
let clear = document.querySelector('.clear');

let color;

let activeIndex = 0;
colorValue.addEventListener("change", () => {
  color = colorValue.value;
  console.log(color);
});
divValue.forEach((element) => {
  element.addEventListener("mousemove", () => {
    if (activeIndex === 0) {
      element.classList.add("colorStylediv");
      element.classList.remove("eraseColor");
    }
    if (activeIndex === 2) {
      element.classList.add("eraseColor");
      element.classList.remove("colorStylediv");
    }
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

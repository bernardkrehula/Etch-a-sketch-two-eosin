let colorValue = document.querySelector(".main input");
let divValue = document.querySelectorAll(".blocks div");
let btns = document.querySelectorAll(".menu button");
let colorMod = document.querySelector(".color-mode");

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
    }
    if (activeIndex === 2) {
      element.classList.add("eraseColor");
    }
  });
});
colorMod.classList.add("background");
btns.forEach((element, index) => {
  element.addEventListener("click", () => {
    btns.forEach((el) => el.classList.remove("background"));
    element.classList.add("background");
    activeIndex = index;
  });
});

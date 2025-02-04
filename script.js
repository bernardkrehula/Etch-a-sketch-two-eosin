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
    //Unutar div ima 16 kvadrata
    //Pomjerim slajder
    //Innerhtml = prazan string
    //To znaci da vise nema kvadrata
    //To znaci da vise nema event listenera koji su na pocetku bili (mouseover)
    //Makerows funkcija 
    //Ponovo ubaci u div nove kvadrate
   
    //Ostaje mi da zakacim event listenere ponovo
    //Dohvati sve kvadrate koji su ponovo nastali (querrSelectorAll)
    let newDivs = document.querySelectorAll('.grid-item');
    newDivs.forEach((element) => {
        element.addEventListener('mouseover', () => {
          element.style.backgroundColor = color;
          if(isRandomMode){
            color = generateRandomColor();
          }
        })
    })
    clear.addEventListener('click', () => {
      newDivs.forEach((element) => {
          element.style.backgroundColor = 'white';
          color = colorValue.value;
          falseRandomMode()
      })
  })
    //Za svaki kvadrat dodaj event listener
    //Pokusaj da ne copypasteas kod
    //Umjesto toga funckiju koja handle mouseover event izvuci van
})
let divValue = document.querySelectorAll('.grid-item');
function handleColorValueUpdate() {
  color = colorValue.value;
} 

colorValue.addEventListener('change', handleColorValueUpdate)

divValue.forEach((element) => {
  element.addEventListener("mouseover", function handleMouseOver() {
    element.style.backgroundColor = color;
    if(isRandomMode){
      color = generateRandomColor();
    }
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

clear.addEventListener('click', () => {
    divValue.forEach((element) => {
        element.style.backgroundColor = 'white';
        color = colorValue.value;
        falseRandomMode()
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







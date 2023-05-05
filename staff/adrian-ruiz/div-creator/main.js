/* const filaPar = document.createElement('div')
filaPar.classList.add('fila-par')

console.log(filaPar)

const tablero = document.getElementById('tablero')

tablero.appendChild(filaPar)

const casillaBlanca = document.createElement('div')
casillaBlanca.classList.add('casilla-blanca') */

const tablero = document.getElementById("tablero");

for (let i = 0; i < 8; i++) {
  let fila = document.createElement("div");
  if (i % 2 === 0) {
    fila.classList.add("fila-par");
  } else {
    fila.classList.add("fila-impar");
  }

  for (let j = 0; j < 8; j++) {
    let casilla = document.createElement("div");
    if (j % 2 === 0) {
      casilla.classList.add("casilla-blanca");
    } else {
      casilla.classList.add("casilla-negra");
    }

    fila.appendChild(casilla);
  }

  tablero.appendChild(fila);
}

const peon = document.createElement("div");
peon.classList.add("peon");
tablero.appendChild(peon);
let peonTop = 143;
let peonLeft = 221;
peon.style.top = peonTop + "px";
peon.style.left = peonLeft + "px";

const buttonTop = document.getElementById("button-top");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const buttonBottom = document.getElementById("button-bottom");

const movePawn = function (direction) {
  if (direction === "up" && peonTop > 143) {
    peonTop = peonTop - 64;
    peon.style.top = peonTop + "px";
  } else if (direction === "left" && peonLeft > 29) {
    peonLeft = peonLeft - 64;
    peon.style.left = peonLeft + "px";
  } else if (direction === "right" && peonLeft < 477) {
    peonLeft = peonLeft + 64;
    peon.style.left = peonLeft + "px";
  } else if (direction === "bottom" && peonTop < 591) {
    peonTop = peonTop + 64;
    peon.style.top = peonTop + "px";
  }
  console.log(
    "%cTESTY👌%cv0.0",
    "color: white; font-size: 24px; font-weight: bold; background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 100%);",
    "color: black;"
  );
};

buttonTop.addEventListener("click", () => {
  movePawn("up");
});
buttonLeft.addEventListener("click", () => {
  movePawn("left");
});
buttonRight.addEventListener("click", () => {
  movePawn("right");
});
buttonBottom.addEventListener("click", () => {
  movePawn("bottom");
});

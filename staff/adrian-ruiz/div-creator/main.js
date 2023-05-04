
/* const filaPar = document.createElement('div')
filaPar.classList.add('fila-par')

console.log(filaPar)

const tablero = document.getElementById('tablero')

tablero.appendChild(filaPar)

const casillaBlanca = document.createElement('div')
casillaBlanca.classList.add('casilla-blanca') */


const tablero = document.getElementById('tablero')

for(let i = 0; i < 8; i++) {
	let fila = document.createElement('div')
	if (i % 2 === 0) {
		fila.classList.add('fila-par')
	}else {
		fila.classList.add('fila-impar')
	}

	for (let j = 0; j < 8; j++){
		let casilla = document.createElement('div')
		if (j % 2 === 0) {
			casilla.classList.add('casilla-blanca')
		} else {
			casilla.classList.add('casilla-negra')
		}

		fila.appendChild(casilla)
	}

	tablero.appendChild(fila)
}

const peon = document.createElement('div')
peon.classList.add('peon')
tablero.appendChild(peon)
let peonTop = 200
let peonLeft = 220
peon.style.top = peonTop + 'px'
peon.style.left = peonLeft + 'px'

const buttonTop = document.getElementById('button-top')
const buttonLeft = document.getElementById('button-left')
const buttonRight = document.getElementById('button-right')
const buttonBottom = document.getElementById('button-bottom')

buttonTop.addEventListener('click', () => {
	peonTop = peonTop - 50
	peon.style.top = peonTop + 'px'
})
buttonLeft.addEventListener('click', () => {
	console.log('hi left')
	peonLeft = peonLeft - 50
	peon.style.left = peonLeft + 'px'
})
buttonRight.addEventListener('click', () => {
	console.log('hi right')
	peonLeft = peonLeft + 50
	peon.style.left = peonLeft + 'px'
})
buttonBottom.addEventListener('click', () => {
	console.log('hi bottom')
	peonTop = peonTop + 50
	peon.style.top = peonTop + 'px'
})


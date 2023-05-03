// VAR / LET / CONST
/* var variable = 5
variable = 7 */

const variable = 5

// ERROR
let variable2 = 105


/* const functionTest = function (value) {
	console.log(value + variable)
	console.log(value + variable2)

}

functionTest(10) */

console.log(variable2)
// STRINGS

const hola = 'hola'
const pepe = "pepe"

console.log(typeof hola)

console.log(hola + ' ' + pepe)


// ARRAY
const names = ["carlos", "pepe", "ruben"]

console.log(names)

names.push('Adrian')

names.splice(0, 0, "Mati")
console.log(names)
const ruben = names[2]

const mati = names.shift()
console.log(mati)

console.log(names)

// OBJECTS

const personsAge = {
	mati: 27,
	ruben: 29
}

personsAge.adrian = 26

console.log(personsAge)

console.log(personsAge.ruben)

const persons = {
	ruben : {
		lastName: 'Herrera',
		age: 29,
		city: 'Benicarlo'
	},

	mati: {
		lastName: 'Figueroa',
		age: 27,
		city: 'Benicarlo'
	}
}

console.log(persons)
console.log(persons.ruben.lastName)

// IFs

const x = 10
const y = 5

/* if (x > y) {
 console.log('Es mayor')
} */

const compare = function (a, b) {
	if (a > b) console.log('Es mayor')
	else if (a > b) return console.log('Es menor')
	else return console.log('Es igual')

}

compare(x, y)

console.log('es menor')

// BUCLES

// FOR

let repeticiones = 5

for(let i = 0; i <= repeticiones; i++) {
	console.log(i * repeticiones)
}

while(repeticiones > 4) {
	repeticiones--
	console.log(repeticiones)
}

const numbers = [10, 20, 5, 15, 3, 30]

const numbersUnder10 = numbers.forEach(number => {
	if (number > 10) return 
	numbers[1] = 100
	console.log(number)
	return number
});
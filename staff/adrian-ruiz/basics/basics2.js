// VAR / LET / CONST
const pepe = "pepe"
let pepe2 = "pepe2"
var pepe3 = "pepe3"

// STRINGS
pepe2 = pepe2 + ' ' + pepe3

console.log(pepe2)

const numbers = [5, 10]
numbers.push(20)

console.log(numbers)

// OBJECTS

const personsAge = {
	ruben : 29,
	mati : 27
}

console.log(personsAge)
console.log(personsAge.mati)

const persons = {
	ruben: {
		age: 29,
		lastname: 'Herrera',
		hobbies: ['anime', 'videojuegos']
	}
}

// persons.ruben.hobbies.push('Cocinar')
/* COMENTARIOS 
asdad
dasd
dasd
*/



// IFs
const b = '5'
const a = 5
if (a > b) {
	persons.ruben.hobbies.push('Cocinar')
} else if (a === b) {
	persons.ruben.hobbies.push('Beber', 'Cocinar')
} else {
	persons.ruben.hobbies = ['Beber']
}

console.log(persons.ruben.hobbies)

// BUCLES
const bucle = function(startNumber) {
for (let i = startNumber; i <= 5 ; i++) {
	console.log(i)
}
}

bucle(3)

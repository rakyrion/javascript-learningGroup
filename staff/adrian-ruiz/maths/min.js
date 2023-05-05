
/* const ruben = 29
const mati = 26

const result = Math.min(ruben, mati)

console.log(result) */

// TODO: función propia de min

const minFunction = function (a, b) {
	// IMPLEMENT RETURN MIN VALUE
	if (a < b) return a
	else if (b < a) return b
	else return a
}

const minFunction2 = function () {
	let minValue
	for(let i = 0; i < arguments.length; i++){
		let tempValue 
		if(arguments[i] < arguments[i + 1]) {
			tempValue = arguments[i]
		} else {
			tempValue = arguments[i + 1]
		}
		if (i === 0 ) minValue = tempValue
		if (tempValue < minValue) minValue = tempValue
		
	}

	return minValue
}

console.log(minFunction2 (5, 10, 20, 3, 13, 7))

console.log(Math.min(5, 10, 20, 3, 13, 7))
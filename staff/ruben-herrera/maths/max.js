// const minFunction = function (a, b) {
// 	// IMPLEMENT RETURN MIN VALUE
// 	if (a > b) return a
// 	else if (b > a) return b
// 	else return a
// }

const maxFunction = function () {
	let maxValue
	
	for(let i = 0; i < arguments.length; i++){
		let tempValue 
		if(arguments[i] > arguments[i + 1]) {
			tempValue = arguments[i]
		} else {
			tempValue = arguments[i + 1]
		}
		if (i === 0 ) maxValue = tempValue
		if (tempValue > maxValue) maxValue = tempValue
		
	}

	return maxValue
}

console.log(maxFunction (5, 10, 20, 3, 13, 7))
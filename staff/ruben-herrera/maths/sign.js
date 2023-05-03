function signFunction(value) {
    // TODO ...
    value = +value
        
        if(value > 0) return 1
        else if (value < 0) return -1
        else if (value == 0) return +0
        else if (value == -0) return -0
        else return NaN
}

// tests

console.log(signFunction(3));
// 1

console.log(signFunction(-3));
// -1

console.log(signFunction(0));
// 0

console.log(signFunction('-3'));
// -1
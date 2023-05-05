function concat() {
  let result;
  for (let i = 0; i < arguments.length; i++) {
    if (i === 0) {
      result = arguments[i];
    } else {
      result = result + arguments[i].toString();
    }
  }

  return result;
}

console.log(concat("Hola", "Mundo", "Cruel", "O no tanto"));

console.log(concat(true, false, 4, 5));

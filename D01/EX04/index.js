function modulo(numberA, numberB) {
  if (numberA > numberB && numberA % numberB !== 0) {

    let moduloAB = numberA % numberB;

    console.log(`The number ${numberA} is bigger than ${numberB}`);
    console.log(`The modulo of ${numberA} % ${numberB} is ${moduloAB}`);
  } else if (numberA === numberB) {
    console.log(`The number ${numberA} is equal to ${numberB}`);
  } else if (numberA < numberB) {
    console.log(`The number ${numberA} is less than ${numberB}`);
  } else {
    console.log(`The number ${numberA} is bigger than ${numberB}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };

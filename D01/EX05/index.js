let result = "";

function moduloEx5(numberA, numberB) {
  if (numberA > numberB) {
    result = `The number ${numberA} is bigger than ${numberB}`;

    let moduloAB = numberA % numberB;

    if (moduloAB !== 0) {
      result = `The number ${numberA} is bigger than ${numberB}. But the modulo of ${numberA} % ${numberB} is ${moduloAB}`;
    }
  } else if (numberA === numberB) {
    result = `The number ${numberA} is equal to ${numberB}`;
  } else {
    result = `The number ${numberA} is less than ${numberB}`;
  }

  console.log(result);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };

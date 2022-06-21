function compareNumbers(numberA, numberB) {
  if (numberA > numberB) {
    console.log(`The number ${numberA} is bigger than ${numberB}`);
  } else if (numberA === numberB) {
    console.log(`The number ${numberA} is equal to ${numberB}`);
  } else {
    console.log(`The number ${numberA} is less than ${numberB}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { compareNumbers };

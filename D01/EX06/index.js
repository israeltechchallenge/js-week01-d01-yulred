let result = "";

function moduloEx6() {
  if (number > comparer) {
    result = `The number ${number} is bigger than ${comparer}`;

    let modulo = number % comparer;

    if (modulo !== 0) {
      result = `The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${modulo}`;
    }
  } else if (number === comparer) {
    result = `The number ${number} is equal to ${comparer}`;
  } else {
    result = `The number ${number} is less than ${comparer}`;
  }

  document.getElementById("output").innerText = result;
}

moduloEx6(number, comparer);
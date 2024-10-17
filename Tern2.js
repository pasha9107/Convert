function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  let result = '';

  if (a > 10) {
    result += 'a is bigger than 10';
  } else {
    result += 'a is less than or equal to 10';
    if (a === 5) {
      result += ' an example of a special case';
    }
  }

  if (a === 15) {
    result += ' but a is not 15';
  }

  if (a > 5) {
    result += ' and a is greater than 5';
  } else {
    result += ' and a is less than or equal to 5';
  }

  if (a % 2) {
    result += ' and a is odd';
  } else {
    result += ' and a is even';
  }

  console.log(result);
  switch (true) {
    case (a > 10):
      result += 'a is bigger than 10';
      break;
    default:
      result += 'a is less than or equal to 10';
      if (a === 5) {
        result += ' an example of a special case';
      }
      break;
  }

  // Проверка на равенство
  if (a === 15) {
    result += ' but a is not 15';
  }

  // Проверка на больше или меньше
  switch (true) {
    case (a > 5):
      result += ' and a is greater than 5';
      break;
    default:
      result += ' and a is less than or equal to 5';
      break;
  }

  // Проверка на четность
  switch (a % 2) {
    case 0:
      result += ' and a is even';
      break;
    default:
      result += ' and a is odd';
      break;
  }

  console.log(result);
}
manyChecks();



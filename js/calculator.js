function calculator(string) {

  const digits = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'VI': 6,
    'VII': 7,
    'VIII': 8,
    'IX': 9,
    'X': 10,
  };

  let arr = string.split(' ');
  let a;
  let b;
  let symb = arr[1];
  let arrRome = [];

  if (arr.length === 1) {
    throw Error('Cтрока не является математической операцией!');
  } else if (arr.length !== 3) {
    throw Error('Должно быть два операнда и один оператор!');
  };
  
  const defineIsRomeDigits = () => {
    let arrIsRome = []
    for (let key in digits) {
      if (arr[0] === arr[2]) {
        switch (key) {
        case arr[0]:
          arrIsRome.push(digits[key]);
        case arr[2]:
          arrIsRome.push(digits[key]);
          break;
        }
      } else {
        switch (key) {
        case arr[0]:
          arrIsRome.push(digits[key]);
          break;
        case arr[2]:
          arrIsRome.push(digits[key]);
          break;
        }
      }
    }
    if (arrIsRome.length === 2){
      return true;
    } else {
      return false;
    }
  };

  const findRomeDigits = () => {
    for (let key in digits) {
      if (arr[0] === arr[2]) {
        switch (key) {
        case arr[0]:
          arrRome.push(digits[key]);
        case arr[2]:
          arrRome.push(digits[key]);
          break;
        }
      } else {
        switch (key) {
        case arr[0]:
          arrRome[0] = (digits[key]);
          break;
        case arr[2]:
          arrRome[1] = (digits[key]);
          break;
        }
      }
    }
    return arrRome;
  };
  
  if (defineIsRomeDigits()) {
    findRomeDigits();
    a = arrRome[0];
    b = arrRome[1];
  } else {
    findRomeDigits();
    if (arrRome.length === 1) {
      throw Error('Используются одновременно разные системы счисления!');
    } else {
      a = +arr[0];
      b = +arr[2];
    }
  };

  const  makeCalculate = (aDigit, bDigit, isRome) => {
    let result;
    switch (symb) {
      case '+':
        result = `${Math.floor(aDigit + bDigit)}`;
        break;
      case '-':
        result = `${Math.floor(aDigit - bDigit)}`;
        break;
      case '/':
        result = `${Math.floor(aDigit / bDigit)}`;
        break;
      case '*':
        result = `${Math.floor(aDigit * bDigit)}`;
        break;    
      default:
        throw Error('Недопустимый вид оператора!');
    }
    if (isRome) {
      if (result <= 0) {
        return '';
      } else {
        return result;
      }
    } else {
      return result;
    }
  };

  const makeAnswerInRome = (answer) => {
    if (answer <= 0) {
      return '';
    }
    let result = '';
    for (let key in digits) {
      while (answer >= digits[key]) {
        result +=key;
        answer -=digits[key]
      }
    }
    return result;
  }

  if (a !== 0 && a <= 10 &&  b !== 0 && b <= 10) {
    return console.log(makeCalculate(a, b, defineIsRomeDigits()));
  } else {
    throw Error('Допустимые значения от 1 до 10!');
  };



}

//calculator('I - X');
calculator('X - I');
/* function calculator(string) {

  const digits = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10, };

  let arr = string.split(' ');
  let a, b;
  let symb = arr[1];

  if (arr.length === 1) {
    throw Error('Cтрока не является математической операцией!');
  } else if (arr.length !== 3) {
    throw Error('Должно быть два операнда и один оператор!');
  };

  const findRomeDigits = () => {
    let arrRome = [];
    for (let key in digits) {
      if (arr[0] === arr[2]) {
        switch (key) {
        case arr[0].toUpperCase():
          arrRome.push(digits[key]);
        case arr[2].toUpperCase():
          arrRome.push(digits[key]);
          break;
        }
      } else {
        switch (key) {
        case arr[0].toUpperCase():
          arrRome[0] = (digits[key]);
          break;
        case arr[2].toUpperCase():
          arrRome[1] = (digits[key]);
          break;
        }
      }
    }
    return arrRome;
  };

  const defineIsRomeDigits = () => findRomeDigits().length === 2 ? true : false;
  
  if (defineIsRomeDigits()) {
    a = findRomeDigits()[0];
    b = findRomeDigits()[1];
  } else {
    if (findRomeDigits().length === 1) {
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

  const makeAnswerInRome = (arabian) => {
    let arabianArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let romanArray = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
      
    if (!arabian) return "";
    let rezult = "";
    let i = arabianArray.length - 1;
    while (arabian > 0) {
        if (arabian >= arabianArray[i]) {
            rezult += romanArray[i];
            arabian -= arabianArray[i];
        }
        else i--;
    }
    return rezult;
  }

  if (a !== 0 && a <= 10 &&  b !== 0 && b <= 10) {
    if (defineIsRomeDigits()) {
      return console.log(makeAnswerInRome(makeCalculate(a, b, defineIsRomeDigits())));
    } else {
      return console.log(makeCalculate(a, b, defineIsRomeDigits()));
    }
  } else {
    throw Error('Допустимые значения от 1 до 10!');
  };

}

//calculator('I - X');
calculator('5 - 1'); */
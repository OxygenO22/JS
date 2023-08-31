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
  }

  

  let arr = string.split(' ');

  if (arr.length === 1) {
    throw Error('Cтрока не является математической операцией!');
  } else if (arr.length !== 3) {
    throw Error('Должно быть два операнда и один оператор!');
  }  
  
  let a = +arr[0];
  let b = +arr[2];
  let symb = arr[1];


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const findRomeDigits = () => {
    for (let key in digits) {
      if (a === key) {
         a = digits[key];
      } 
      if (b === key) {
         b = digits[key];
      }
    }
    return a, b;
  }

  const  makeCalculate = () => {
    let result;
    switch (symb) {
      case '+':
        result = `${Math.floor(a + b)}`;
        break;
      case '-':
        result = `${Math.floor(a - b)}`;
        break;
      case '/':
        result = `${Math.floor(a / b)}`;
        break;
      case '*':
        result = `${Math.floor(a * b)}`;
        break;    
      default:
        throw Error('Недопустимый вид оператора!');
    }

    if (result <= 0) {
      return '';
    } else {
      return result;
    }
  }

 if (a !== 0 && a <= 10 &&  b !== 0 && b <= 10) {
   return console.log(makeCalculate());
  }  else {
    throw Error('Допустимые значения от 1 до 10!');
  }


   
}

calculator('1 + 10');
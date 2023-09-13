//----------------------------- Массив -----------------------------//

//Clone array
/* let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let arr1;
let arrClone = [...vegetables];
let getArray = (arr) => {
    //1 return arr1 = arr.slice();
    //2 return arr1 = arr.join(", ");
}
// 1 console.log(Array.isArray(arr1))
//getArray(vegetables);
//console.log(typeof arr1)
console.log(arrClone) */

// :
/* const num = prompt('Введите число', 525);
let arr1 = [];
let colonOdd = (num) => {
    let arr = num.toString().split('');
    arr1 = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
       if ((arr[i - 1] % 2 !== 0) && (arr[i] % 2 !== 0)) {
        arr1.push(':' + arr[i]);
       } else {333
        arr1.push(arr[i]);
       }
    }
    return arr1.join('');
}
 console.log(colonOdd(num)); */

 // camel case
 /* const stroca = 'КаЖдЫй ОхОтНиК';
 let arr1 = [];
 let changeRegister = (stroca) => {
    let arr = stroca.split('');
    for (item of arr) {
        if (item === item.toUpperCase()) {
            arr1.push(item.toLowerCase());
        } else {
            arr1.push(item.toUpperCase());
        }
    }
    return arr1.join(" ");
 }  */

 const stroca = 'КаЖдЫй ОхОтНиК';

 let changeString = (string) => {
    let newArr = [];
    let arr = stroca.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            newArr.push(arr[i].toLowerCase())
        } else {
            newArr.push(arr[i].toUpperCase())
        }
    }
    return console.log(newArr.join(''))
 }

 changeString(stroca);

 

 // del duplicates
/* var arr = ["php", "Php", "css", "css", "script", "script", "html", "html", "java"];
let arrRes = [];
let delDupl = (arr) => {
    let arr1 = arr.join(" ").toLowerCase().split(" ");
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr1[i + 1]) {
            arrRes.push(arr1[i]);
        }
    }
    console.log(arrRes);
}
delDupl(arr); */

// shuffle array
/* let array = [0,1,2,3,4,5,6,7,8,9];
let shuffleArray = (array) => {
   return console.log(array.sort( (a, b) => a - (Math.random()*10)*b));
}
shuffleArray(array); */

// get First elem
/* let array = [0,1,2,3,4,5,6,7,8,9];
let getFirst = (array, n) => {
   if (array == null) return false;
   if (n == null) return array.at(0);
    return console.log(array.slice(0, n));
}
getFirst(array, 4);
getFirst(array, 2);
getFirst(array, 7);
getFirst(array, -5); */

//summ arr
/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let arr3 = [];
let getSumm = (arr1, arr2) => {
let count;
  if (arr1.length > arr2.length) {
    count = arr1.length;
  } else {
    count = arr2.length;
  }
      for (let i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
            if (arr1[i] === undefined) {
              arr1.push(0);
            }
        }
        arr3.push(arr1[i] + arr2[i]);
      }
      console.log(arr3);
}
getSumm(arr1, arr2); */

// count identic
/* let arr = [15,14,13,19,13,14,14,14,7,9,9];
let countIdentic = (arr) => {
    let res = [];
    let resFin = [];
    let arrSort = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arrSort[i] === arrSort[i + 1]) {
            res.push(arrSort[i]);
        }
    }
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== res[i + 1]) {
            resFin.push(res[i]);
        }
    }

    console.log(`[${resFin}], length = ${resFin.length}`);
}
countIdentic(arr); */

//expand ---- .flat(Infinity)
/* let arr = [1, [2], [3, [[4]]],[5,6]];
let expand = (arr) => {
    //return console.log(arr.toString().split(','));
    return console.log(arr.flat(Infinity));
}
expand(arr); */

// union ---- ...new Set
/* let array1 = [5, 2, 1, -10, 8];
let array2 = [5, 2, 1, -9, 3, 7]; 

let union = (array1, array2) => {
     return console.log([...new Set(array1.concat(array2))]);
}
union(array1, array2); */

// different ---- Array.from
/* var arr1 = [1, 2, 'a'];
var arr2 = [1, 2, 3, 4, 'b']; 

const arrayDiff = (arr1, arr2) => Array.from(
arr1.filter(el => !arr2.includes(el))
.concat(arr2.filter(el => !arr1.includes(el)))
)
console.log(arrayDiff(arr1, arr2)); */

// 15 // sort array from - to +
/* let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  
let compareNumbers = (arr) => {
    return console.log(arr.sort((a, b) => a - b));
}
compareNumbers(numbers); */

// 16 // count copy item
/* var arr=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];  
let count = 0;
let max = 1;
let item;
let countCopy = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
            if (max < count) {
                max = count;
                item = arr[i];
            }
        }
        count = 0;
    }
    console.log(`${item} repeat ${max} times`);
}
countCopy(arr); */

// 17 // sum Of Squares array
/* let arr = [1, 2, 3, 4, 5];
let sumOfSquares = (arr) => arr.reduce((sum, cur) => sum + cur*cur, 0);
console.log(sumOfSquares(arr)); */

// 18 // sum and multiplication of array
/* let arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
let sumAndMulOfSquares = (arr) => {
    let summ = arr.reduce((sum, cur) => sum + cur, 0);
    let mult = arr.reduce((sum, cur) => sum * cur, 1);
    return console.log(`summ of array: ${summ}, multiplication of array: ${mult}`)
}
sumAndMulOfSquares(arr); */

// 19 // deleting wrong values from array
/* let array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
let filterFalse = (arr) => arr.filter(item => !!item);
console.log(filterFalse(array)); */

// 20 // sorting array of objects
/* let litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];

let sortObj = (arr) => arr.map(item => item.title).sort();
console.log(sortObj(litmir)); */

// 21 // Find pairs of numbers whose sum is equal to a given value 
/* var number = 5;
var array = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

let findCouple = (array, number) => {
    const store = {};
    const differences = array.map((elem) => number - elem);

    array.forEach((elem, i) => {
        if (differences.indexOf(elem) > -1 && !store[elem]) {
            store[elem] = store[differences[i]] = true;
            console.log(`Ваша пара чисел: ${differences[i]} + ${elem}`)
        }
    })
}
findCouple(array, number); */

// 22 // Find all values of a given property in an array of objects

/* var litmir = [ 
   { author: 'Хэленка', title: 'Улетела сказка'},
   { author: 'Коул Кресли', title: 'Восстание Аркан'},
   { author: 'Райчел Мид', title: 'Золотая лилия'}
   ];

const propertyValue = (array, key) => array.reduce((acc, curr) => acc.concat(curr[key]), [])

console.log(propertyValue(litmir, 'title'));  // Улетела сказка,Восстание Аркан,Золотая лилия
console.log(propertyValue(litmir, 'author')); // Хэленка,Коул Кресли,Райчел Мид  */

// 35 // 
/* let numerics = [5, 7, 2, 9, 3, 1, 8];
let reversSort = (numerics) => numerics.sort((a, b) => a - b).reverse();
console.log(reversSort(numerics)); // [9,8,7,5,3,2,1]  */

// 36 //
/* let a = [1,2,3], b = [4,5,6], c = [7,8,9];
let getArr = (a, b, c) => {
    let res = a.concat(b, c).reverse();
    return console.log(res);
}
getArr(a, b, c); // [9 8 7 6 5 4 3 2 1] */



//----------------------------- Рекурсия -----------------------------// 

// 1 // факториал
/* let factorFunc = (num) => (num > 1) ? num *= factorFunc(num - 1) : num;
console.log(factorFunc(5)); */

// 2 // НОД
/* let getNOD = (a, b) => {
    if (!b) {
        return a;
    } 
    return getNOD(b, a % b);
}
console.log(getNOD(15, 25)); */



//----------------------------- Дата -----------------------------//

// 1 // is object date
/* var is_date = function(input) {
  if ( Object.prototype.toString.call(input) === "[object Date]" )
    return true;
  return false;  
};
console.log(is_date("October 15, 2020 11:13:00"));
console.log(is_date(new Date(76400000)));
console.log(is_date(new Date(88,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 5])); */

// 2 // current day
/* let curDay = (sp) => {
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
}
console.log(curDay('/'));
console.log(curDay('-')); */

//---------------------------------- Sobes Modsen---------------------//

// 1 //
/* var employeeId = '1234abe'; 
(function(){ 
console.log(employeeId); 
var employeeId = '122345'; 
})(); */

// 2 //
/* cоnsole.lоg(1); 
setTimeоut(() => cоnsolе.lоg(2));
Prоmise.resоlve().then(() => cоnsоlе.log(3));
Promise.resоlve().then(() => setTimeоut(() => cоnsole.log(4)));
Prоmise.rеsоlve().then(() => cоnsоlе.log(5)); 
sеtTimeоut(() => cоnsole.lоg(6)); 
cоnsоlе.log(7); */

// 3 //
/* let squаre = { 
sidе: 10, 
аrеa() { 
return this.sidе * this.side; 
}, 
pеrimеtеr: () => 2 * this.sidе 
}; 
consоlе.lоg(squarе.аrеа()); 
consоlе.log(square.pеrimetеr()); */

// 4 // function generator
/* function* number(n) {
    for (let i = 0; i < n; i++) { 
    yield i; 
    } 
}
const num = number(5);
console.log(num.next()); 
console.log(num.next()); 
console.log(num.next()); 
console.log(num.next()); 
console.log(num.next()); 
console.log(num.next());  */

// 5 //
/* vаr fоо = functiоn bаr() { 
rеturn 1; 
} 
cоnsоlе.log(typеоf bаr()); */


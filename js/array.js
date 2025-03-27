///////////////  Array //////////////

//
/* 1. Клонирование массива
Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. */

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {

//    console.log([...arr]); //or
//    console.log(arr.slice());
//    return [...arr];
// }
// var arr1 = arrayClone(vegetables);
// document.writeln(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']

//
/* 2. Преобразование массива в строку
Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами. */

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let str1 = vegetables.join(', ');
// let str2 = vegetables.toString();

// document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
// document.writeln(str2); // "Капуста, Репа, Редиска, Морковка"
// console.log(str1); // "Капуста, Репа, Редиска, Морковка"
// console.log(str2); // "Капуста,Репа,Редиска,Морковка"

//
/* 3. Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. */

// const num = prompt('Введите число', 55639217);

// function colonOdd(num) {

//    let arr = num.toString().split('');
//    let newArr = [];

//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {
//          newArr.push(arr[i] + ':');
//       } else {
//          newArr.push(arr[i]);
//       }
//    }
//    console.log(newArr.join(''));
//    return newArr.join('')
// }
// const colon = colonOdd(num)
// document.writeln(colon); // 5:5

//
/* 4. Замена регистра символов
Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]. */

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
// function changeRegister(str) {

//    let arr = str.split('');
//    let newArr = [];
//    for (let item of arr) {
//       if (item == item.toUpperCase()) {
//          newArr.push(item.toLowerCase());
//       } else {
//          newArr.push(item.toUpperCase());
//       }
//    }

//    //or

//    let mapArr = str.split('').map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('');

//    console.log('mapArr: ', mapArr);
//    console.log(newArr.join(''));
//    return newArr.join('');
// }
// document.writeln(changeRegister(str)); // [кАжДыЙ оХоТнИк]

//
/* 5. Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру). */

// const arr = ["php", "php", "php", "css", "css", "script", "script", "html", "html", "java", "ph"];
// function removeDuplicates(arr) {
   
//    let newArr = [];
//    let finalArr = [];
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === arr[i + 1]) {
//          newArr.push("-");
//       } else {
//          newArr.push(arr[i]);
//       }
//    }

//    for (let item of newArr) {
//       if (item != "-") {
//          finalArr.push(item);
//       }
//    }

//    console.log(finalArr);
// }
// result = removeDuplicates(arr);
// //or
// console.log([...new Set(arr)]); // !!!!!!!!!!!!!

// document.writeln(result);       // [php,css,script,html,java,ph]

//
/* 6. Найдите високосные годы
Високосным годом является каждый четвертый год и века начинаются только на высокостные года, отличие високосного года от обычного заключается в появлении 366-го дня. Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне. */

// function chooseYears(start, end) {
//    let yearArray = [];
//    for (let i = start; i <= end; i++) {
//       yearArray.push(i);
//    }

//    return yearArray.filter((year) => ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) && year);
// }

// console.log(chooseYears(2000, 2025)); // [2000,2004,2008,2012,2016]

//
/* 7. Отобразить элементы в случайном порядоке
Используя метод sort перепишите предсталенный ниже код, который с помощью цикла for случайно изменяет порядок расстановки элементов массива. */

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function shuffle(arr) {
//    // for (var i = arr.length - 1; i > 0; i--) {
//    //  var j = Math.floor(Math.random() * (i + 1));
//    //  var temp = arr[i];
//    //  arr[i] = arr[j];
//    //  arr[j] = temp;}

//    let shuffleArray = arr.sort(() => 0.5 - Math.random());
//    console.log(shuffleArray);
//    let sortArray = shuffleArray.sort((a, b) => a - b);
//    console.log(sortArray);
// }
// shuffle(array);


//
/* 8. Убрать вложенность массива */

// let arr = [1, 2, [3, 4, [5, 6]]];
// let arr2 = arr.flat(2);
// let arr3 = arr.flat(Infinity);
// console.log(arr2);
// console.log(arr3);


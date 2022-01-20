///////////////  Array //////////////

//
/* 1. Клонирование массива
Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. */

/* var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {

   console.log([...arr]); //or
   console.log(arr.slice(0));
   return [...arr];
}
var arr1 = arrayClone(vegetables);
document.writeln(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка'] */

//
/* 2. Преобразование массива в строку
Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами. */

/* var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let str1 = vegetables.join(', ');
let str2 = vegetables.toString();

document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
document.writeln(str2); // "Капуста, Репа, Редиска, Морковка" */

//
/* 3. Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. */

/* const num = prompt('Введите число', 55639217);

function colonOdd(num) {

   let arr = num.toString().split('');
   let newArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {
         newArr.push(arr[i] + ':');
      } else {
         newArr.push(arr[i]);
      }
   }
   return newArr.join('');
}

document.writeln(colonOdd(num)); // 5:5 */
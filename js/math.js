///////////////  MATH //////////////

//
/* 1. Примите два целых числа и отобразите их сумму
Напишите функцию JavaScript, которая принимает два целых числа и отображает их сумму. */

/* function getSumm(a, b) {
   return document.writeln(`Summ: ${a} + ${b} = ${a + b}`);
}
getSumm(3, 5); */

//
/* 2. Преобразуйте двоичное число в десятичное
Напишите функцию JavaScript для преобразования двоичного числа в десятичное.

Пример ввода: document.write(bin_to_dec ('110011')); document.write(bin_to_dec ('100')); 51 4 */

/* function getNumInTen(a, base) {
   if (isNaN(parseInt(a, base))) return 0;
   return console.log(parseInt(a, base)); //document.writeln(parseInt(a, base));
}
getNumInTen('110011', 2);
getNumInTen('100', 2); */

//
/* 3. Преобразуйте десятичное число в двоичное, шестнадцатеричное и восьмеричное число
Напишите функцию JavaScript для преобразования десятичного числа в двоичное, шестнадцатеричное или восьмеричное число.
Пример ввода: document.write(dec_to_bho (120, 'B')); document.write(dec_to_bho (120, 'H')); document.write(document.write(120, 'O')); "1111000" "78" "170" */

/* console.log(120..toString(2));
console.log(120..toString(8));
console.log(120..toString(16)); */

//
/* 4. Генерировать случайное целое число
Напишите функцию JavaScript для генерации случайного целого числа. */

/* function getRandNum(num) {
   return alert('Your happy number is: ' + Math.floor((Math.random() * 100 + num)));
}
getRandNum(prompt('Enter the number of your birthday:')); */

//
/* 5. Форматирование числа до указанных десятичных знаков
Напишите функцию JavaScript для форматирования числа с точностью до указанного десятичного знака.
Пример ввода:
document.write(decimals(3.100212, 2));
document.write(decimals(3.100212, 3));
document.write(decimals(3100, 2));
"3.10"
"3.100"
"3100.00" */

/* function showRoundNum(num, round) {
   return document.writeln(num.toFixed(round) + '<br>');
}
showRoundNum(3.100212, 2)
showRoundNum(3.100212, 3)
showRoundNum(3100, 2) */

//
/* 6., 7. Найти наибольшее и наименьшее значение в массиве
Напишите функцию JavaScript, чтобы найти максимальное значение в массиве.
Пример ввода:
document.write(max ([12,34,77,1]));
document.write(max ([- 18, -34,0, -56, -1]));
77
0 */

/* function showMaxNum(arr) {
   if (Array.isArray(arr) == false) {
      return document.write(Array.isArray(arr) + ': this function work only with arrays');
   }
   arr.sort((a, b) => a - b);
   return document.write(`Max num is: ${arr[arr.length - 1]}; <br> Min num is: ${arr[0]}; <br>`);
}
showMaxNum([12, 34, 77, 1]);
showMaxNum([- 18, -34, 0, -56, -1]);
showMaxNum('- 18, -34, 0, -56, -1'); */

//
/* 8. Наибольший общий делитель (НОД) двух целых чисел
Напишите функцию JavaScript, чтобы получить наибольший общий делитель (НОД) двух целых чисел.
Примечание:
Наибольшим общим делителем (далее НОД) двух целых чисел a и b, одновременно не равных нулю, называется такое наибольшее целое число d, на которое a и b делятся без остатка.
Тестовые данные:
document.write(gcd_two_numbers(12, 13));
document.write(gcd_two_numbers(9, 3));
Вывод:
1
3 */

/* function NOD(a, b) {
   if (!b) {
      return Math.abs(a);
   }
   return NOD(Math.abs(b), a % b);
}
document.writeln(NOD('12', 13));
document.write('<br>');
document.writeln(NOD(9, -3)); */


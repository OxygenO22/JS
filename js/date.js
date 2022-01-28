///////////////  DATE //////////////

//
/* 1. Проверьте, является ли 'input' объектом даты или нет
Напишите функцию JavaScript, чтобы проверить, является ли 'input' объектом даты или нет.
Пример ввода:
document.write(is_date(new Date(86400000)));
Вывод:
true */

/* function isDate(input) {
   let res = (Object.prototype.toString.call(input) === '[object Date]') ? true : false;
   return res;
}
document.write(isDate("October 15, 2020 11:13:00"));
document.write("<br>");
document.write(isDate(new Date(76400000)));
document.write("<br>");
document.write(isDate(new Date(88, 5, 24, 11, 33, 30, 0)));
document.write("<br>");
document.write(isDate([1, 2, 4, 5])); */

//
/* 2. Получите текущую дату
Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
Пример ввода:
document.write(curday('-'));
Вывод:
"03-15-2021" */

/* function showCurDate(sb) {
   let currentData = new Date();
   let dd = currentData.getDate();
   let mm = currentData.getMonth() + 1;
   let yyyy = currentData.getFullYear();
   if (dd < 10) dd = '0' + dd;
   if (mm < 10) mm = '0' + mm;
   return (dd + sb + mm + sb + yyyy);
}
document.write(showCurDate('/'));
document.write('<br>');
document.write(showCurDate('-')); */

//
/* 3. Узнать количество дней в месяце
Напишите функцию JavaScript, чтобы получить количество дней в месяце.
Пример ввода:
document.write(getDaysInMonth(9, 2021));
Вывод:
30 */

function getDaysInMonth(mm, yyyy) {
   let date = new Date();

}
console.log('Hello')
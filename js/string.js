///////////////  STRING //////////////

//
/* 1. Преобразовать строку в массив слов
Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */

/* var str = 'Каждый охотник желает знать';
function stringToarray(str) {

   return str.split(' ');

};

var arr = stringToarray(str);

document.writeln(arr);
console.log(arr) */

//
/* 2. Удаление указанного количества символов из строки
Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */

/* var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {

   return str.slice(0, length);

};

document.writeln(delete_characters(str, 7));
 */

//
/* 3. Вставить тире между словами строки
Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр. */

/* var str = "HTML JavaScript PHP";

function insert_dash(str) {

   return str.split(' ').join('-').toUpperCase();

}

document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log(insert_dash(str)) */

//
/* 4. Сделать первую букву строки прописной
Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний. */

/* var str = "string not starting with capital";

function cursive_letter(str) {

   return str.charAt(0).toUpperCase() + str.slice(1);
}

document.writeln(cursive_letter(str)); // "String not starting with capital"
console.log(cursive_letter(str)) */

//
/* 5. Первая буква каждого слова заглавная
Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */

/* var str = "каждый охотник желает знать";

function capitalize(str) {
   let arr = str.split(' ');
   let arrs;
   let newArr = [];
   for (items of arr) {
      arrs = items.charAt(0).toUpperCase() + items.slice(1);
      newArr.push(arrs);
   }
   return newArr.join(' ');
}

document.writeln(capitalize(str)); // "Каждый Охотник Желает Знать"
console.log(capitalize(str)) */

//
/* 6. Смена регистра символов строки
Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк». */

/* var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {

   let arr = str.split('');
   let newArr = [];
   for (items of arr) {
      if (items.codePointAt(0) == items.toUpperCase().codePointAt(0)) {
         newArr.push(items.toLowerCase());
      } else {
         newArr.push(items.toUpperCase());
      }
   }
   return newArr.join('');
}

document.writeln(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"
console.log(change_register(str)); */

//или
/* var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
var new_str = "";
var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}

document.writeln(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ" */

//
/* 7. Удалить все не буквенно-цифровые символы
Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
 */
/* var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know ;:{}how it#!work";

function remove_char(str) {

   let arr = str.split('');
   let sortItemArr = [];
   let finArr = [];

   for (item of arr) {
      if (item.codePointAt() >= 65 && item.codePointAt() <= 90 || item.codePointAt() >= 97 && item.codePointAt() <= 122 || item.codePointAt() >= 48 && item.codePointAt() <= 57 || item.codePointAt() == 32) {
         sortItemArr.push(item);
      } else {
         sortItemArr.push(' ');
      }
   }

   let str2 = sortItemArr.join('');
   let arr2 = str2.split(' ');
   for (sortItem of arr2) {
      if (sortItem.codePointAt() >= 65 && sortItem.codePointAt() <= 90 || sortItem.codePointAt() >= 97 && sortItem.codePointAt() <= 122 || sortItem.codePointAt() >= 48 && sortItem.codePointAt() <= 57) {
         finArr.push(sortItem);
      }
   }
   return finArr.join(' ');
};

document.writeln(remove_char(str)); // "every hunter wishes to know"
console.log(remove_char(str)); // "every hunter wishes to know" */

//
/* 8. Нулевое заполнение строки
Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента. */

/* function zeros(num, len, sign) {

   let nulCount = len - num.toString().length;
   let si = (sign != undefined) ? sign : '';
   let arr = [];

   for (let i = 0; i < nulCount; i++) {
      arr.push(0);
   }
   let nulStr = arr.join('');

   return `${si + nulStr + num};`;

};

document.writeln(zeros(145, 5, '-')); // -00145
document.writeln(zeros(33, 4, '+'));  // +0033
document.writeln(zeros(33, 4));       // 0033
document.writeln(zeros(27, 7, '+'));       // +0000027  */

//
/* 9. Сравнение строк без учёта регистра
Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
 */
/* function comparison(str1, str2) {
   return str1.toLowerCase() === str2.toLowerCase();
};

document.writeln(comparison('string', 'StRiNg')); // true
document.writeln(comparison('ABCDe', 'AbcdW'));   // false */

//
/* 10. Поиск без учета регистра
Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов. */

/* function insensitive_search(str1, str2) {
   let res = (str1.toLowerCase().indexOf(str2.toLowerCase()) >= 0) ? 'Yes' : 'No';
   return res;
};

document.writeln(insensitive_search('Изучаю JavaScript', 'javascript'));
// Соответствует
document.writeln(insensitive_search('Изучаю JavaScript', 'javascriptS'));
// Не соответствует   */

//
/* 11. ВерблюжийРегистр (CamelCase)
Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы. */

/* str = "hEllo woRld";
function initCap(str) {
   let arr = str.toLowerCase().split(' ');
   let newArr = [];
   for (let items of str) {
      newArr.push(items.charAt(0).toUpperCase() + items.slice(1));
   }
   return newArr.join('');
};

document.writeln(initCap(str)); // HelloWorld */
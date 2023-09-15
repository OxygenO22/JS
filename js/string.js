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
let delete_characters = (str, length) => str.slice(0, length);
console.log(delete_characters(str, 7)); */

//
/* 3. Вставить тире между словами строки
Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр. */

/* let str = "HTML JavaScript PHP";
let insert_dash = (str) => str.split(' ').join('-').toUpperCase();
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log(insert_dash(str)) */

//
/* 4. Сделать первую букву строки прописной
Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний. */

/* let str = "string not starting with capital";

let cursive_letter = (str) =>
   str.charAt(0).toUpperCase() + str.slice(1);
   str[0].toUpperCase() + str.slice(1);
   str.at(0).toUpperCase() + str.slice(1);

document.writeln(cursive_letter(str)); // "String not starting with capital"
console.log(cursive_letter(str)) */

//
/* 5. Первая буква каждого слова заглавная
Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */

/* let str = "каждый охотник желает знать";

let capitalize = (str) => {
   //let arr = str.split(' ');
   //let arrs;
   //let newArr = [];
   //for (items of arr) {
   //arrs = items.charAt(0).toUpperCase() + items.slice(1);
   //arrs = items[0].toUpperCase() + items.slice(1);
   //newArr.push(arrs);
   //}
   //return newArr.join(' ');
   //or
   let result = str.split(' ').map(items => items.at(0).toUpperCase() + items.slice(1));
   return result.join(' ');
   
}

document.writeln(capitalize(str)); // "Каждый Охотник Желает Знать"
console.log(capitalize(str)) */

//
/* 6. Смена регистра символов строки
Напишите функцию change_register(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк». */

/* var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {

   //let arr = str.split('');
   //let newArr = [];
   //for (items of arr) {
   //   if (items == items.toUpperCase()) {
   //      newArr.push(items.toLowerCase());
   //   } else {
   //      newArr.push(items.toUpperCase());
   //   }
   //}
   //return newArr.join('');
   //or
   let result = str.split("").map(items => items === items.toUpperCase() ? items.toLowerCase() : items.toUpperCase());
   return result.join("");
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
Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента. */

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
   for (let items of arr) {
      //newArr.push(items.charAt(0).toUpperCase() + items.slice(1));
      newArr.push(items[0].toUpperCase() + items.slice(1));
   }
   return newArr.join('');
};

document.writeln(initCap(str)); // HelloWorld */

//
/* 12. Змеиный_регистр (snake_case)
Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы. */

/* function initSnake(str) {
   let arr = str.split('');
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i].toUpperCase() && i != 0) {
         newArr.push('_' + arr[i].toLowerCase())
      } else {
         newArr.push(arr[i].toLowerCase());
      }
   }
   return newArr.join('');
};

document.writeln(initSnake('HelloWorld')); // hello_world */

//
/* 13. Повторить строку n раз
Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. */

/* function repeatStr(str, n) {
   let newStr = '';
   for (let i = 0; i < n; i++) {
      newStr += str;
   }
   return newStr;
};

document.writeln(repeatStr('Hello! kh ghscdhg nnh', 3)); // Hello!Hello!Hello! */

//
/* 14. Получить имя файла
Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу. */

//var pathname = "/home/user/dir/file.txt";

/* function path(pathname) {
   let arr = pathname.split('/').pop();
   return arr;
   //or
   //return  arr[arr.length - 1];
};

document.writeln(path(pathname)); // file.txt */

//
/* 15. Заканчивается ли строка символами другой строки
Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки. */

/* var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
   return this.includes(substring);
};

document.writeln(str.endsWith(str1)); // false
document.writeln(str.endsWith(str2)); // true */

//
/* 16. Подстрока до/после указанного символа
Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos. */

/* var str = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {

};

document.writeln(getSubstr(str, '—', 'after')); // Наука о небесных телах
document.writeln(getSubstr(str, 'Н', 'before')); // Астрономия — */

//
/* 17. Вставить подстроку в указанную позицию строки
Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
 */
/* function insert(str, substr, pos) {
   let arr = str.split(' ');
   console.log(arr.splice(pos, 0, substr));
   return str.split(' ').splice(pos, 0, substr).join('');


}; */

//document.writeln(insert('Казнить нельзя')); // Казнить нельзя
//document.writeln(insert('Казнить нельзя', 'Помиловать ')); // Помиловать Казнить нельзя
//document.writeln(insert('Казнить нельзя', 'Помиловать ', 1)); // Казнить Помиловать нельзя

//
//----------------------------------- polindrom
/* //function polindrom(str) {
//   return (str.split("").join("") === str.split("").reverse().join("")) ? "Polindrom" : "This is not polindrom";
//}
//or
const polindrom = (str) => (str.split("").join("") === str.split("").reverse().join("")) ? "Polindrom" : "This is not polindrom";
console.log(polindrom("тест"));
console.log(polindrom("шалаш")); */

//
//----------------------------------- shortest subString
/* //function findShort(str) {
//   return str.split(" ").sort((a, b) => a.length - b.length)[0];
//}
//or
const findShort = (str) => str.split(" ").sort((a, b) => a.length - b.length)[0];
console.log(findShort("strong, first, description, best")); */

//
//----------------------------------- ФИО
/* //function personsFIO(str) {
//let arr = str.split(" ");
//let newArr = [];
//for (let item of arr) {
//   newArr.push(item[0].toUpperCase() + '.')
//}
//return newArr.join("");
//or
//return str.split(" ").map(item => `${item[0].toUpperCase() + "."}`).join("");

//}
//or
const personsFIO = (str) => str.split(" ").map(item => `${item[0].toUpperCase() + "."}`).join("");
console.log(personsFIO("elon mask")); */

//
//----------------------------------- min/max value
/* //function valueMinMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
//}
//or
const valueMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];
console.log(valueMinMax([2, 5, 8, 1, 100, 0, 4])); */

//
//----------------------------------- Big first letter in the every word
/* const bigFirstLetter = (str) => str.split(" ").map(item => `${item[0].toUpperCase() + item.slice(1)}`).join(" ");
console.log(bigFirstLetter("Lorem ips doy ho kbdk")); */

//
//----------------------------------- "abc" to "A-Bb-Ccc"
/* const accum = (str) => str.toUpperCase().split("").map((el, i) => `${el + el.repeat(i).toLowerCase()}`).join("-");
console.log(accum("cadklsl")) */

//
//----------------------------------- 1-n, number/3 = foo, number/5 = bar, number/3/5 = foobar
/* const changeNum = (n) => {
   let arr = [];
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         arr.push("foobar");
      }
      else if (i % 3 === 0) {
         arr.push("foo");
      }
      else if (i % 5 === 0) {
         arr.push("bar");
      }
      else {
         arr.push(i);
      }
   }
   return arr.join(", ");
}
console.log(changeNum(15)); */

//
//----------------------------------- some array to one array
/* const oneArray = (...arr) => {
   let array = [...arr];

   let newArr = [];
   for (let i = 0; i < array.length; i++) {
      newArr.push(...arr[i]);
   }
   newArr = new Set(newArr);
   return [...newArr]

}
console.log(oneArray([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])); */

/* function unique(arr) {
   //let uniqueValue = new Set(arr);
   //return [...uniqueValue];
   //or
   return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O */

//
//----------------------------------- return phone number
/* const showPhoneNumber = (num) => {
   //let arr = num.toString().split("");
   //arr.splice(0, 0, "(");
   //arr.splice(4, 0, ")");
   //arr.splice(5, 0, " ");
   //arr.splice(9, 0, "-");
   //return arr.join("");
   //or
   let strNum = num.toString();
   return `(${strNum.slice(0, 3)}) ${strNum.slice(3, 6)}-${strNum.slice(6, 9)}`
}
console.log(showPhoneNumber(123456789)); */

//
//
/* let a = [1, 2];
let b = [3, 4];
let arr = [];
arr.push(...a);
arr.pop();
arr.push(...b);
arr.pop();
let sum = arr.reduce((a, b) => a + b)
console.log(typeof (42.1)) */

//
//----------------------------------- Make as: * 'abc' =>  ['ab', 'c_'], * 'abcdef' => ['ab', 'cd', 'ef']
/* const strTo2symb = (str) => {
   let arr = str.split("");
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
         newArr.push("_");
      } else (
         newArr.push(arr[i])
      )
   }
   return newArr;
}
console.log(strTo2symb("abcd")); */

//
//-----------------------------------
/* const sort = str => str.split(" ").sort((a, b) => a.length - b.length)[0];
console.log(sort("hi mother people not bad socker player")) */

//
//-----------------------------------
/* const name = str => str.split(" ").map(item => item[0]).join(".").toUpperCase() + ".";
console.log(name("bill gates"));  */

//
//-----------------------------------
/* const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
console.log(minMax([1, 5, 7, 2, 10, 503, 0])); */

//
//-----------------------------------
/* let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = (menu) => {
   for (let key in menu) {
      if (typeof menu[key] == 'number') {
         menu[key] *= 2; 
      }
   }
   console.log(menu);
   
}

multiplyNumeric(menu);

console.log(typeof 2) */

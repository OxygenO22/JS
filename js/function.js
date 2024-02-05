///////////////  FUNCTION //////////////

//
/* 1. Переверните число задом наперед
Напишите функцию JavaScript, которая переворачивает число. */

/* const reverse_a_number = (n) => +n.toString().split('').reverse().join('');

document.writeln(reverse_a_number(258961)); // 169852
console.log(reverse_a_number(258961)); // 169852 */

//
/* 2. Проверьте, является ли переданная строка палиндромом или нет
Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом? Палиндром - это слово, фраза или последовательность, которые читаются так же, как вперед, назад, например, level. */

/* function check_Palindrome(str_entry) {
   let str_entryRew = str_entry.split('').reverse().join('');
   if (str_entry.toLowerCase() === str_entryRew.toLowerCase() && str_entry != '') {
      document.writeln(`${str_entry} - палиндром ${'<br>'}`);
   } else {
      document.writeln(`${str_entry} - не палиндром ${'<br>'}`);
   }
}
check_Palindrome('level'); // Запись - палиндром.
check_Palindrome('topot'); // Запись - палиндром.
check_Palindrome('that');  // Вход - это не палиндром.
check_Palindrome('');  // Вход - это не палиндром.
check_Palindrome('a');  // Вход - это не палиндром.
check_Palindrome('aa');  // Вход - это не палиндром.
check_Palindrome('aao');  // Вход - это не палиндром.
check_Palindrome('aoao');  // Вход - это не палиндром.
check_Palindrome('aoa');  // Вход - это не палиндром.
 */

//
/* 3. Функция, которая генерирует все комбинации строки
Напишите функцию substrings(str), которая генерирует все комбинации строки.

Пример строки: 'dog'.

Ожидаемый результат: d, o, do, g, dg, og, dog.
 */
/* function substrings(str) {
   var array1 = [];
   for (var x = 0, y = 1; x < str.length; x++, y++) {
      array1[x] = str.substring(x, y);
   }
   var combi = [];
   var temp = "";
   var slent = Math.pow(2, array1.length);

   for (var i = 0; i < slent; i++) {
      temp = "";
      for (var j = 0; j < array1.length; j++) {
         if ((i & Math.pow(2, j))) {
            temp += array1[j];
         }
      }
      if (temp !== "") {
         combi.push(temp);
      }
   }
   document.writeln(combi.join("\n"));
}

substrings("dog"); // d, o, do, g, dg, og, dog */

//
/* 4. Вернуть переданную строку с буквами в алфавитном порядке
Напишите функцию alphabet_order(str), которая возвращает переданную строку с буквами в алфавитном порядке.
Пример строки: 'alphabetical'
Ожидаемый результат: 'aaabcehillpt'
Предположим, что символы пунктуации и цифры не включены в переданную строку. */

/* function alphabet_order(str) {
   return str.toLowerCase().split('').sort().join('');
}
document.writeln(alphabet_order("alphabetical")); // "aaabcehillpt" */

//
/* 5. Найти самое длинное слово в строке
Напишите функцию find_longest_word(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке. */

/* function find_longest_word(str) {

   let arr = str.split(' ').sort();
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[0]);
      break;
   }
   return newArr.join();
}

document.writeln(find_longest_word('Web Development Tutorial')); // "Development" */

//
/* 6. Подсчитать количество гласных в строке
Напишите функцию vowel_count(str), которая принимает строку в качестве параметра и подсчитывает количество гласных в строке. */

/* function vowel_count(str) {

   let arr = str.toLowerCase().split('');
   let count = 0;
   for (let item of arr) {
      if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u' || item == 'y') {
         count++;
      }
   }
   return count;
}
document.writeln(vowel_count('Web Development Tutorial')); //9 */

//or
/* function vowel_count(str1) {
   var vowel_list = 'aeiouyAEIOUY';
   var vcount = 0;
   for(var x = 0; x < str1.length ; x++) {
     if (vowel_list.indexOf(str1[x]) !== -1) {
       vcount += 1;
     }
   }
   return vcount;
 }
 document.writeln(vowel_count('Web Development Tutorial')); //9 */


//
function filter_list(l) {
   let array = [];
   return l.map(num => {
      if ((typeof num) != 'string') {
         array.push(num);
      }
   })
}

console.log(filter_list([1, 2, 'a', 'b'])); //[1,2]

//
//function-constructor
/* function Person(first, last, age, eye) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eye;

   this.getFullName = function () {
      return this.firstName + " " + this.lastName;
   };

   this.getBirthYear = function () {
      const currentDate = new Date;
      return currentDate.getFullYear() - this.age;
   };

   this.greet = function () {
      const greeting = `Hello, my name is ${this.getFullName()}, I was born in ${this.getBirthYear()}`;
      console.log(greeting);
   }
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Ray", 48, "green");

myFather.greet();
myMother.greet();

console.log(myFather);
console.log(myMother); */

//
//destructuring
/* let [a, b] = [10, 20];
console.log(a, b);

let [c, d, ...rest] = [1, 2, 3, 4, 5];
console.log(c, d, rest);

let { e, f } = { e: 10, f: 20 };
console.log(e, f);

let { j, h, ...ost } = { g: 1, h: 2, j: 3, k: 4, l: 5 };
console.log(j, h, ost); */
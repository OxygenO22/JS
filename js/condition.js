///////////////  CONDDITION //////////////

//
/* 1. Примите два целых числа и отобразите большее
Напишите программу на JavaScript, которая принимает два целых числа и отображает большее. */

/* function showNum(a, b) {
   if (a > b) {
      return console.log(a);
   } else if (b > a) {
      return console.log(b)
   } else {
      return console.log(`${a}, ${b}`)
   }
}
showNum(17, 19); */

//
/* 2. Найдите знак произведения трех чисел
Напишите условное выражение JavaScript, чтобы найти знак произведения трех чисел (+ или -). */

/* function showSign(a, b, c) {
   if (a * b * c >= 0) {
      return console.log('Sign: +');
   } else {
      return console.log('Sign: -');
   }
}
showSign(-4, 8, 0);
//Примеры чисел: 4, -8, 8
//Вывод: Знак - */

//
/* 3. Отсортируйте три числа по убыванию
Используйте условный оператор JavaScript для сортировки трех чисел по убыванию.

Примеры чисел: 0, -1, 4
Вывод: 4, 0, -1 */

/* function showBigLess(a, b, c) {
   let arr = [a, b, c];
   arr.sort((a, b) => a - b).reverse();
   arr.forEach((item) => {
      document.writeln(item + ', ');
   });
}
showBigLess(0, -1, 4); */
//or
/* var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
   if (y > z) {
      document.writeln(x + ", " + y + ", " + z);
   }
   else {
      document.writeln(x + ", " + z + ", " + y);
   }
}
else if (y > x && y > z) {
   if (x > z) {
      document.writeln(y + ", " + x + ", " + z);
   }
   else {
      document.writeln(y + ", " + z + ", " + x);
   }
}
else if (z > x && z > y) {
   if (x > y) {
      document.writeln(z + ", " + x + ", " + y);
   }
   else {
      document.writeln(z + ", " + y + ", " + x);
   }
}         */

//
/* 4. Найдите наибольшее из пяти чисел
Напишите условное выражение JavaScript, чтобы найти наибольшее из пяти чисел.

Примеры чисел: -6, -3, -6, 0, -1
Вывод: 0 */

/* function showBiggerNum(a, b, c, d, e) {
   if (a > b && a > c && a > d && a > e) return document.writeln(a);
   if (b > a && b > c && b > d && b > e) return document.writeln(b);
   if (c > a && c > b && c > d && c > e) return document.writeln(c);
   if (d > a && d > b && d > c && d > e) return document.writeln(d);
   if (e > a && e > b && e > c && e > d) return document.writeln(e);
}
showBiggerNum(-6, 5, -6, 0, -1); */

//
/* 5. Напишите цикл for для поиска четных и нечетных чисел
Напишите цикл for в JavaScript, который будет повторяться от 0 до 15. Для каждой итерации он будет проверять, является ли текущее число четным или нечетным.

Пример вывода: 0 - четное
1 - нечетное */

/* for (let i = 0; i <= 15; i++) {
   let a = (i % 2 == 0) ? document.writeln(`${i} even; `) : document.writeln(`${i} odd; `);
} */

//
/* 6. Вычислить средний балл и квалификацию учащихся
Напишите программу на JavaScript, которая вычисляет количество баллов следующих учеников. Затем эти баллы используются для определения квалификации.

Имя студента	Баллы
Степан	80
Игнат	77
Денис	88
Иван	95
Радион	68
Уровень квалификации рассчитывается следующим образом:

Уровень классификации	Классификация
<60	F
<70	D
<80	C
<90	B
<100	А */

/* var students = [['Степан', 80], ['Игнат', 77], ['Денис', 88], ['Иван', 95], ['Радион', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
   Avgmarks += students[i][1];
   var avg = (Avgmarks / students.length);
}

document.writeln("Средняя квалификация: " + avg);

if (avg < 60) {
   document.writeln("Квалификация: F");
}
else if (avg < 70) {
   document.writeln("Квалификация: D");
}
else if (avg < 80) {
   document.writeln("Квалификация: C");
} else if (avg < 90) {
   document.writeln("Квалификация: B");
} else if (avg < 100) {
   document.writeln("Квалификация: A");
} */

//
/* 7. Выполните итерацию целых чисел от 1 до 100
Напишите программу на JavaScript, которая выполняет итерацию целых чисел от 1 до 100. Для кратных трем выведите «wm-» вместо числа, а для кратных пяти выведите «school». Для чисел, кратных трем и пяти, выведите «wm-school». */

/* for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      document.writeln('wm-school' + `<br>`);
   }
   else if (i % 3 === 0) {
      document.writeln('wm-' + `<br>`);
   }
   else if (i % 5 === 0) {
      document.writeln('school' + `<br>`);
   }
   else {
      document.writeln(i + `<br>`);
   }
} */
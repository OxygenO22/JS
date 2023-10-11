//- 30  - 10 per 10

/* for (var i = 0; i < 10; i++) {
  setTimeout(function f() {
    console.log(i)
  })
} */

//+ 29 - [7, 4] 

/* const result = [5, 7, 9].slice(1);
result.pop();
result.push(4);
console.log(result); */

//+ 28 - CookieStorage & LocalStorage

/*  Какое или какие хранилища будут хранить данные даже после закрытие браузера? - LocalStorage, CookieStorage */

//+ 27

/* Что такое семантическая верстка? -  Подход к написанию HTML  с учетом семантики тегов, предполагающий логичную и последовательную иерархию страницы*/

//- 26 - 4

/* let obj = {
  '0': 1,
  0: 2
}
console.log(obj['0'] + obj[0])
console.log(obj['0'])
console.log(obj[0]) */

//- 25 - undefined, world

/* var a = 'hello';
function b() {
  console.log(a);
  var a = 'world';
  console.log(a);
}
b(); */

//+ 24 - display: none

/* Каким значением css свойства display можно скрыть элемент? -  none*/

//+ 23 -  arguments

/* С помощью чего можно обработать любое динамически изменяемое количество аргументов функции - свойства arguments внутри вызванной функции */

//+ 22

/*  DOM - это объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять */

//+ 21

/* Как расшифровывается HTTP? -  Протокол передачи гипертекста  */

//+ 20 - [8, 12, 16]

/* const numbers = [-2, 4, -1, 6, 8];
const result = numbers.filter(n => n > 0).map(n => n * 2);
console.log(result); */


//- 19 - false, нет

/* Что выведет в консоль 'abc' === new String('abc')? 2) Будет ли ответ аналогичен, если === заменить на ==? */

/* console.log('abc' === new String('abc'))
console.log('abc' == new String('abc')) */


//- 18 

/* Что такое HTMLCollection? - Объект с числовыми ключами содержащий DOM элементы и предлставляющий дополнительные методы для работы с коллекцией */

//+ 17

/*  Как активировать срабатывание обработчиков при всплытии события? - Никак, это поведение по умолчанию */


//- 16 - undefined, undefined

/* Что будет выведено в консоль?  */

/* var obj = {
  a: () => {
    console.log(this.prop);
  },
  prop: 1
};

obj.a();
var fn = obj.a.bind(obj);
fn(); */


//+ 15 - id

/* Специфичность (вес) какого css-селектора является наибольшим? */


//- 14 - man, undefined 

/*  Что будет выведено в косноль? */
/* var a = 'hello';
function b() {
  if (false) {
    var a = 'world';
  } else {
    var b = 'man';
  }
  console.log(b);
  console.log(a);
}
b(); */


//- 13 - Пустому новому объекту

/* Чему равняется контекст в момент вызова функции через оператор new? - Пустому новому объекту */
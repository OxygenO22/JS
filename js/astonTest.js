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


//- 12 - NaN, NaN, NaN 

/* Что будет в консоле, после того как три раза нажмем на кнопку? */

/* class GODListener {
  constructor() {
    this.counter = 0;
  }

  handleClick() {
    this.counter += 1;
    console.log(this.counter);
  }
}

const element = document.getElementById('testBtn');
const listener = new GODListener();

element.addEventListener('click', listener.handleClick); */


//- 11 - ['10', '210', '10']
/* Что будет в консоле после исполнения кода? */

/* const str = 'h2h40h';

const result = str
  .split('h')
  .map(s => s + 10) 
  .filter(s => s.length < 4);

  console.log(result) */


  //- 10

  /* Что записывается в свойство [[Scope]] функции? - Текущий LexicalEnvironment или window */


  //+ 9

  /* Что делает метод preventDefault - Отменяет действие события браузера */


  //- 8 - 2

  /* Что будет выведено в консоль? */

  /* console.log(0 || 1 && 2 || 3) */


  //+ 7 

  /* Какой из четырех способов приведет к ожидаемому результату? */

  /* const obj1 = {
    x: 10
  }

  //----1 - Error
  //const obj2 = Object.create(obj1.x);
  //----2 - Error
  //const obj2 = obj1.create('x');
  //----3 - Error
  //const obj2 = obj1.create({x: 10});
  //----4 - Works
  const obj2 = Object.create(obj1);

  console.log(obj2.x) */


  //+ 6 

  /* За что отвечает свойство overflow? - управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину. */

  //- 5 - has

  /*  Какую из четырех строк необходимо дописать, чтобы получить желаемый результат? */

  /* const V_S = new Set(['SUCCESS', 'FINAL', 'DONE']);

  const people = [
    {name: 'Max', age: 20, status: 'IN_PROGRESS'},
    {name: 'Sam', age: 21, status: 'DONE'},
    {name: 'Dan', age: 30, status: 'SUCCESS'},
  ]

  const peopleWVS = people.filter(p => V_S.has(p.status)).map(p => p.name)

  console.log(peopleWVS) // ['Sam', 'Dan'] */


  //+ 4 

  /* Существует ли возможность на странице, полученной с одного домена отправить запрос на другой домен? - Да, можно воспользоваться CORS и указать на стороне сервера дополнительные заголовки HTTP запроса */


  //+ 3 - 3,2,1

  /* Что будет выведено в консоль? */

  /* setTimeout(function timeout() {
    console.log('1');
  }, 0)

  Promise.resolve('2').then(console.log);

  console.log('3'); */

  //+ 2 

  /* Какое будет положение у блока с id="child" внутри блока id="parent"? -  блок child будет горизонтально по центру, а вертикально в верху*/

  //- 1 - 10, underfined

  /* Что будет выведено в консоль? */

  /* async function bar() {
    return Promise.resolve(10);
  }

  async function foo() {};

  const res1 = foo();
  const res2 = bar();

  console.log(res1, res2); */


/* let promise = new Promise(function (resolve) {
   setTimeout(function () {
      resolve("Well done!");
   }, 3000);
});

promise.then(function (result) {
   console.log(result);
}) */


//#1
/*   */

//#2
/* let prom = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let randomNum = Math.round(Math.random() * 5);

      if (randomNum == 0) {
         throw new Error('Error: number / 0')
      } else {
         resolve(`${1 / randomNum}`)
      }
   }, 3000);
});

prom.then(
   function (result) {
      console.log(result)
   },
   function (error) {
      console.log(error)
   },
); */

//цепочки promise
/* let promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
      reject('error');
   }, 3000);
});

promise.then(
   function (result) {
      return result + '1';
   }
).then(
   function (result) {
      return result + '2';
   }
).catch(
   function (error) {
      if (ошибкаРешаема) {
         return 'данные'; // отправляем на следующий then
      } else {
         // ничего не возвращаем или бросаем исключение
      }
   }
).then(
   function (result) {
      // тут решаем ошибку
   }
); */

//array promise

/* let promises = [
   new Promise(resolve => setTimeout(() => resolve(1), 1000)),
   new Promise(resolve => setTimeout(() => resolve(2), 2000)),
   new Promise(resolve => setTimeout(() => resolve(3), 3000)),
];

Promise.all(promises).then((res) => {
   console.log(res); // выведет [1, 2, 3] - результаты всех промисов
}).catch(function (err) {
   console.log(err);
});

Promise.race(promises).then((res) => {
   console.log(res); // выведет 1 - результат первого выполнившегося промиса
}); */

//#3
/* let promise = new Promise((resolve, reject) => {
   let random = 1 + Math.round(Math.random() * 9);
   setTimeout(() => {
      let isError = false;
      if (!isError) {
         resolve(random);
      } else {
         throw new Error('Непонятная ошибка');
      }
   }, random)
})

promise.then((result) => {
   let promises = [];
   for (let i = 0; i < result; i++) {
      promises.push(new Promise(resolve => setTimeout(() => resolve(i), 1000)));
   }
   return Promise.all(promises).then((res) => {
      let sumRes = res.reduce((sum, current) => sum + current, 0);
      console.log(res);
      console.log(sumRes);
   }),
      Promise.race(promises).then((res) => {
         console.log(res);
      });
}).catch(() => {
   console.log('ERROR');
}); */


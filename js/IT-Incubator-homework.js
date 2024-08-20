/* let myPromise = new Promise((res, rej) => {
  console.log('Hello');
  //res();
  rej()
}).then(() => console.log("I'm THEN")).catch((err) => console.log(err)) */

////////////////////

/* const doAfter = (sec) => {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, sec * 1000)
  })
} */

/* let pr5 = doAfter(5);
let pr2 = doAfter(5);

pr5.then(() => console.log('I\'ve done after 5 sec' ))
pr2.then(() => console.log('I\'ve done after 2 sec' )) */

/* let pr1 = doAfter(3);
 let pr2 = pr1.then( () => console.log('Мой промис зарезолвился') );
 let something = pr2.then( () => console.log('Мой промис зарезолвился следом за pr1')); */

 /* let callback1 = () => console.log('Мой промис зарезолвился');
    let callback2 = () => console.log('Мой промис тоже зарезолвился следом');

    let pr1 = doAfter(3);
    let pr2 = pr1.then(callback1);
    pr2.then(callback2); */

    ////////////////////////

   /*  let pr = new Promise( (resolve) => {
        let data = {
            cities: [{title: "Minsk"}, {title: "Kiev"}],
            website: "it-kamasutra.com"
        }; 
        resolve(data);
    });

    pr.then( data => {
        console.log(data);
        return data
    })
    .then( data => {
        console.log(data.website);
    }) */


 ///////////////////////

 const getRandomAfter = (sec) => {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, sec * 1000)
  })
}

/* let divMain = document.getElementById('main');

let buttons = document.getElementById('buttons');
buttons.addEventListener('click', (event) => {
   let button = event.target.closest('button');

   if (button && button.innerHTML == 'AJAX') {
      fetch('/ajax.html').then(
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            });
   }
   if (button && button.innerHTML == 'AJAX 1') {
      fetch('/ajax1.html').then(
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            });
   }
   if (button && button.innerHTML == 'AJAX 2') {
      fetch('/ajax2.html').then(
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            });
   }
   //AJAX GET
   if (button && button.innerHTML = (
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            });
   }
});

//AJAX FORM
let form = document.querySelector('form');
let input1 = document.querySelector('[name="num1"]');
let input2 = document.querySelector('[name="num2"]');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   let searchParams = new URLSearchParams();

   searchParams.set('num1', input1.value);
   searchParams.set('num2', input2.value);

   let path = '/handler/?' + searchParams.toString();

   fetch(path).then(
      response => {
         return response.text();
      }
   ).then(
      text => {
         console.log(text);
      }
   );
}) */
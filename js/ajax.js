let divMain = document.getElementById('main');


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
            }
         );
   }
   if (button && button.innerHTML == 'AJAX 1') {
      fetch('/ajax1.html').then(
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            }
         );
   }
   if (button && button.innerHTML == 'AJAX 2') {
      fetch('/ajax2.html').then(
         response => {
            return response.text();
         }).then(
            text => {
               divMain.innerHTML = text;
            }
         );
   }
})


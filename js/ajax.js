let div = document.querySelector('div');
let button = document.querySelector('button');
button.addEventListener('click', () => {
   fetch('/ajax.html').then(
      response => {
         return response.text();
      }).then(
         text => {
            div.innerHTML = text;
         }
      );
});


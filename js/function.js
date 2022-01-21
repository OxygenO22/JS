///////////////  FUNCTION //////////////

//
/* 1. Переверните число задом наперед
Напишите функцию JavaScript, которая переворачивает число. */


function reverse_a_number(n) {

   return n.toString().split('').reverse().join('');

};

document.writeln(reverse_a_number(258961)); // 169852

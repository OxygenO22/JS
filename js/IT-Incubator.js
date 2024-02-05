// 1 

const numbers = [1, 2, 3];

const result = numbers.reduce((agg, curr) => {
  return agg + curr;
}, 0);

console.log(result);
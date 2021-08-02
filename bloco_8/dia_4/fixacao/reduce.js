const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const a = numbers.filter((item) => item % 2 === 0).reduce((acc, item) => acc + item);

const b = numbers.filter((item) => item % 2 === 0);


console.log(b);
console.log(a);
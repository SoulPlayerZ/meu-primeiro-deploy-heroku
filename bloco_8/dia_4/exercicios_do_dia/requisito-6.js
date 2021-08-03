const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const mediaAluno1 = grades[0].reduce((acc, cur) =>  acc + cur)/ grades[0].length;
  const mediaAluno2 = grades[1].reduce((acc, cur) =>  acc + cur)/ grades[1].length;
  const mediaAluno3 = grades[2].reduce((acc, cur) =>  acc + cur)/ grades[2].length;
  const m = [mediaAluno1, mediaAluno2, mediaAluno3];
 /*  const media = m.map((item) => {return { a: item}}); */

   return students.map((student, index) => { return { name: student, average: m[index] }})

}

// console.log(studentAverage()); 

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const a = numbers.filter((item) => item % 2 === 0).reduce((acc, item) => acc + item);

// const b = numbers.filter((item) => item % 2 === 0);


// console.log(b);
// console.log(a);



const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

//   [
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Mario', materia: 'Biologia' },
//     { name: 'Jorge', materia: 'Português' },
//     { name: 'Maria', materia: 'Química' },
//     { name: 'Natalia', materia: 'Português' },
//     { name: 'Wilson', materia: 'Português' },
//   ]

/* console.log(estudantes.map((item) => (item.nome === 'Maria'? item.materias)); */

/* const comparePoints = mat.reduce((acc, atual) => {
    if(acc.nota > atual.nota) {
        return acc;
    } else {
        return atual;
    }
});    
 */

const  mat = estudantes.map((item) => { return { nome: item.nome,
         materia: item.materias.reduce((acc, atual) => {
            if(acc.nota > atual.nota) {
                return acc;
            }   return atual;
        }).name,
    }    
});

console.log(mat);
    


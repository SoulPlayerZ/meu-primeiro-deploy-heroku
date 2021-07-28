const pessoa = (nome1, lastName) => {
  const fullName = nome1 + lastName
   const p = {
      name: `${nome1} ${lastName}`,
      email: fullName.toLowerCase() + '@trybe.com',
    };
    return p;
};


const newEmployees = (nomeC) => {
    const employees = {
      id1: nomeC('Ardrubal', 'Rodrigues'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nomeC('Enzo', 'Paladino'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nomeC('Astolfo', 'Miguel'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  console.log(newEmployees(pessoa));
/*  ---------------------Object.keys-----------------------

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

 
   
  function showSkills(event) {
    const skills = Object.keys(event);
   

    for (let index = 0; index < skills.length; index += 1) {
console.log(`${skills[index]} Nível: ${event[skills[index]]}`) ;
    }
  }

  showSkills(student2); */







/*  ----------------Object.values------------------------


  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };

  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
/*   const listSkillsValuesWithValues = (student) => Object.values(student); */
  
  // Sem Object.values
 /*  console.log(listSkillsValuesWithFor(student)); */
  
  // Com Object.values
 /*  console.log(listSkillsValuesWithValues(student)); */
  //



  //------------------Object.entries----------------------

/*   const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(let index = 0; index < pairKeyValue.length; index +=1) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  }; */



  //------------------Object.assign----------------------


  
  /* const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);

  clone.age ='18';
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

  const obj = { value1: 10, value2: 11 };
  const cloneObj = obj;


  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  newPerson.xablau = 'xulambs'
  console.log(newPerson);
  console.log(person); */
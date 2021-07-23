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

  showSkills(student2);
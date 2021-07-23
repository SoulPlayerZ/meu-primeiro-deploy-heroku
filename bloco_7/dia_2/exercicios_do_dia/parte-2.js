const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
/* -------Questão 1--------------

function alteraLesson2(par1, par2, par3) {
    const keyTurno= par2;
    par1[keyTurno] = par3;
     console.log('par', par1);
}

  alteraLesson2(lesson2, 'turno', 'manha');
  console.log('lesson 2', lesson2); */



  /* -------Questão 2-------------- */
  
  const questao2 = () => Object.keys(lesson2);  
   
  console.log(questao2());
  



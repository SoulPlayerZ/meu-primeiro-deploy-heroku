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
    const keyTurno = par2;
    par1[keyTurno] = par3;
     console.log('par', par1);
}

  alteraLesson2(lesson2, 'turno', 'manha');
  console.log('lesson 2', lesson2); */



  /* -------Questão 2-------------- 
  
  const questao2 = () => Object.keys(lesson2);  
   
  console.log(questao2());
  */

  
  /* -------Questão 3-------------- 
  const questao3 = () => Object.keys(lesson3).length;  
   
  console.log(questao3());
  */

   /* -------Questão 4--------------
  const questao4 = () => Object.values(lesson1);  
   
  console.log(questao4());
   */

 /* const newLesson1 = Object.entries(lesson1);
 const newLesson2 = Object.entries(lesson2);
 const newLesson3 = Object.entries(lesson3); */


 /* -------Questão 5-------------*/

 const allLessons = {};
 allLessons.lesson1 = lesson1;
 allLessons.lesson2 = lesson2;
 allLessons.lesson3 = lesson3;

  console.log(allLessons); 

/* -------Questão 6(Precisa do 5 'Descomentado'--------------
 const total = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
console.log(total());*/

/* -------Questão 7--------------
function returnValueKey (lesson, position) {
    const value = Object.values(lesson);
    return value[position];
}

console.log(returnValueKey(lesson3, 1)); */

/* -------Questão 8--------------
function verifyPair(lesson, key, value) {
    const entries = Object.entries(lesson);
    const  insideArray = [key, value];
    let result;
    for(let index = 0; index < entries.length; index += 1){
        const xulambs = entries[index];
        if((xulambs[0] === insideArray[0]) && (xulambs[1]  === insideArray[1])) {
            result = true;
            break;
        }else { 
            result = false;
         } 
     }   
     return result; 
 }



 console.log(verifyPair(lesson3, 'turno', 'noite'));
 // Output: true,
 console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
 // Output: false

  */



/* -------Questão BÔNUS 1 (Precisa do 5 'Descomentado'--------------
const totalStudents = ()=> lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
console.log(totalStudents());*/

/* -------Questão BÔNUS 2 (Precisa do 5 'Descomentado'--------------*/

function createReport(lessons, profName) {
 /* let teste1 = Object.assign({}, lessons.lesson1);
 let teste2 = Object.assign({}, lessons.lesson2);
 let teste3 = Object.assign({}, lessons.lesson3); */
/*  let students1 = 0;
 let students2 = 0;
 let students3 = 0;
 let totalClass = 0;

  if(lessons.lesson1.professor === profName) {
   students1 = lessons.lesson1.numeroEstudantes;
  }
  if(lessons.lesson2.professor === profName) {
    students2 = lessons.lesson2.numeroEstudantes;
  }
  if (lessons.lesson3.professor === profName) {
    students3 = lessons.lesson3.numeroEstudantes;
  }
     totalClass = students1 + students2 + students3;
}
console.log(createReport(allLessons, 'Maria Clara')) */
}
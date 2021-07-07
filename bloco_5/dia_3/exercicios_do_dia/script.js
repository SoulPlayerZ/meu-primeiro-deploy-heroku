//Exercicio 1

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    const NumberDaysList = document.querySelector('#days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
    for(let index = 0; index < dezDaysList.length; index += 1){
        const dayList = document.createElement('li');
        dayList.innerHTML = dezDaysList[index];
        dayList.classList.add('day');
      if((dezDaysList[index] === 24) || (dezDaysList[index] === 25) || (dezDaysList[index] === 31)){
        dayList.classList.add('holiday');
      }
      if((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18) || (dezDaysList[index] === 25)){
        dayList.classList.add('friday');
      }
      NumberDaysList.appendChild(dayList);
    }
    holidays("Feriados");   
    friday('Sexta-Feira');
    zoom();  
  };

  window.onload = createDaysOfTheWeek;
  
//Exercicio 2 e 3
  function holidays(string){
  let button = document.createElement('button');
  let divButton = document.querySelector('.buttons-container');
  button.id = "btn-holiday";
  button.innerHTML = string;
  divButton.appendChild(button);

  button.addEventListener('click', function (){
    let holidayBGColor = document.getElementsByClassName('holiday');
      for(let index = 0; index < holidayBGColor.length; index += 1){
        if(holidayBGColor[index].style.background === "lightblue"){
        holidayBGColor[index].style.background = "rgb(238,238,238)";
      }else{
        holidayBGColor[index].style.background = "lightblue";
    } 
  }
})
}
//exercicio 4 e 5
function friday(string){
  let button = document.createElement('button');
  let divButton = document.querySelector('.buttons-container');
  button.id = "btn-friday";
  button.innerHTML = string;
  divButton.appendChild(button);

  button.addEventListener('click', function(){
    let changeFridaysText = document.querySelectorAll('.friday');
    let  fridays =[4,11,18,25];
    for(index = 0; index < changeFridaysText.length; index += 1){
      if(changeFridaysText[index].innerHTML === "SEXTOU"){
        changeFridaysText[index].innerHTML = fridays[index];
      }else{
        changeFridaysText[index].innerHTML = "SEXTOU";
      }
      
    }
  
  })
}


//exercicio 6
function zoom(){
  const N = document.querySelector('#days');
   N.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '28px';
    event.target.style.fontWeight = '100px';
   })

   N.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '50px';
    event.target.style.fontSize = '20px';
   })
  }

 //exercicio 7
  function task(string){
    let V = document.createElement('span');
    let divTask = document.querySelector('.my-tasks');
    V.innerHTML = string;
    divTask.appendChild(V);
  }

  task("Estudar");

  // exercicio 8 

function colorL(string){
  let color = document.createElement('div');
  let myTasks = document.querySelector('.my-tasks')
  color.className = "task";
  color.id = 'taskDays';
  color.style.backgroundColor = string;
  myTasks.appendChild(color);

  //exercicio 9
  color.addEventListener('click', function(event){
    if(event.target.className === 'task'){
    event.target.className = "task selected";
    event.target.innerText = 'X';
    event.target.style.fontSize = '32px';
    }else{
      event.target.className = "task";
      event.target.innerText = '';
    }
  })
}
colorL('red');


//exercicio 10

function changeColorDays(){
  let ul = document.querySelector('#days');
  let colorDay = document.getElementById('taskDays');
  ul.addEventListener('click', function(event){
    if(colorDay.className === "task selected"){
      if(event.target.style.color === colorDay.style.backgroundColor){
    event.target.style.color = 'rgb(119,119,119)';
      }else{
        event.target.style.color = colorDay.style.backgroundColor;
      }
    }  
  })
}
changeColorDays();

/* exercicio 1 BONUS
function addTask(){
  let button = document.getElementById('btn-add');
  let input = document.getElementById('task-input');
  button.addEventListener('click',function(event){
    let newTask = document.querySelector('.my-tasks')
    let span = document.createElement('span');
    span.innerHTML = input.nodeValue;
    newTask.appendChild(newTask);
    

    criar um span e colocar dentro da div com classe .my-tasks
  })
}


 */
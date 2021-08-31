//import logo from './logo.svg';
import './App.css';

const arrayTasks = ['Estudar', 'Tomar banho', 'Escovar os dentes', 'xablau', 'uhuu', 9, 1, ['a', 'b', 'c', 'd'].map((letter) => letter + ' Alô'), 90];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    arrayTasks.map((task) => Task(task))
  
  );
}

export default App;

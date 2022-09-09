import styles from './SearchBar.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'
import { TaskHeader } from './TaskHeader'
import { v4 as uuidv4 } from 'uuid';


const tasks = [
  {
    id: uuidv4() ,
    isChecked: false,
    content: 'Tarefa 1'
  }, 
]

export function SearchBar(){


   const [taskList, setTaskList] = useState(tasks); 

   const [newTaskText, setNewTaskText] = useState(''); 

 
   function handleCrateNewTask(event:FormEvent) {
    event.preventDefault();

    setTaskList([{...taskList, newTaskText }]);

    console.log(taskList);
    
  } 

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
    console.log(newTaskText);
  }


  return (
    <>
      <form onSubmit={handleCrateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          className={styles.searchBar} 
          onChange={handleNewTaskChange}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <TaskHeader />

      {tasks.map( task => {
        return (
          <Task
            id={task.id}
            content={task.content}
            isChecked={task.isChecked}
          />
        )
      })}
    </>
  )
}
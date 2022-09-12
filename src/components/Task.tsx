import styles from './Task.module.css'
import { PlusCircle, TrashSimple } from 'phosphor-react'
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'

import { TaskHeader } from './TaskHeader'
import { v4 as uuidv4 } from 'uuid';


const tasks = [
  {
    id: uuidv4() ,
    isChecked: false,
    content: 'Tarefa 1'
  }, 
]

export function Task(){

   const [taskList, setTaskList] = useState(tasks); //inserir valor ao dar submit

   const [newTaskText, setNewTaskText] = useState(''); //captar valor digitado

   const [completedTasksCount, setCompletedTasksCount] = useState(0); //contador das tasks concluidas

 
   function handleCrateNewTask(event:FormEvent) {
    event.preventDefault();

    setTaskList([...taskList,   {id: uuidv4() , isChecked: false, content: newTaskText}]);
  } 

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleToggleCheck(event:SyntheticEvent<HTMLInputElement>){
    const id = (event.target as HTMLInputElement).id;
    
    const taskIndex = taskList.findIndex( task => {
      return task.id  == id;
      
    })
    let tempTasks = [...taskList]
    
    tempTasks[taskIndex].isChecked = !tempTasks[taskIndex].isChecked;

    setTaskList(tempTasks);

    countCheckedTasks();
  }

  function countCheckedTasks(){
    let i=0;

    taskList.map( task => {
      return (task.isChecked ? i++ : '')
    });

    setCompletedTasksCount(i);
  }

  function handleRemoveTask(event:SyntheticEvent<HTMLButtonElement>) {
    const idToRemove = event.currentTarget.id;

    console.log(idToRemove);
    
    let removedTasks = taskList.filter( task => {
      return (task.id != idToRemove);
    });

    setTaskList(removedTasks);

    //console.log(removedTasks);
    
  }
  return (
    <>
      <form onSubmit={handleCrateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          className={styles.searchBar} 
          onChange={handleNewTaskChange}
          required
        />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <TaskHeader 
        completedTasks={completedTasksCount}
        createdTasks ={taskList.length}
      />

      {taskList.map( task => {
        return (
          <div className={styles.taskBox}>
          <div className={styles.taskList}>
            <label className={styles.container}>
              <input id={task.id} type="checkbox" onClick={handleToggleCheck} />
              <span className={styles.checkMark} />
              <p>{task.content}</p>
            </label>
            <button id={task.id} onClick={handleRemoveTask}>
              <TrashSimple size={24} />
            </button>
          </div>
          
        </div>
        )
      })}
    </>
  )
}
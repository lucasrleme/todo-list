import styles from './Task.module.css'
import { PlusCircle, TrashSimple } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

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

   const [completedTasksCount, setCompletedTasksCount] = useState(0);

 
   function handleCrateNewTask(event:FormEvent) {
    event.preventDefault();

    setTaskList([...taskList,   {id: uuidv4() , isChecked: false, content: newTaskText}]);
  } 

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleToggleCheck(){
    const id = event.target.id;
    
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
    console.log(i);
    
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

      <TaskHeader 
        completedTasks={completedTasksCount}
        createdTasks ={taskList.length}
      />

      {taskList.map( task => {
        return (
          <div className={styles.taskBox}>
          <div className={styles.taskList}>
            <label className={styles.container}>
              <input className='inputCheck' id={task.id} type="checkbox" onClick={handleToggleCheck} />
              <span className={styles.checkMark} />
              <p>{task.content}</p>
            </label>
            <button>
              <TrashSimple size={24} />
            </button>
          </div>
          
        </div>
        )
      })}
    </>
  )
}
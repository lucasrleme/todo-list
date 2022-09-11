import styles from './TaskHeader.module.css'

interface TaskHeaderProps {
  completedTasks: number;
  createdTasks: number;
}

export function TaskHeader({ completedTasks , createdTasks }:TaskHeaderProps){
  return (
    <header>
      <p className={styles.tarefas}>Tarefas Criadas: {' '}
        <span>{createdTasks}</span>
      </p>
      <p className={styles.concluidas}>Concluídas: {' '} 
        <span>{completedTasks}</span> 
          {' '}de{' '} 
        <span>{createdTasks}</span>
      </p>
    </header>
  )
}
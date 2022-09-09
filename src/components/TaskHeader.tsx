import styles from './TaskHeader.module.css'

export function TaskHeader(){
  return (
    <header>
      <p className={styles.tarefas}>Tarefas Criadas: {' '}
        <span>5</span>
      </p>
      <p className={styles.concluidas}>Concluídas: {' '} 
        <span>2</span> 
          {' '}de{' '} 
        <span>5</span>
      </p>
    </header>
  )
}
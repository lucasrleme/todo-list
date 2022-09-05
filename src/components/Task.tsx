import styles from './Task.module.css'

import { TrashSimple } from 'phosphor-react'

export function Task(){
  return (
    <div className={styles.taskBox}>
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
      <div className={styles.taskList}>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={styles.checkMark} />
          Teste
        </label>
        <button>
          <TrashSimple size={24} />
        </button>
      </div>
    </div>

  )
}
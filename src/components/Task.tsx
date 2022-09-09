import styles from './Task.module.css'

import { TrashSimple } from 'phosphor-react'


interface TaskProps {
  id: string;
  isChecked: boolean;
  content: string;
}

export function Task({ id, isChecked, content }:TaskProps){
  return (
    <div className={styles.taskBox}>
      <div className={styles.taskList}>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={styles.checkMark} />
          <p>{content}</p>
        </label>
        <button>
          <TrashSimple size={24} />
        </button>
      </div>
      
    </div>

  )
}
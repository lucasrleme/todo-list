import styles from './SearchBar.module.css'
import { PlusCircle } from 'phosphor-react'

export function SearchBar(){
  return (
    <form>
      <input type="text" placeholder="Adicione uma nova tarefa" className={styles.searchBar} />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
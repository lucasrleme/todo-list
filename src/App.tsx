import styles from './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Task } from './components/Task'

export function App() {

  return (
    <div className=''>
      <Header />
      <div className={styles.wrapper}>
        <SearchBar />
        <Task />
      </div>

    </div>
  )
}


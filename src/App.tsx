import styles from './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <SearchBar />

      </div>

    </div>
  )
}


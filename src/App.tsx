import styles from './App.module.css'
import { Header } from './components/Header/Header.tsx'

function App() {
  return (
    <div className={styles.app}>
      App
      <Header />
    </div>
  )
}

export default App

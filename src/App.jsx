import { useState } from 'react'
import styles from "../src/styles/App.module.css";
import Header from './Components/Header';

function App() {
  return(
    <div className={styles.container}>
      < Header />
    </div>
  );
}

export default App
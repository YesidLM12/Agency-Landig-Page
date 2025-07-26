import { useState } from "react";
import styles from "../src/styles/App.module.css";
import Desktop from "./Layouts/Desktop";

function App() {
  return (
    <div className={styles.container}>
      <Desktop />
    </div>
  );
}

export default App;

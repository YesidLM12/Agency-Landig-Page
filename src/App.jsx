import { useState } from "react";
import styles from "../src/styles/App.module.css";
import Header from "./Components/Header";
import Desktop from "./Layouts/Desktop";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Desktop />
    </div>
  );
}

export default App;

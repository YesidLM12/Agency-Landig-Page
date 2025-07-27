import styles from "../styles/Header.module.css";
import NavBar from "./navbar";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import HamburgerMenu from "./HamburguerMenu";

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <HamburgerMenu />
      <NavBar />
      <div className={styles.contentHeader}>
        <h1 className={styles.title}>WE ARE CREEATIVES</h1>
        <img src={ArrowDown} alt="arrow" />
      </div>
    </div>
  );
}

import styles from "../styles/NavBar.module.css";
import logo from "../assets/images/logo.svg";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.containerNav}>
        <img src={logo} alt="Sunnysude" />
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            About
          </a>
          <a href="#" className={styles.link}>
            Sevices
          </a>
          <a href="#" className={styles.link}>
            Projects
          </a>
          <button className={styles.button}>CONTACT</button>
        </div>
      </div>
    </nav>
  );
}

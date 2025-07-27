import { useState } from "react";
import styles from "../styles/HamburgerMenu.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import logo from "../assets/images/logo.svg";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menuContainer}>
        <img src={logo} alt="logo" />
      <div className={styles.triangle}>
        <img
          src={hamburger}
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        />

        {open && (
          <nav className={styles.menu}>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>
                {" "}
                <button className={styles.ContactBtn}>Contact</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

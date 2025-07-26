import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <h1 className={styles.logo}>sunnyside</h1>
      <div className={styles.nav}>
        <p>About</p>
        <p>Services</p>
        <p>Projecs</p>
      </div>
      <div className={styles.redes}>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </div>
  );
}

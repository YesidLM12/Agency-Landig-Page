import styles from "../styles/Carrusel.module.css";
import milk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from "../assets/images/desktop/image-gallery-orange.jpg";
import sugar from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import cone from "../assets/images/desktop/image-gallery-cone.jpg";


export default function Carrusel() {
  return (
    <div className={styles.containerCarrusel}>
      <img src={milk} alt="" />
      <img src={orange} alt="" />
      <img src={cone} alt="" />
      <img src={sugar} alt="" />
    </div>
  );
}

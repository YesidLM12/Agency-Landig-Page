import styles from "../styles/ClientTestimonial.module.css";

export default function ClientTestimonial({ img, description, name, cargo }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="profile-Picture" />
      <p className={styles.description}>{description}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.cargo}>{cargo}</p>
    </div>
  );
}

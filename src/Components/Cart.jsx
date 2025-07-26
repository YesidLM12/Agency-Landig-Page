import styles from "../styles/Cart.module.css";

export default function Cart({title, description,background}){
    return(
        <div className={styles.containerCart} style={{ backgroundImage:`url(${background})`}}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
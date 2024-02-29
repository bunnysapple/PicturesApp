import styles from "./imagebox.module.css";

export default function ImageBox({ image }) {
  return (
    <div className={styles.imageBox}>
      <img className={styles.image} src={image} />
    </div>
  );
}

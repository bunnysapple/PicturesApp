import styles from "./image.module.css";

export default function Image({ image }) {
  return (
    <div className={styles.box}>
      <img className={styles.image} src={image} />
    </div>
  );
}

import styles from "./imagedescription.module.css";

export default function ImageDescription({ imageDescription }) {
  return (
    <div className={styles.textBox}>
      <p className={styles.text}>{imageDescription}</p>
    </div>
  );
}

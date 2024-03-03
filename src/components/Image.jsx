import styles from "./image.module.css";

export default function Image({ clicked, image }) {
  const size = clicked ? styles.clickedImage : styles.normalImage;

  return (
    <div className={styles.box}>
      <img className={`${styles.image} ${size}`} src={image} />
    </div>
  );
}

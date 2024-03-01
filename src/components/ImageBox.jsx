import Image from "./Image";
import styles from "./imagebox.module.css";

export default function ImageBox({ image }) {
  return (
    <div className={styles.imageBox}>
      <Image image={image} />
    </div>
  );
}

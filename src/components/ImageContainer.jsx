import ImageBox from "./ImageBox";
import styles from "./imagecontainer.module.css";

export default function ImageContainer({ images }) {
  console.log(images);
  return (
    <div className={styles.body}>
      {images.length !== 0
        ? images.map((image) => (
            <ImageBox key={image.id} image={image.urls.small} />
          ))
        : ""}
    </div>
  );
}

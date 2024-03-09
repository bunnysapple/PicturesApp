import { useState } from "react";
import ImageBox from "./ImageBox";
import styles from "./imagecontainer.module.css";

export default function ImageContainer({ images }) {
  const [oneClicked, setOneClicked] = useState(false);
  console.log(images);
  return (
    <div className={styles.body}>
      {images.length !== 0 ? (
        images.map((image) => (
          <ImageBox
            key={image.id}
            oneClicked={oneClicked}
            setOneClicked={setOneClicked}
            image={image}
          />
        ))
      ) : (
        <div>
          <h2>Sorry, We Couldn't Find What You Are Looking For.</h2>
          <h3>Check your spelling and try again?</h3>
        </div>
      )}
    </div>
  );
}

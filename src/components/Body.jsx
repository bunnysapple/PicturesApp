import { useEffect, useState } from "react";
import ImageBox from "./ImageBox";
import styles from "./body.module.css";
import axios from "axios";

export default function Body({ images }) {
  return (
    <div className={styles.body}>
      {images.map((image) => (
        <ImageBox key={image.id} image={image.urls.small} />
      ))}
    </div>
  );
}

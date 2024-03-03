import { useMemo, useState } from "react";
import Image from "./Image";
import styles from "./imagebox.module.css";

export default function ImageBox({ image }) {
  const [clicked, setClicked] = useState(false);

  const size = clicked ? styles.clickedBox : styles.normalBox;

  useMemo(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`${styles.imageBox} ${size}`}
    >
      <Image clicked={clicked} image={image.urls.regular} />
    </div>
  );
}

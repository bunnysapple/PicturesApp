import { useMemo, useState } from "react";
import Image from "./Image";
import styles from "./imagebox.module.css";
import CloseButton from "./CloseButton";
import Info from "./Info";

export default function ImageBox({ image }) {
  const [clicked, setClicked] = useState(false);

  const size = clicked ? styles.clickedBox : styles.normalBox;

  useMemo(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div
      onClick={() => (clicked ? "" : setClicked(true))}
      className={`${styles.imageBox} ${size}`}
    >
      {clicked ? <CloseButton clicked={clicked} setClicked={setClicked} /> : ""}
      <Image clicked={clicked} image={image.urls.regular} />
      {clicked ? <Info image={image} /> : ""}
    </div>
  );
}

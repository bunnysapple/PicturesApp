import { useState } from "react";
import Image from "./Image";
import styles from "./imagebox.module.css";
import CloseButton from "./CloseButton";
import Info from "./Info";

export default function ImageBox({ oneClicked, setOneClicked, image }) {
  const [clicked, setClicked] = useState(false);

  const size = clicked ? styles.clickedBox : styles.normalBox;
  const outline = oneClicked ? styles.clickedOutline : styles.outline;

  function clickScroll() {
    if (clicked) {
      return;
    }

    if (oneClicked) {
      return;
    }

    setOneClicked(true);

    setClicked(true);

    setTimeout(() => {
      const box = document.getElementById(image.id);
      const boxScroll = window.scrollY + box.getBoundingClientRect().top;

      window.scrollTo(0, boxScroll);
    }, 1);
  }

  return (
    <div
      onClick={() => {
        clickScroll();
      }}
      className={`${styles.imageBox} ${size} ${outline}`}
    >
      {clicked ? (
        <CloseButton
          clicked={clicked}
          setOneClicked={setOneClicked}
          setClicked={setClicked}
        />
      ) : (
        ""
      )}
      <Image id={image.id} clicked={clicked} image={image.urls.regular} />
      {clicked ? <Info image={image} /> : ""}
    </div>
  );
}

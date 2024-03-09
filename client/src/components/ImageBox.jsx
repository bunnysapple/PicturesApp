import { useMemo, useState } from "react";
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

      console.log("scroll top: " + box.getBoundingClientRect().top);
      console.log("scroll height: " + box.scrollHeight);
      console.log("scroll to: " + (box.scrollHeight + box.scrollTop));
      console.log(
        "scroll position: " +
          window.scrollY +
          boxScroll.top +
          boxScroll.height / 1.5
      );

      window.scrollTo(0, boxScroll);
    }, 1);

    // window.scrollTo(0, window.scrollY + boxScroll.top);

    // box.scrollIntoView({
    //   behavior: "smooth",
    //   inline: "nearest",
    // });
  }

  useMemo(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div
      // id={image.id}
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

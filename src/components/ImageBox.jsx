import { useMemo, useState } from "react";
import Image from "./Image";
import styles from "./imagebox.module.css";
import CloseButton from "./CloseButton";
import Info from "./Info";

export default function ImageBox({ image }) {
  const [clicked, setClicked] = useState(false);

  const size = clicked ? styles.clickedBox : styles.normalBox;

  function clickScroll() {
    if (clicked) {
      return;
    }

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
        clicked ? "" : setClicked(true);
      }}
      className={`${styles.imageBox} ${size}`}
    >
      {clicked ? <CloseButton clicked={clicked} setClicked={setClicked} /> : ""}
      <Image id={image.id} clicked={clicked} image={image.urls.regular} />
      {clicked ? <Info image={image} /> : ""}
    </div>
  );
}

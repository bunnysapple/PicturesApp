import { useState } from "react";
import TextTruncate from "react-text-truncate";
import styles from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Info({ image }) {
  const [truncate, setTruncate] = useState(1);

  return (
    <div className={styles.container} id={image.id + "_description"}>
      <div className={styles.info}>
        <TextTruncate
          line={truncate}
          textElement="a"
          href={image.links.html}
          target="_blank"
          className={styles.unsplashLink}
          truncateText="..."
          text={
            image.description !== null
              ? image.description
              : image.alt_description
          }
          containerClassName={styles.text}
          textTruncateChild={
            <button
              className={styles.moreOrLess}
              onClick={(e) => {
                setTruncate(false);
                e.preventDefault();
              }}
            >
              More
            </button>
          }
        />
        {truncate ? (
          ""
        ) : (
          <button
            className={styles.moreOrLess}
            onClick={(e) => {
              e.preventDefault();
              truncate ? setTruncate(false) : setTruncate(1);
            }}
          >
            Less
          </button>
        )}
        <p>
          By{" "}
          <a target="_blank" href={image.user.links.html}>
            {image.user.name}
          </a>
        </p>
      </div>
      <div className={styles.linksContainer}>
        <a target="_blank" href={image.urls.raw} className={styles.fullLink}>
          Open Image{" "}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.FontAwesomeIcon}
          />
        </a>
      </div>
    </div>
  );
}

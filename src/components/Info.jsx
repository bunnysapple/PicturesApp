import axios from "axios";
import { useState } from "react";
import TextTruncate from "react-text-truncate";
import ImageDescription from "./ImageDescription";
import styles from "./info.module.css";

export default function Info({ image }) {
  const [truncate, setTruncate] = useState(0.5);

  return (
    <div className={styles.container} id={image.id + "_description"}>
      {/* <ImageDescription
        imageDescription={
          image.description !== null ? image.description : image.alt_description
        }
      /> */}
      <div className={styles.info}>
        <TextTruncate
          line={truncate}
          element="p"
          truncateText="..."
          text={
            image.description !== null
              ? image.description
              : image.alt_description
          }
          containerClassName={styles.text}
          textTruncateChild={
            <a
              href={image.id + "_description"}
              onClick={(e) => {
                setTruncate(false);
                e.preventDefault();
              }}
            >
              More
            </a>
          }
        />
        {truncate ? (
          ""
        ) : (
          <a
            href={image.id + "_description"}
            onClick={(e) => {
              setTruncate(0.5);
              e.preventDefault();
            }}
          >
            Less
          </a>
        )}
      </div>
      <div className={styles.linksContainer}>
        <a className={styles.fullLink} target="_blank" href={image.urls.raw}>
          Open Image
        </a>
      </div>
    </div>
  );
}

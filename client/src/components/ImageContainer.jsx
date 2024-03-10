import ImageBox from "./ImageBox";
import styles from "./imagecontainer.module.css";

export default function ImageContainer({ images, oneClicked, setOneClicked }) {
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
        <div className={styles.errorMessage}>
          <h2>Sorry, We Couldn't Find What You Are Looking For.</h2>
          <ul>
            <li>
              <h3>
                Our servers might be down, but before jumping to conclusions...
              </h3>
            </li>
            <li>
              <h3>Check your network is working right.</h3>
            </li>
            <li>
              <h3>Check your spelling.</h3>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

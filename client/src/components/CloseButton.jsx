import styles from "./closebutton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function CloseButton({ clicked, setOneClicked, setClicked }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setClicked(!clicked);
          setOneClicked(false);
        }}
        className={styles.button}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
}

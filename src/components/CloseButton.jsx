import styles from "./closebutton.module.css";

export default function CloseButton({ clicked, setClicked }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setClicked(!clicked);
        }}
        className={styles.button}
      >
        ✖
      </button>
    </div>
  );
}

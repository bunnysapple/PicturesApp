import styles from "./closebutton.module.css";

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
        ✖
      </button>
    </div>
  );
}

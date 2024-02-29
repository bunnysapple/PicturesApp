import axios from "axios";
import styles from "./searchbar.module.css";
import { useState } from "react";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  function clickEvent(e) {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <input
          className={styles.searchBox}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton} onClick={clickEvent}>
          Go
        </button>
      </form>
    </div>
  );
}

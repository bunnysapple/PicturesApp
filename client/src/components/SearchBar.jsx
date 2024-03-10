import styles from "./searchbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  function clickEvent(e) {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <div className={styles.div}>
      <img className={styles.logo} src="/bunnysappleLogo.png" alt="logo" />
      <form className={styles.form}>
        <input
          className={styles.searchBox}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton} onClick={clickEvent}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./morebutton.module.css";
import axios from "axios";

export default function MoreButton({
  pages,
  pageNum,
  search,
  images,
  setPageNum,
  setData,
}) {
  async function getImages() {
    const baseURL = "http://localhost:8000/";
    const dynamic = `search/query=${search}&page=${pageNum + 1}`;

    axios
      .get(baseURL + dynamic)
      .then((res) => {
        setData(images.concat(res.data.results));
        console.log(images);
      })
      .catch((error) => console.log(error));
  }

  function clickEvent() {
    console.log("hi");
    getImages();
    setPageNum(pageNum + 1);
  }

  return (
    <div className={styles.container}>
      {pageNum < pages && search !== "" ? (
        <button onClick={clickEvent}>More</button>
      ) : (
        ""
      )}
    </div>
  );
}

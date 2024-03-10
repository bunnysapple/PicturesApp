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
    const baseURL = "https://pictures-app-psi.vercel.app/";
    const dynamic = `search/query=${search}&page=${pageNum + 1}`;

    axios
      .get(baseURL + dynamic)
      .then((res) => {
        setData(images.concat(res.data.results));
      })
      .catch((error) => console.log(error));
  }

  function clickEvent() {
    getImages();
    setPageNum(pageNum + 1);
  }

  return (
    <div className={styles.container}>
      {pageNum < pages && search !== "" ? (
        <button className={styles.button} onClick={clickEvent}>
          More
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

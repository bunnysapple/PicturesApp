import { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Body from "./components/Body";
import axios from "axios";
import Search1 from "../test/SearchPage1.json";
import Random from "../test/Random.json";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [pageNum, setPageNum] = useState(1);

  async function getImages() {
    const baseURL = "http://localhost:8000/";
    const dynamic = search === "" ? "random" : `search/query=${search}&page=1`;

    window.scrollTo(0, 0);

    console.log(baseURL + dynamic);

    axios
      .get(baseURL + dynamic)
      .then((res) => {
        dynamic === "random" ? setData(res.data) : setData(res.data.results),
          setPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  }

  useMemo(() => {
    scrollTo(0, 0);
    console.log(search);
    setPageNum(1);
    location.hostname !== "localhost"
      ? getImages()
      : search === ""
      ? setData(Random)
      : (setData(Search1.results), setPages(Search1.total_pages));
    // getImages();
    console.log(pages);
  }, [search]);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <Body
        pages={pages}
        images={data}
        pageNum={pageNum}
        search={search}
        setPageNum={setPageNum}
        setData={setData}
      />
    </div>
  );
}

export default App;

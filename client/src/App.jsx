import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Body from "./components/Body";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [oneClicked, setOneClicked] = useState(false);

  async function getImages() {
    const baseURL = "https://pictures-app-psi.vercel.app/";
    const dynamic = search === "" ? "random" : `search/query=${search}&page=1`;

    window.scrollTo(0, 0);

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
    setPageNum(1);
    getImages();
    setOneClicked(false);
  }, [search]);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <Body
        pages={pages}
        images={data}
        pageNum={pageNum}
        search={search}
        oneClicked={oneClicked}
        setPageNum={setPageNum}
        setData={setData}
        setOneClicked={setOneClicked}
      />
    </div>
  );
}

export default App;

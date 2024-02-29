import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Body from "./components/Body";
import axios from "axios";

function App() {
  const [value, setValue] = useState("random");
  const [search, setSearch] = useState("random");
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);

  async function getImages() {
    const baseURL = "http://localhost:8000/";

    axios
      .get(baseURL + `query=${search === "" ? "random" : search}&page=1`)
      .then((res) => {
        setData(res.data.results);
        setPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log(search);
    getImages();
  }, [search]);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <Body images={data} />
    </div>
  );
}

export default App;

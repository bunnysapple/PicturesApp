const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json(`Server is running on ${process.env.PORT}`);
});

app.get(`/search/:dynamic`, (req, res) => {
  const LINK = "https://api.unsplash.com/search/photos/?";
  const { dynamic } = req.params;
  const PER_PAGE = "&per_page=30";
  const CLIENT_ID = "&client_id=" + process.env.REACT_ACCESS_KEY;

  const options = {
    method: "GET",
    url: LINK + dynamic + PER_PAGE + CLIENT_ID,
  };

  console.log(options.url);

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/random/", (req, res) => {
  const LINK = "https://api.unsplash.com/photos/random/?";
  const COUNT = "count=30";
  const CLIENT_ID = "&client_id=" + process.env.REACT_ACCESS_KEY;

  const options = {
    method: "GET",
    url: LINK + COUNT + CLIENT_ID,
  };

  console.log(options.url);

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

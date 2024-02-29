const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get(`/:dynamic`, (req, res) => {
  const LINK = "https://api.unsplash.com/search/photos?";
  const { dynamic } = req.params;
  const PER_PAGE = "&per_page=30";
  const CLIENT_ID = "&client_id=" + process.env.REACT_ACCESS_KEY;

  const options = {
    method: "GET",
    url: LINK + dynamic + PER_PAGE + CLIENT_ID,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  res.json("hi");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

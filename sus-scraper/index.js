const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
// const puppeteer = require ('puppeteer');

const URL =
    "https://www.amazon.com/exec/obidos/search-handle-url/node=21221608011&field-keywords=";
const DOMAIN = "https://www.amazon.com";

app.use(express.json());
app.use(cors());

app.get("/api/:keyword", function (request, response) {
    axios
        .get(URL + request.params.keyword)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const scrapeData = $(".a-link-normal.s-no-outline", "div.s-result-list").toArray();
            const links = scrapeData.map(
                (item) => DOMAIN + item.attribs.href
            );
            return links.filter(
                (link) => link.indexOf("ref=sr_1_") > 0);
        })
        .then((data) => {
            response.json(data);
        })
        .catch((error) => console.log(error));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
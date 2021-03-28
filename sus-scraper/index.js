const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
// const puppeteer = require ('puppeteer');

const URL = "https://www.amazon.com/exec/obidos/search-handle-url/node=21221608011&field-keywords=";
const DOMAIN = "https://www.amazon.com";

app.use(express.json());
app.use(cors());

app.get("/api/:keyword", function (request, response) {
    axios
        .get(URL + request.params.keyword)
        .then((response) => {
            // initial axios get and filtering of correct sus products
            const html = response.data;
            const $ = cheerio.load(html);

            const scrapeLinks = $(".a-link-normal.s-no-outline", "div.s-result-list").toArray();
            const scrapeImages = $("img.s-image", ".a-link-normal.s-no-outline").toArray();
            const scrapeNames = $("img.s-image", ".a-link-normal.s-no-outline").toArray();
            const scrapeWhole = $("span.a-price-whole", ".a-size-base.a-link-normal.a-text-normal").text();
            const scrapeFract = $("span.a-price-fraction", ".a-size-base.a-link-normal.a-text-normal").text();
            const scrapeReviews = $("span.a-icon-alt").text();
            console.log(scrapeReviews.split("."));

            const finalReviews = scrapeReviews.split(".");
            const wholePrices = scrapeWhole.split(".");

            const links = scrapeLinks.map((item) => DOMAIN + item.attribs.href);
            const images = scrapeImages.map((item) => item.attribs.src);
            const names = scrapeNames.map((item) => item.attribs.alt);

            let fracts = []
            for (let i = 0; i < scrapeFract.length - 1; i++) {
                fracts.push(scrapeFract[i] + scrapeFract[i + 1])
            }

            let filteredProducts = [];

            for (let i = 0; i < links.length; i++) {
                if (links[i].indexOf("ref=sr_1_") > 0) {
                    filteredProducts.push(
                        {
                            name: names[i],
                            link: links[i],
                            image: images[i],
                            price: ("$" + (wholePrices[i] ? wholePrices[i] : "0") + "." + fracts[i]),
                            review: (finalReviews[i].substr(finalReviews.length) + finalReviews[i + 1].substr(0, 1))
                        }
                    )
                }
            }
            return filteredProducts;
        })
        .then((data) => {
            response.json(data);
        })
        .catch((error) => response.status(404).send(error));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
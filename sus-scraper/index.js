const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const rp = require('request-promise');
const url = 'https://www.amazon.com/s?k=shampoo&rh=n%3A21221608011';

app.get('/', function (request, response) {
    response.send("hi");
})

// rp(url)
//     .then(function (html) {
//         //success
//         console.log(html);
//     })
//     .catch(function (err) {
//         //handle error
//     });

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..)`));
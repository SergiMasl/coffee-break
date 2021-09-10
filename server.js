const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})



function getNews() {
    let rawdata = fs.readFileSync('news.json')
    return JSON.parse(rawdata);
}

app.get("/public/news", (req, res) => {
        res.json(getNews())
    })
    //app.post();  express

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000}`)
})
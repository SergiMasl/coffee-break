const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})



function getNews() {
    let rawdata = fs.readFileSync('news.json')
    return JSON.parse(rawdata);
}

app.get("/api/news", (req, res) => {
    res.json(getNews())
})

app.post('/api/add', jsonParser, async(req, response) => {
    const { message } = req.body;
    console.log(req.body)
    const post = req.body

    const addPost = () => {
        const oldPost = getNews();
        oldPost.push(post);
        const newPost = JSON.stringify(oldPost);

        fs.writeFileSync('./news.json', newPost)
    }

    addPost()
});



app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000}`)
})
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/start', (req, res) => {
    res.sendFile(__dirname + "/public/start.html")
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
    const post = req.body

    const addPost = () => {
        const oldPost = getNews();
        oldPost.push(post);
        const newPost = JSON.stringify(oldPost);

        fs.writeFileSync('./news.json', newPost)
    }

    addPost()
});

function getUsers() {
    let rawdata = fs.readFileSync('login.json')
    return JSON.parse(rawdata);
}

app.post('/api/start', jsonParser, async(req, res) => {
    const log = req.body;

    const oldUsers = getUsers();

    const existendUser = oldUsers.find(elem => {
        if (elem.fName === log.fName) {
            return true;
        }
    })

    if (existendUser) {
        res.statusMessage = "User alredy exist";
        return res.status(409).json({ message: 'User alredy exist' });
    }

    oldUsers.push(log);
    const newlog = JSON.stringify(oldUsers)
    fs.writeFileSync('./login.json', newlog)
    return res.status(200).json({ message: 'success' });
});




app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000}`)
})